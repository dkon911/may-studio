const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    vi: { type: String, required: true }
  },
  description: {
    en: { type: String, required: true },
    vi: { type: String, required: true }
  },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in minutes
  numberOfPhotos: { type: Number },
  includes: {
    en: [String],
    vi: [String]
  },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Package', packageSchema); 