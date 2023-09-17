// backend/routes/quotes.js

const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

// Define your API routes for CRUD operations here

// Example route to create a new quote
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
