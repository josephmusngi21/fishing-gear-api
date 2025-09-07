//Entry point for Apollo Server

const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String, // e.g., "Baitcaster", "Spinning", "Rod", "Reel"
    required: true,
  },
  specs: {
    type: String, // e.g., "7.2:1 gear ratio", "Medium Heavy"
  },
  rating: {
    type: Number, // e.g., 4.5
    min: 0,
    max: 5,
  },
}, { timestamps: true });