
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  lat: Number,
  long: Number,
  lastSeen: String,
  date: String,
  bounty: Number,
  age: Number,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Person = model('Person', userSchema, 'people');
export const Kid = model('Kid', userSchema, 'kids');

