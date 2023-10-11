// pages/index.js
import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
