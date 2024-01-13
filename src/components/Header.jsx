// StickyHeader component (StickyHeader.jsx)
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 0;

      setIsAtTop(!isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-4 z-20 transition-all duration-200 ${
        isAtTop ? 'bg-slate-50' : 'backdrop-blur-md shadow-lg bg-white/30'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Logo</div>
          <div className="flex space-x-4">
            <a href="#" className='text-gray-800 hover:text-gray-600'>
              Home
            </a>
            <a href="#" className={`text-${isAtTop ? 'white' : 'gray-800'} hover:text-gray-600`}>
              About
            </a>
            <a href="#" className={`text-${isAtTop ? 'white' : 'gray-800'} hover:text-gray-600`}>
              Services
            </a>
            <a href="#" className={`text-${isAtTop ? 'white' : 'gray-800'} hover:text-gray-600`}>
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
