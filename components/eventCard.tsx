import { EventCardProps } from "@/@types";
import Optionicon from "@/public/assets/images/Optionicon.svg";
import locationIcon from "@/public/assets/images/location.svg";
import timeIcon from "@/public/assets/images/time.svg";
import Image from "next/image";
import { useState, useMemo } from "react";

export default function EventCard({
  img,
  title,
  location,
  startTime,
  month,
  cost,
  endTime,
  id,
}: EventCardProps) {
  const formattedDate = useMemo(() => formatDate(startTime), [startTime]);
  const eventStatus = useMemo(
    () => calculateEventStatus(startTime, endTime),
    [startTime, endTime]
  );

  function formatDate(dateTimeString: string) {
    const eventDate = new Date(dateTimeString);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return {
      year: eventDate.getFullYear(),
      month: monthNames[eventDate.getMonth()],
      day: eventDate.getDate().toString().padStart(2, "0"),
      hours: eventDate.getUTCHours().toString().padStart(2, "0"),
      minutes: eventDate.getUTCMinutes().toString().padStart(2, "0"),
      seconds: eventDate.getUTCSeconds().toString().padStart(2, "0"),
    };
  }

  function calculateEventStatus(startTime: string, endTime: string) {
    const currentDateTime = new Date();
    const startDateTime = new Date(startTime);
    const endDateTime = new Date(endTime);

    if (currentDateTime < startDateTime) {
      return "upcoming";
    } else if (
      currentDateTime >= startDateTime &&
      currentDateTime <= endDateTime
    ) {
      return "live";
    } else {
      return "past";
    }
  }

  return (
    <div className="border border-gray-200 bg-[#FAFAFA] rounded-md">
      <div className="relative">
        <div className="w-full h-[235px] ">
          <Image
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <button className="w-[40px] h-[40px] p-3 absolute top-4 right-4 bg-white rounded-[50%]">
          <Image src={Optionicon} alt="elipse" className="w-full h-full" />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <h4 className="font-black text-xl">{title}</h4>
            <div className="mt-1.5 flex gap-2 font-semibold">
              <Image
                src={locationIcon}
                alt="arrow"
                className="w-[24px] h-[24px]"
              />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-[#962B2B] bg-[#F2E6E6] px-3 py-0.5 text-center text-lg">
            <span className="block">{formattedDate.month}</span>
            <span className="block font-black">{formattedDate.day}</span>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Image src={timeIcon} alt="arrow" className="w-[24px] h-[24px]" />
          <span className="font-semibold">
            {formattedDate.hours}:{formattedDate.minutes}:
            {formattedDate.seconds}
          </span>
        </div>
        <div className="mt-4 flex justify-between">
          {eventStatus && (
            <div
              className={`flex ${
                eventStatus === "live"
                  ? "text-[#30980C]"
                  : eventStatus === "upcoming"
                  ? "text-gray-400"
                  : "text-red-700"
              } font-bold`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto mr-1.5"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={
                    eventStatus === "live"
                      ? "#30980C"
                      : eventStatus === "upcoming"
                      ? "gray"
                      : "red"
                  }
                />
              </svg>
              <p className="uppercase">{eventStatus}</p>
            </div>
          )}
          <p className="font-bold text-[#1C1C1C]">
            {cost === 0 ? "Free" : `₦ ${cost}`}
          </p>
        </div>
      </div>
    </div>
  );
}
