import { Router } from 'express'
import authRouter from './auth'
import workRouter from './work'
const router = Router()

//Middlewares
router.use('/user', authRouter)
router.use('/work', workRouter)

export default router