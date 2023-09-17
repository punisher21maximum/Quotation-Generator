// EditQuote.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockQuotes } from './mockData';
import './EditQuote.scss'; // Import the SCSS file

interface Quote {
  id: number;
  name: string;
  expiryDate: string;
  status: 'valid' | 'expired';
  totalAmount: number;
  files: string[];
  tables: string[];
}

function fetchQuoteDataById(id: number) {
  const quote = mockQuotes.find((q) => q.id === id);
  return Promise.resolve(quote);
}

const EditQuote: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Define the initial quote data state with default values
  const [quoteData, setQuoteData] = useState<Quote>({
    id: 0, // Provide an initial value for id
    name: '',
    expiryDate: '',
    status: 'valid', // Provide an initial value for status
    totalAmount: 0, // Provide an initial value for totalAmount
    files: [],
    tables: [],
  });

  // Fetch the quote data when the component mounts
  useEffect(() => {
    const quoteId = parseInt(id || '1', 10);
    if (!isNaN(quoteId)) {
      fetchQuoteDataById(quoteId)
        .then((data) => {
          setQuoteData(data || quoteData); // Use the fetched data or the default values
        })
        .catch((error) => {
          console.error("Error fetching quote data:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
  
    if (files) {
      // Convert the FileList into an array of file names
      const fileNames = Array.from(files).map((file) => file.name);
      
      setQuoteData((prevData) => ({
        ...prevData,
        [name]: fileNames,
      }));
    }
  };
  
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., update the quote data
    console.log('Updated quote data:', quoteData);
  };

  return (
    <div className="edit-quote">
      <h1>Edit Quote</h1>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={quoteData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
            <div className="form-group">
    <label className="form-label">Expiry Date:</label>
    <input
        type="text"
        name="expiryDate"
        value={quoteData.expiryDate}
        onChange={handleInputChange}
        className="form-input"
    />
    </div>

    <div className="form-group">
    <label className="form-label">Status:</label>
    <select
        name="status"
        value={quoteData.status}
        onChange={handleSelectChange}
        className="form-select"
    >
        <option value="valid">Valid</option>
        <option value="expired">Expired</option>
    </select>
    </div>

    <div className="form-group">
    <label className="form-label">Total Amount:</label>
    <input
        type="number"
        name="totalAmount"
        value={quoteData.totalAmount}
        onChange={handleInputChange}
        className="form-input"
    />
    </div>

    <div className="form-group">
    <label className="form-label">Files:</label>
    <input
        type="file"
        name="files"
        accept=".pdf, .doc, .docx" // Define the allowed file types
        multiple // Allow multiple file selection
        onChange={handleFileInputChange} // Use a separate handler for file input
        className="form-input"
    />
    </div>


    <div className="form-group">
    <label className="form-label">Tables:</label>
    <input
        type="text"
        name="tables"
        value={quoteData.tables.join(', ')} // Convert array to comma-separated string
        onChange={handleInputChange}
        className="form-input"
    />
    </div>


    {/* Add fields for 'files' and 'tables' as needed */}

        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditQuote;
