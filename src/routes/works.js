import { Router } from 'express'
import Work from '@/model/Work'
import worksValidation from '@/validation/works'

const router = Router()

router.get('/', async (req, res) => {

  const { error } = worksValidation(req.body)
  if (error) return res.status(400).send(error)
  const { page, count } = req.body
  const skipping = (page - 1) * count
  const works = await Work.find({}).sort({ date: -1 }).skip(skipping).limit(count)

  res.json(works)

})

export default router