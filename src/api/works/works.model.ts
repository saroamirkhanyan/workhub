import { Schema, model } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

let WorkSchema: Schema = new Schema({
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
  },
  hashtags: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

WorkSchema.plugin(mongoosePaginate);

export default model('Work', WorkSchema);
