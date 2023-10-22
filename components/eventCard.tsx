import React from "react";
import Image from "next/image";
import {EventCardProps} from "@/@types";
import {
  ClockIcon,
  LocationIcon,
  ElipseIcon,
  OptionIcon,
} from "@/components/icons/EventDetails/SocialIcons";
import moment from "moment";
import SimilarImg from "assets/images/similarevent.png";

const EventCard = ({events}: EventCardProps) => {
  return (
    <div className="w-full rounded-lg border border-gray-300 relative">
      <button className="w-[40px] h-[40px] flex items-center justify-center p-1 absolute top-4 right-4 bg-white rounded-[50%] z-50">
        <OptionIcon />
      </button>
      <div className="w-full h-[235px] ">
        {events.image ? (
          <Image
            src={events.image}
            width={2000}
            height={500}
            alt="similar events"
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          <Image
            src={SimilarImg}
            width={2000}
            height={500}
            alt="similar events"
            className="w-full h-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="grid md:grid-cols-[1fr_0.4fr] gap-1 p-1 md:md:p-[24px]">
        <div className="grid gap-[10px]">
          <h3 className="md:text-2xl font-bold">{events.name}</h3>
          <div className="flex gap-2 items-center">
            <LocationIcon />
            <p className="">{events.location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <ClockIcon />
            <p>{moment(events.startTime).format("hh:mma")}</p>
          </div>
        </div>
        <div>
          <div className="w-full bg-secondary-50 flex items-center justify-center flex-col md:p-[10px] rounded-md ">
            <p className="text-secondary-200 font-bold">
              {moment(events.startDate).format("MMM")}
            </p>
            <h3 className="text-2xl font-extrabold">
              {moment(events.startDate).format("DD")}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-[24px] py-3">
        <div className="flex gap-2 items-center">
          <ElipseIcon />
          <p className="text-[#30980C]">
            {events.ticketPrice <= 1 ? "Free" : "Paid"}
          </p>
        </div>
        <p className="font-bold px-2">{events.eventType}</p>
      </div>
    </div>
  );
};

export default EventCard;
