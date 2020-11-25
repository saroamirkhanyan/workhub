import { Router } from 'express'
import Work from '@/model/Work'
import paginationValidation from '@/validation/pagination'
import searchWorkValidation from '@/validation/work/search'
const router = Router()


router.get('/', async (req, res) => {

  /// validation
  const { error } = searchWorkValidation(req.body)
  if (error) return res.status(400).send(error)

  const { hashtags } = req.body
  const works = await Work.find({
    hashtags: {
      $in: hashtags
    }
  })
    .sort({ date: -1 })
  res.json(works)

})

export default router