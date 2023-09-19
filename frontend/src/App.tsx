// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quotes from './Components/Quotes';
import EditQuote from './Components/EditQuote';
// import CreateQuote from './Components/CreateQuote';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quotes/>} />
        <Route path="/edit/:id" element={<EditQuote/>} />
        {/* <Route path="/create" element={<CreateQuote />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

