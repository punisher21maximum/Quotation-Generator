// backend/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use the port you prefer

// Middleware to parse JSON requests
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//2
// backend/server.js

const mongoose = require('mongoose');

// MongoDB connection URL (replace with your actual MongoDB URL)
const mongoURI = 'mongodb://localhost:27017/quotation_management';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


//3
// backend/server.js

const quotesRouter = require('./routes/quotes');

// Mount the API routes
app.use('/api/quotes', quotesRouter);
