// src/components/Quotes.tsx
import React, { useState, useEffect } from 'react';
import { mockQuotes } from './mockData';
import QuoteCard from './QuoteCard';
import { Quote } from '../types'; // Import the Quote type definition
import './Quotes.scss'; // Import the SCSS file

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState(mockQuotes);

  useEffect(() => {
    // Fetch quotes from your API endpoint
    fetch('http://localhost:3000/api/quotes') // Replace with the actual URL of your API
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  // Function to delete a quote by ID
  const handleDeleteQuote = async (quoteId: number) => {
    try {
      // Make a DELETE request to the API endpoint
      console.log("just before", quoteId);
      const response = await fetch(`http://localhost:3000/api/quotes/${quoteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the delete operation is successful, update the state or refresh the quotes list
        // You can reload the quotes or filter out the deleted quote from the state
        // Example: const updatedQuotes = quotes.filter((quote) => quote.id !== quoteId);
        // setQuotes(updatedQuotes);
        fetch('http://localhost:3000/api/quotes') // Replace with the actual URL of your API
        .then((response) => response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.error('Error fetching quotes:', error));
      } else {
        console.error('Failed to delete quote:', response.status);
      }
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };


  return (
    <div className="quotes">
      <h1>All Quotes</h1>
      {quotes.map((quote) => (
        <QuoteCard key={quote._id} quote={quote} onDelete={handleDeleteQuote}/>
      ))}
    </div>
  );
};

export default Quotes;
