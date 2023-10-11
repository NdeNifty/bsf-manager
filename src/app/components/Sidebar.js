'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const isActive = (route) => {
    return route === router.pathname;
  };

  return (
    <nav className="bg-gray-800 w-64 text-white min-h-screen">
      {/* Sidebar content */}
      <div className="py-4 text-white text-xl font-semibold text-center">BSF Manager</div>
      <ul className="py-2">
        <li className={`p-2 ${isActive('/') ? 'bg-blue-500' : ''}`}>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
        <li className={`p-2 ${isActive('/dataentry') ? 'bg-blue-500' : ''}`}>
          <Link href="/dataentry">
            <a>Data Entry</a>
          </Link>
        </li>
        <li className={`p-2 ${isActive('/tasks') ? 'bg-blue-500' : ''}`}>
          <Link href="/tasks">
            <a>Tasks</a>
          </Link>
        </li>
        <li className={`p-2 ${isActive('/inventory') ? 'bg-blue-500' : ''}`}>
          <Link href="/inventory">
            <a>Inventory</a>
          </Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
