import { Router } from 'express'
import userRouter from './user'
import workRouter from './work'

import worksRouter from './works'

const router = Router()

//Middlewares
router.use('/user', userRouter)
router.use('/work', workRouter)
router.use('/works', worksRouter)


export default router