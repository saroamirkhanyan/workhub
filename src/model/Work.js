import mongoose from 'mongoose'

const workSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    min: 25,
    max: 1000,
  }
})

const workModel = mongoose.model("Work", workSchema)

export default workModel