"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NotFound: React.FC = () => {
  const currentPath = usePathname(); // Capture the current page path

  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">This page "<span className="text-red-500">{currentPath}</span>" is not here.</p>

      {/* Developer Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Developer Section</h2>
        <p className="text-sm text-gray-600">
          If you are seeing this page, it means that the route "<span className="text-blue-500">{currentPath}</span>" 
          does not exist. Please double-check your URL or contact support.
        </p>
      </div>
      <Link
      href='/'
      className='mt-12 dark:bg-white bg-black rounded-lg dark:text-black text-white px-3 py-2 font-semibold'
      >Back to Home</Link>
    </div>
  );
};

export default NotFound;
