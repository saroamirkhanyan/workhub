import { Router } from 'express'
import Work from '@/model/Work'
const router = Router()


router.get('/', (req, res) => {
  const { hashtags } = req.body
  console.log(hashtags)
  const works = Work.find({
    hashtags: {
      '$contains': 'hi',
    },
  })
  res.json(works)

})

export default router