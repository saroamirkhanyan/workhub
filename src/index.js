import express from 'express'
import mongoose from "mongoose"
import routes from './routes'

import cors from "cors"
import "dotenv/config"

// Initializing App
const app = express()
const { PORT } = process.env

// Connect to Database
mongoose.connect(process.env.DATABASE_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => console.log(err || "Connected succesfully!")
)

//Middlwares
app.use(cors())
app.use(express.json())
app.use('/', routes)

// Start Server
app.listen(PORT)
console.log("SERVER STARTED AT", PORT, "PORT")