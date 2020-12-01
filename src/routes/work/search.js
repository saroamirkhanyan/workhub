import { Router } from 'express'
import Work from '@/model/Work'
import paginate from "@/routes/paginate"
import searchWorkValidation from '@/validation/work/search'
const router = Router()


router.get('/', paginate, async (req, res) => {
  // get count and count of skipping works
  const { count, skipping } = req.pagination
  // get query
  const { query } = req.query

  /// validation
  const { error } = searchWorkValidation(query)
  if (error) return res.status(400).send(error)

  const hashtags = query.split(' ')
  const works = await Work.find({
    hashtags: {
      $in: hashtags
    }
  })
    .sort({ date: -1 })
    .skip(skipping)
    .limit(count)
  res.json(works)

})

export default router