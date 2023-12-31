const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to 3000

// Import your API router
const apiRouter = require('./src/routes/api'); // Adjust the path as needed

console.log("apr router loaded");

// db
require('./src/app');

// Define middleware to parse JSON request bodies
app.use(express.json());

// Use the API router
app.use('/api', apiRouter); // Mount the router under the '/api' path

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
