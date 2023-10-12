// pages/auth/login.js
'use client';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'

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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-100 shadow-2xl rounded-lg p-10 w-96">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">Login</h1>
        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Email:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          >
            Login with Email
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded mt-6 focus:outline-none focus:shadow-outline"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;