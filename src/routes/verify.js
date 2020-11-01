import jwt from 'jsonwebtoken'
import User from "@/model/User"

export default async function verify(req, res, next) {
  const token = req.header("auth-token")
  if (!token) return res.status(401).send("Access denied")
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = await User.findOne({ _id: verified._id })
    next()
  }
  catch (err) {
    res.status(400).send("Invalid Token")
  }
}