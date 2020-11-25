import { Router } from 'express'
import Work from '@/model/Work'
import paginationValidation from '@/validation/pagination'

const router = Router()

router.get('/', async (req, res) => {
  let { page, count } = req.query
  //  To Number
  page = parseInt(page)
  count = parseInt(count)

  // validation
  const { error } = paginationValidation({ page, count })
  if (error) return res.status(400).send(error)

  const skipping = (page - 1) * count
  // get works
  const works = await Work.find({}).sort({ date: -1 }).skip(skipping).limit(count)
  res.json(works)

})

export default router