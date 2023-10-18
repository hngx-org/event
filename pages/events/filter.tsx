"use client";
import React, { useState, useEffect } from "react";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import filterIcon from "@/public/assets/images/filter.svg";
import multiply from "@/public/assets/images/multiply.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import eventImage from "@/public/images/event-image.png";
import { useSearchParams } from "next/navigation";
import EventLayout from "@/components/layout/eventLayout";
import EventCard from "@/components/eventCard";

interface filterParam {
  location?: string | null;
  date?: string | null;
  category?: string | null;
  fee?: string | null;
}

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [removeAlltxt, setRemoveAlltxt] = useState(true);
  const [params, setParams] = useState<filterParam>();
  const location = searchParams.get("location");
  const category = searchParams.get("category");
  const date = searchParams.get("date");
  const fee = searchParams.get("fee");

  const remove = (keyToRemove: keyof filterParam) => {
    if (params) {
      const newParams = { ...params };
      delete newParams[keyToRemove];
      setParams(newParams);

      if (
        !newParams.location &&
        !newParams.category &&
        !newParams.date &&
        !newParams.fee
      ) {
        setRemoveAlltxt(false);
      }
    }
  };

  const removeAll = () => {
    setParams({
      location: null,
      date: null,
      category: null,
      fee: null,
    });
    router.push("/timeline");
  };

  useEffect(() => {
    setParams({
      location,
      category,
      date,
      fee,
    });
  }, [location, category, date, fee]);

  const stringWithoutSingleQuotes = (data: string) => data.replace(/'/g, "");

  return (
    <EventLayout>
      <div className="w-full grid gap-4">
        <div className=" grid gap-4">
          <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
            <div className="w-full md:mt-0 mt-2 flex justify-between flex-wrap gap-[15px]">
              <div className=" flex gap-4 flex-wrap items-center">
                {params?.location && (
                  <button
                    className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg"
                    onClick={() => remove("location")}
                  >
                    <p>{stringWithoutSingleQuotes(params.location)}</p>
                    <Image src={multiply} alt="close" />
                  </button>
                )}
                {params?.date && (
                  <button
                    className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg"
                    onClick={() => remove("date")}
                  >
                    <p>{stringWithoutSingleQuotes(params.date)}</p>
                    <Image src={multiply} alt="close" />
                  </button>
                )}
                {params?.category && (
                  <button
                    className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg"
                    onClick={() => remove("category")}
                  >
                    <p>{stringWithoutSingleQuotes(params.category)}</p>
                    <Image src={multiply} alt="close" />
                  </button>
                )}
                {params?.fee && (
                  <button
                    className="text-base text-black border border-black py-[14px] px-3 flex gap-[10px] items-center rounded-lg"
                    onClick={() => remove("fee")}
                  >
                    <p>{stringWithoutSingleQuotes(params.fee)}</p>
                    <Image src={multiply} alt="close" />
                  </button>
                )}
                {removeAlltxt && (
                  <button
                    className="underline text-secondary-300 cursor-pointer"
                    onClick={removeAll}
                  >
                    Remove All
                  </button>
                )}
              </div>
              <button className="text-base font-bold text-white bg-secondary-300 py-4 px-8 flex gap-[8px] items-center rounded-lg">
                <Image src={filterIcon} alt="filter" />
                <p>Filter</p>
              </button>
            </div>
          </div>
          <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EventCard
                title="Event Name"
                location="Event Location"
                time="Event Time"
                month="OCT"
                day="08"
                cost={0}
                img={eventImage}
                isLive={true}
              />
              <EventCard
                title="Event Name"
                location="Event Location"
                time="Event Time"
                month="OCT"
                day="08"
                cost={0}
                img={eventImage}
                isLive={false}
              />
              <EventCard
                title="Event Name"
                location="Event Location"
                time="Event Time"
                month="OCT"
                day="08"
                cost={0}
                img={eventImage}
                isLive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default Filter;
