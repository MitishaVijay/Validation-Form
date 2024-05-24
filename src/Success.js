import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data submitted</p>;
  }

  return (
    <div className="success-container">
      <h2>Details</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          key !== 'showPassword' && <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Success;
