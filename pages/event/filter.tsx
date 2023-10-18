import React from "react";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import filterIcon from "@/public/assets/images/filter.svg";
import multiply from "@/public/assets/images/multiply.svg";
import Image from "next/image";
import EventCard from "@/components/eventCard";
import Footer from "@/components/web/footer";
import EventHeader from "@/components/eventHeader";
import Event from "@/public/images/event-image.png";

const filter = () => {
  return (
    <div className="w-full px-[20px] md:px-[40px] grid gap-4">
      <EventHeader />
      <div className="w-full md:mt-0 mt-2 flex justify-between flex-wrap gap-[15px]">
        <div className="gap-[16px] flex items-center">
          <Image
            src={arrow_back_ios}
            alt="arrow"
            className="w-[24px] h-[24px]"
          />
          <h3 className="font-montserrat text-xl md:text-[24px] text-gray-600">
            Search results for <span className="font-bold">“search input”</span>
          </h3>
        </div>
        <button className="text-base font-bold text-white bg-secondary-300 py-4 px-8 flex gap-[8px] items-center rounded-lg">
          <Image src={filterIcon} alt="filter" />
          <p>Filter</p>
        </button>
      </div>
      <div className="w-full flex gap-4 flex-wrap">
        <button className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg">
          <p>Location</p>
          <Image src={multiply} alt="close" />
        </button>
        <button className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg">
          <p>Date</p>
          <Image src={multiply} alt="close" />
        </button>
        <button className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg">
          <p>Category</p>
          <Image src={multiply} alt="close" />
        </button>
        <button className="text-base text-black border border-black py-[14px] px-3 flex gap-[1px] items-center rounded-lg">
          <p>Paid/Free</p>
          <Image src={multiply} alt="close" />
        </button>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-[30px]">
        <EventCard img={Event} isLive={true} />
        <EventCard img={Event} isLive={true} />
        <EventCard img={Event} isLive={true} />
        <EventCard img={Event} isLive={true} />
      </div>
      <Footer />
    </div>
  );
};

export default filter;
