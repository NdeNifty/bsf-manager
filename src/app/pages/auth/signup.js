// pages/auth/signup.js
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignup = () => {
    // Redirect to the Google OAuth signup page
    window.location.href = '/api/auth/signup/google';
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Send a signup request to your backend
    const userData = { email, password };

    // Example fetch request:
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Signup successful, you can redirect to the login page or dashboard
        window.location.href = '/auth/login';
      } else {
        // Handle signup failure (e.g., show an error message)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
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

        <button type="submit">Sign Up</button>

        <button onClick={handleGoogleSignup}>Sign Up with Google</button>
      </form>
    </div>
  );
}

export default Signup;
