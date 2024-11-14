import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#0F051D] text-white py-4 px-6 flex items-center justify-between w-full xl:w-[1410px] mx-auto ">
    
    <div className="text-lg font-bold">
    <span className="text-3xl text-yellow-400">Energy</span>
        <span className="text-blue-400">Hub</span>
      </div>

      
      <nav className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
        <a href="#features" className="hover:text-gray-400">Features</a>
        <a href="#solutions" className="hover:text-gray-400">Solutions</a>
        <a href="#pricing" className="hover:text-gray-400">Pricing</a>
      </nav>

      <div className='pr-[60px]'>
      <button className="bg-[#7EE3F5] text-black py-2 px-4  rounded-md hover:bg-[#5dc7d5]">
        Connect Wallet
      </button>
      </div>
      
    </header>
  );
};

export default Header;