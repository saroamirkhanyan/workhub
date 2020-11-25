import { Router } from 'express'
import Work from '@/model/Work'
import paginationValidation from '@/validation/pagination'
import searchWorkValidation from '@/validation/work/search'
const router = Router()


router.get('/', async (req, res) => {
  const { query } = req.query
  const hashtags = query.split(' ')
  /// validation
  const { error } = searchWorkValidation({ hashtags })
  if (error) return res.status(400).send(error)

  const works = await Work.find({
    hashtags: {
      $in: hashtags
    }
  })
    .sort({ date: -1 })
  res.json(works)

})

export default router