import React from "react";
import eventImage from "@/public/assets/images/eventImage.svg";
import Optionicon from "@/public/assets/images/Optionicon.svg";
import location from "@/public/assets/images/location.svg";
import time from "@/public/assets/images/time.svg";
import Ellipse from "@/public/assets/images/Ellipse.svg";
import Image from "next/image";

const EventCard = () => {
  return (
    <div className="w-full rounded-lg border border-gray-300 relative">
      <button className="w-[40px] h-[40px] p-3 absolute top-4 right-4 bg-white rounded-[50%] ">
        <Image src={Optionicon} alt="elipse" className="w-full h-full" />
      </button>
      <div className="w-full h-[235px] ">
        <Image
          src={eventImage}
          alt="event"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="grid grid-cols-[1fr_0.4fr] gap-3 p-[24px]">
        <div className="grid gap-[10px]">
          <h3 className="text-2xl font-bold">Event Name</h3>
          <div className="flex gap-2 items-center">
            <Image src={location} alt="arrow" className="w-[24px] h-[24px]" />
            <p className="">Event Location</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={time} alt="arrow" className="w-[24px] h-[24px]" />
            <p>Event Time</p>
          </div>
        </div>
        <div>
          <div className="w-full bg-secondary-50 flex items-center justify-center flex-col p-[10px] rounded-md ">
            <p className="text-secondary-200 font-bold">OCT</p>
            <h3 className="text-2xl font-extrabold">08</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-[24px] py-3">
        <div className="flex gap-2 items-center">
          <Image src={Ellipse} alt="arrow" className="w-[10px] h-[10px]" />
          <p className="text-[#30980C]">Live</p>
        </div>
        <p className="font-bold px-2">Free</p>
      </div>
    </div>
  );
};

export default EventCard;
