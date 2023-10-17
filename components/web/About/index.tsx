import Image from "next/image";
import React from "react";
import VectorImg from "../../../public/images/vectorImg.png";
import aboutImg from "../../../public/images/aboutImg.png";

const About = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center px-20 py-20 mx-auto relative w-full'>
        <p className='text-red text-sm font-bold font-sans mb-5'>Discover</p>
        <div className='max-w-3xl'>
          <p className='text-4xl text-center font-montserrat font-semibold text-[#3B3B3B] mb-6'>
            Simplify Event Management with Our Platform
          </p>
          <p className='text-center '>
            Our platform offers easy registration, event discovery, and
            networking opportunities, making event management a breeze.
          </p>
        </div>

        <Image
          src={VectorImg}
          alt='vector_img'
          className='absolute h-[200px] w-8 left-20'
        />
      </div>

      <div className='px-20 w-full flex'>
        <div className='w-3/12'>A</div>
        <div className='w-6/12 p-5'>
          <Image src={aboutImg} alt='hero-img' />
        </div>
        <div className='w-3/12'>A</div>
      </div>
    </>
  );
};

export default About;
