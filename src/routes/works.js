import { Router } from 'express'
import Work from '@/model/Work'
import paginate from '@/routes/paginate'
const router = Router()

router.get('/', paginate, async (req, res) => {
  // get count and count of skipping works
  let { count, skipping } = req.pagination
  // get works
  const works = await Work.find({}).sort({ date: -1 }).skip(skipping).limit(count)
  res.json(works)
})

export default router