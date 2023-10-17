import Image from "next/image";
import React from "react";
import vectorImg from "../../../public/images/Ellipse.png";

const AboutCard = ({title, subtitle}: any) => {
  return (
    <div className='flex flex-col items-center '>
      <Image
        src={vectorImg}
        alt='vector-img'
        className='w-6 h-6 object-contain mb-4'
      />

      <p className='mb-4 font-semibold text-xl font-montserrat text-[#3B3B3B]'>
        {title}
      </p>

      <p className='text-center text-[#666] font-sans'>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
