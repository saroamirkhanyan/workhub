import { Router } from "express"
import authRouter from "./auth"

const router = Router()

import Joi from "@hapi/joi"

router.use('/user', authRouter)



export default router