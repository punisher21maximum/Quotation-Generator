const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
//db
const { connectToDatabase } = require('../app');

// Create a new quote
router.post('/quotes', quoteController.createQuote);

// Retrieve all quotes
router.get('/quotes', quoteController.getAllQuotes);

// Retrieve a quote by ID
router.get('/quotes/:id', quoteController.getQuoteById);

// Update a quote by ID
router.put('/quotes/:id', quoteController.updateQuote);

// Delete a quote by ID
router.delete('/quotes/:id', quoteController.deleteQuote);

module.exports = router;
