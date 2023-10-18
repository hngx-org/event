import Image from "next/image";
import React from "react";
import Spiral from "../../../public/images/spiral.svg";
import vectorImg from "../../../public/images/vector_img.png";
import HeroImg from "../../../public/images/heroImg.png";
import Circle from "../../../public/images/circle.png";

const HeroSection = () => {
  return (
    <div
      className='h-[93vh] w-screen 2xl:xl:max-w-7xl mx-auto flex flex-col gap-y-5 md:gap-x-4 lg:gap-x-1 md:flex-row items-center justify-center md:justify-normal px-5 lg:px-20'
      style={{
        background:
          "linear-gradient(102deg, rgba(128, 0, 0, 0.12) -1.54%, rgba(128, 0, 0, 0.06) 18.74%, rgba(128, 0, 0, 0.08) 48.29%, rgba(128, 0, 0, 0.10) 79.52%, rgba(128, 0, 0, 0.05) 100%)",
      }}
    >
      <Image
        src={Spiral}
        alt='spiral'
        className='absolute top-10 object-contain left-0'
      />
      <div className='h-[93vh] w-4/12 absolute bg-red right-0 z-2 hidden md:block'></div>
      <div className='relative max-w-[508px]'>
        <Image
          src={vectorImg}
          alt='vector_img'
          className='absolute -top-6 right-10 w-10 hidden lg:block'
        />
        <p className='font-semibold text-4xl lg:text-5xl text-[#3B3B3B] mb-6 font-montserrat lg:leading-[56px] '>
          Discover Exciting Events Near You
        </p>
        <p className='font-base font-sans font-medium mb-8'>
          Join our vibrant community and never miss out on the best events
          happening in your area.
        </p>
        <button className='rounded-md px-5 py-2 bg-red text-white'>
          Join an Event
        </button>
      </div>
      <div className='z-10 w-full lg:w-4/6 flex justify-center'>
        <Image src={HeroImg} alt='hero_img' className='z-10 w-[500px]' />
      </div>
      <div className='absolute bottom-10 flex items-center flex-wrap justify-center text-sm px-5 md:px-0'>
        ORGANIZE <Image src={Circle} alt='circle' className='w-2 h-2 mx-2' />{" "}
        JOIN
        <Image src={Circle} alt='circle' className='w-2 h-2 mx-2' /> CONNECT
        <Image src={Circle} alt='circle' className='w-2 h-2 mx-2' /> NETWORK
      </div>
    </div>
  );
};

export default HeroSection;
