import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Success from './Success';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/details" element={<Success />} />
    </Routes>
  </Router>
);

export default App;
