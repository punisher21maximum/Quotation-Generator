// src/components/Quotes.tsx

import React, { useState } from 'react';
import { mockQuotes } from './mockData';
import QuoteCard from './QuoteCard';
import { Quote } from '../types'; // Import the Quote type definition
import './Quotes.scss'; // Import the SCSS file


const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState(mockQuotes);

  return (
    <div className="quotes">
      <h1>All Quotes</h1>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};

export default Quotes;
