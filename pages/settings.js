// pages/index.js
'use client';
import React from 'react';
import Layout from '../components/Layout';
import FarmSettings from '../components/Settings';
import 'tailwindcss/tailwind.css'

function FarmSettingsPage() {
  return (
    <Layout>
      <FarmSettings />
    </Layout>
  );
};

export default FarmSettingsPage ;

