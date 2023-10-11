// components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import TopMenu from './Topmenu';

const Layout = ({ children, activeRoute  }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
      
        <Sidebar  activeRoute={activeRoute}  />
        <main className="w-full">
        <TopMenu username="User123"/>
          {children}</main>
      </div>
     
    </div>
  );
};

export default Layout;
