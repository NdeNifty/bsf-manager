//signup.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        window.location.href = '/';
      } else {
        // Handle signup failure (e.g., show an error message)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = () => {
    // Redirect to the Google OAuth login page using Passport
    window.location.href = 'http://localhost:3001/auth/google'; // Modify the URL as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-3xl font-serif mb-6 text-gray-900">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Email:</label>
            <input
              className="shadow appearance-none bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-gray-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">Password:</label>
            <input
              className="shadow appearance-none bg-white border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>

        <button
          onClick={handleGoogleSignup}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 transition duration-300 ease-in-out"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
