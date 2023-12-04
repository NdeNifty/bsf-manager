// pages/index.js
'use client';
import React from 'react';
import Layout from '../components/Layout';
import Sales from '../components/Sales';
import 'tailwindcss/tailwind.css'

function Taskspage() {
  return (
    <Layout>
      <Sales />
    </Layout>
  );
};

export default Taskspage;

