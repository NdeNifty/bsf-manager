// pages/index.js
'use client';
import React from 'react';
import Layout from '../components/Layout';
import Tasks from '../components/Tasks';
import 'tailwindcss/tailwind.css'

function Taskspage() {
  return (
    <Layout>
      <Tasks />
    </Layout>
  );
};

export default Taskspage;

