import express from 'express'
import mongoose from "mongoose"
import routes from './routes'

import cors from "cors"
import "dotenv/config"
// Initializing App
const app = express()

// Connect to Database
mongoose.connect(process.env.DATABASE_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => console.log(err)
)

//Middlware
app.use(cors())
app.use('/', routes)
