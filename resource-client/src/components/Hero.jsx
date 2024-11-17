import React from 'react';
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8 md:py-16 bg-white">
      <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 md:pr-12">
        <div className="flex justify-center">
          <img src="Ster.svg" alt="Star" className="w-12 h-12" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
          Power Your <span className="text-blue-500">Neighborhood</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 text-center md:text-left mb-4">
          Share, sell, and access light anywhere with decentralized ease.
        </p>

        <div className="flex justify-end items-center space-x-4 mb-6 md:block hidden ml-auto">
          <MdOutlineSubdirectoryArrowLeft className="text-6xl md:text-8xl text-blue-500 hover:text-blue-800 transition" />
        </div>

        <div className="flex justify-center md:justify-start mt-6 md:mt-0">
          <a
            href="#"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
          >
            <span>Get Started</span>
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2">
        <img
          src="Sideimage.svg"
          alt="Group"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
