// backend/models/quote.js

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: String,
  expiryDate: Date,
  status: String,
  totalAmount: Number,
  files: [String], // For file names or AWS S3 links
  tables: [Object], // Define the schema for tables as needed
});

module.exports = mongoose.model('Quote', quoteSchema);
