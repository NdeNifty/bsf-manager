// components/MetricsWidget.js
"use client"
import React from 'react';

export default function MetricsWidget({ title, data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl">{data}</p>
    </div>
  );
}
