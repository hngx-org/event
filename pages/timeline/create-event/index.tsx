/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import EventHeader from "@/components/eventHeader";
import Footer from "@/components/web/footer";
import Image from "next/image";
import React, { useState } from "react";
import calender from '../../../public/assets/images/calender.png'
import EventManagement from "@/components/events/EventManagement";

const index = () => {
  const [toggleCreatEvent, setToggleCreatEvent] = useState(true)

  const handleRegisteredEvent = () => {
    window.location.href = '/timeline/registered-event'
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <EventHeader />
      </div>
      {toggleCreatEvent ? (
        <div>
        <EventManagement>
          <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
            <h1 className="font-bold">Event Management</h1>
            <p className="text-grey-100 text-sm">
              Effortlessly monitor your created and registered events all in one
              place
            </p>
            <div className="flex gap-5 flex-wrap my-4 sm:justify-between">
              <div className="w-64 bg-[#F2E6E6] border border-solid border-1 border-[#CB9696] rounded flex flex-col justify-center items-center py-4 cursor-pointer">
                <p className="color text-lg text-[#800000] font-bold">0</p>
                <p>Created Events</p>
              </div>
              <div className="w-64 bg-[#F2E6E6] border border-solid border-1 border-[#CB9696] rounded flex flex-col justify-center items-center py-4 cursor-pointer">
                <p className="text-lg text-[#800000] font-bold">0</p>
                <p>Registered Events</p>
              </div>
              <div className="w-64 border border-solid border-1rounded flex flex-col justify-center items-center py-4 bg-[#800000] text-white rounded cursor-default">
                <p className="text-lg font-bold">+</p>
                <p>Create An Events</p>
              </div>
            </div>
            <div className="flex gap-3 my-8">
              <button className="text-[#800000] font-bold underline" onClick={() => setToggleCreatEvent(true)}>Created Event</button>
              <button className="text-[#3B3B3B] text-sm" onClick={() => setToggleCreatEvent(prev => !prev)}>Registered Event</button>
            </div>
            <div className="w-90 sm:w-1/4 mx-auto my-10 text-left sm:text-center py-3 sm:py-1">
                <Image src={calender} width={50} className="mx-auto" alt="event-icon" />
                <p className="text-[#2E2E2E] text-sm">Get started by creating you first event! 'Click the Create' An Event button to create your next great experience</p>
            </div>
          </div>
        </EventManagement>
      </div>
      ) : (<div>
                <div>
        <EventManagement>
          <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
            <h1 className="font-bold">Event Management</h1>
            <p className="text-grey-100 text-sm">
              Effortlessly monitor your created and registered events all in one
              place
            </p>
            <div className="flex gap-5 flex-wrap my-4 sm:justify-between">
              <div className="w-64 bg-[#F2E6E6] border border-solid border-1 border-[#CB9696] rounded flex flex-col justify-center items-center py-4 cursor-pointer">
                <p className="color text-lg text-[#800000] font-bold">0</p>
                <p>Created Events</p>
              </div>
              <div className="w-64 bg-[#F2E6E6] border border-solid border-1 border-[#CB9696] rounded flex flex-col justify-center items-center py-4 cursor-pointer"  onClick={handleRegisteredEvent}>
                <p className="text-lg text-[#800000] font-bold">0</p>
                <p>Registered Events</p>
              </div>
              <div className="w-64 border border-solid border-1rounded flex flex-col justify-center items-center py-4 bg-[#800000] text-white rounded cursor-pointer">
                <p className="text-lg font-bold">+</p>
                <p>Create An Events</p>
              </div>
            </div>
            <div className="flex gap-3 my-8">
              <button className="text-[#3B3B3B] text-sm">Created Event</button>
              <button className="text-[#800000] font-bold underline">Registered Event</button>
            </div>
            <div className="w-90 sm:w-1/4 mx-auto my-10 text-left sm:text-center py-3 sm:py-1">
                <Image src={calender} width={50} className="mx-auto" alt="event-icon" />
                <p className="text-[#2E2E2E] text-sm">It looks like you haven't registered for any events yet. <span className="text-[#800000] font-bold underline">Explore</span> and register for exciting events to get started!</p>
            </div>
          </div>
        </EventManagement>
      </div>
      </div>)}
      <Footer />
    </>
  );
};

export default index;
