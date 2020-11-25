import { Router } from 'express'
import searchRouter from './search'
import createRouter from './create'

const router = Router()


//search work
router.use('/search', searchRouter)
router.use(createRouter)



export default router