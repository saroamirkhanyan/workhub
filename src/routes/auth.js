import { Router } from "express"
import User from '../model/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { registerValidation, loginValidation } from '@/validation'

const router = Router()


router.post('/register', async (req, res) => {
  //Validation

  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  //Checking if the user already in the database
  const emailExist = await User.findOne({
    email: req.body.email,
  })
  if (emailExist) return res.status(400).send("Email already exists")
  //Hash The Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)


  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })

  try {
    //save user
    const savedUser = await user.save()
    //Create token
    const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token)
    res.send(savedUser)
  } catch (err) {
    res.status(400).send(err)
  }


})

router.post('/login', async (req, res) => {
  //Validation
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  //Checking if the user already in the database
  const user = await User.findOne({
    email: req.body.email,
  })
  if (!user) return res.status(400).send("Email is not valid")
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send("Invalid Password")
  //Create token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token)
  res.send(user)
})

export default router