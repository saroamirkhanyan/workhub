import express from 'express'
import mongoose from "mongoose"
import "dotenv/config"
// Initializing App
const app = express()

mongoose.connect(process.env.DATABASE_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => console.log("Connected to db!"))


