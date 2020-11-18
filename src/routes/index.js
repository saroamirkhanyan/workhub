import { Router } from 'express'
import userRouter from './user'
import workRouter from './work'

const router = Router()

//Middlewares
router.use('/user', userRouter)
router.use('/work', workRouter)

export default router