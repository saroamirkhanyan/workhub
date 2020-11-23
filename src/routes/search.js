import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  const { query } = req.query
  console.log(query)
  res.send('hello world')
})

export default router