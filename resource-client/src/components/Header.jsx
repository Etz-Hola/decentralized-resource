import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0F051D] text-white py-4 px-6 flex items-center justify-between w-full max-w-[1410px] mx-auto relative">
      {/* Brand Section */}
      <div className="text-lg font-bold">
        <span className="text-3xl text-yellow-400">Energy</span>
        <span className="text-blue-400">Hub</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-8">
        <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
        <a href="#solutions" className="hover:text-gray-400 transition-colors">Solutions</a>
        <a href="#pricing" className="hover:text-gray-400 transition-colors">Pricing</a>
      </nav>

      {/* Connect Wallet Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-[#7EE3F5] text-black py-2 px-4 rounded-md hover:bg-[#5dc7d5] transition-colors">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="p-2 bg-transparent hover:bg-[#5dc7d5] rounded-md focus:outline-none transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F051D] flex flex-col space-y-4 py-4 px-6 md:hidden">
          <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
          <a href="#solutions" className="hover:text-gray-400 transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-gray-400 transition-colors">Pricing</a>
          <button className="bg-[#7EE3F5] text-black py-2 px-4 rounded-md hover:bg-[#5dc7d5] transition-colors">
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
