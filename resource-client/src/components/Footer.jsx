import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {

  const updateTime = new Date().getFullYear()
  return (
    <footer className="bg-[#0F051D] text-white py-8 px-4">
      <div className="max-w-[1410px] mx-auto flex flex-col md:flex-row md:justify-between items-center px-[50px] md:items-start space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="text-lg font-bold">
            <span className="text-3xl text-yellow-400">Energy</span>
            <span className="text-blue-400">Hub</span>
          </div>
          <p className="text-sm max-w-xs">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-2 items-center md:items-start pl-[250px]">
          <h4 className="text-lg font-semibold">Quick Link</h4>
          <a href="#about" className="text-sm hover:text-gray-400">
            About
          </a>
          <a href="#how-it-works" className="text-sm hover:text-gray-400">
            How it works
          </a>
          <a href="#roadmap" className="text-sm hover:text-gray-400">
            Roadmap
          </a>
          <a href="#faq" className="text-sm hover:text-gray-400">
            FAQ
          </a>
        </div>

        <div className="flex flex-col space-y-2 items-center md:items-start">
          <h4 className="text-lg font-semibold">Community</h4>
          <a href="#documentation" className="text-sm hover:text-gray-400">
            Documentation
          </a>
          <a href="#web3dev" className="text-sm hover:text-gray-400">
            Web3Dev
          </a>
          <a href="#linktree" className="text-sm hover:text-gray-400">
            LinkTree
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm px-[50px]">
        <p>Copyright © {updateTime} EnergyHub</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#privacy-policy" className="hover:text-gray-400">
            Privacy policy
          </a>
          <a href="#terms-of-use" className="hover:text-gray-400">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
