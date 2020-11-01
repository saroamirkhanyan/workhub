import { Router } from 'express'
import verify from "./verify"
const router = Router()

router.post('/', verify, async (req, res) => {
  res.json(req.user)
})

export default router