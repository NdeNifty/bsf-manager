// pages/index.js
'use client';
import React from 'react';
import Layout from '../components/Layout';
import Inventory from '../components/Inventory';
import 'tailwindcss/tailwind.css'

function Inventorypage() {
  return (
    <Layout>
      <Inventory />
    </Layout>
  );
};

export default Inventorypage ;

