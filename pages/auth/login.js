// pages/auth/login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    
    // Send a login request to your backend with email/password
    const userData = { email, password };

    // Example fetch request:
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Authentication successful, you can redirect to the dashboard
        window.location.href = '/dashboard';
      } else {
        // Handle login failure (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = () => {
    // Redirect to the Google OAuth login page
    window.location.href = '/api/auth/google';
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login with Email</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
