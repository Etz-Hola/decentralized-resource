import React from "react";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import arrow from "/Vector.svg";
import side from "/Sideimage.svg";
import star from "/Ster.svg";

const Hero = () => {
  return (
    <>
      <section className=" bg-[#FFFDF6] flex py-[50px] md:px-[74px] gap-[100px] md:flex-row flex-col items-center justify-center ">
        <div className=" w-full md:w-[494px] p-6 flex flex-col sm:items-center md:text-left md:justify-start sm:justify-center text-center ">
          <div className="flex md:justify-end ">
            <img src={star} className="" />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[54px] font-400 ">
              Power Your <span className="text-[#74A0AF] ">Neighborhood</span>
            </h1>
            <p className="text-[24px] ">
              Share, Sell, and Access Light <br /> Anywhere with Decentralized
              Ease.
            </p>
          </div>

          <button className="mt-[50px] flex items-center gap-2 bg-[#55C8ED] p-[6px] border-[1px] fold-bold relative  rounded border-black  text-base  transition duration-100">
            Get Started <FaArrowRight />
          </button>
        </div>

        <div className="">
          <img src={side} className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Hero;
