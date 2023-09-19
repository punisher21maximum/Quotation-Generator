// src/components/QuoteCard.tsx

import React from 'react';
import { Quote } from '../types';
import './QuoteCard.scss'; // Import the SCSS file
import { Link } from 'react-router-dom';


interface QuoteCardProps {
  quote: Quote;
  onDelete: (quoteId: number) => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onDelete }) => {

  return (
    <div className="quote-card">
      <h2>{quote.name}</h2>
      <p>Expiry Date: {quote.expiryDate}</p>
      <p>Status: {quote.status}</p>
      <p>Total Amount: ${quote.totalAmount}</p>
      {/* Add UI for files and tables here */}
      <Link to={`/edit/${quote._id}`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={() => onDelete(quote._id)}>Delete</button>
    </div>
  );
};

export default QuoteCard;
