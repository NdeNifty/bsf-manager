// components/Layout.js
'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TopMenu from './Topmenu';

const Layout = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
      
      {isClient && <Sidebar />}
        <main className="w-full">
        <TopMenu username="User123"/>
          {children}</main>
      </div>
     
    </div>
  );
};

export default Layout;
