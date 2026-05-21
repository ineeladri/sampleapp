import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [result, setResult] = useState('');

  const credentials = JSON.parse(localStorage.getItem('credentials'));

  const callApi = async (endpoint) => {
    try {
      const response = await axios.get(`http://localhost:5000${endpoint}`);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult('API Failed');
    }
  };

  return (
    <div className="dashboard">
      <h1>API Dashboard</h1>

      <div className="credentials-box">
        <h3>Login Credentials</h3>
        <p><strong>Username:</strong> {credentials.username}</p>
        <p><strong>Password:</strong> {credentials.password}</p>
      </div>

      <div className="api-buttons">
        <button onClick={() => callApi('/api/users')}>
          Users API
        </button>

        <button onClick={() => callApi('/api/products')}>
          Products API
        </button>

        <button onClick={() => callApi('/api/orders')}>
          Orders API
        </button>
      </div>

      <div className="result-box">
        <h3>API Response</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default Dashboard;
