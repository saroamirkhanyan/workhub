import { Router } from 'express'
import verify from "./verify"
import Work from '@/model/Work'
import workValidation from "@/validation/work"

const router = Router()

//creating work
router.post('/', verify, async (req, res) => {
  const userData = {
    userId: req.user._id,
    ...req.body
  }
  // validation
  const { error } = workValidation(userData)
  if (error) return res.status(400).send(error)
  // trying create new work
  const work = new Work(userData)
  try {
    const savedWork = await work.save()
    req.status(200).json(savedWork)
  }
  catch (err) {
    res.status(400).send(err)
  }
})



export default router