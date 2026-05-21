import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('credentials', JSON.stringify(response.data.credentials));

      navigate('/dashboard');
    } catch (err) {
      setError('Invalid Username or Password');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login Page</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error">{error}</p>}

        <div className="demo-credentials">
          <h4>Demo Credentials</h4>
          <p>Username: admin</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
