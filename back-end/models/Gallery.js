const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    vi: { type: String, required: true }
  },
  description: {
    en: { type: String },
    vi: { type: String }
  },
  category: {
    type: String,
    enum: ['wedding', 'portrait', 'family', 'event'],
    required: true
  },
  imageUrl: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gallery', gallerySchema); 