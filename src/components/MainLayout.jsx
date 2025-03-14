
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex h-screen bg-gym-purpleBase">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Navbar />
        <main 
          className={`flex-1 p-6 overflow-auto transition-opacity duration-500 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
