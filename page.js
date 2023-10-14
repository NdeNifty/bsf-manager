// pages/index.js
'use client';
import React from 'react';
import Layout from './components/Layout';
import 'tailwindcss/tailwind.css'

function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
