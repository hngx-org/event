import EventHeader from "@/components/eventHeader";
import EventManagement from "@/components/events/EventManagement";
import Footer from "@/components/web/footer";
import similarevent from "../../../public/assets/images/similarevent.png";
import chevoronRight from "../../../public/assets/images/chevron_right.png";
import EventCard from "@/components/eventCardTimeline";

import React, { useState } from "react";
import Image from "next/image";

const RegisteredEven = () => {
  const [toggleRegisterEvent, setToggleRegisterEvent] = useState(true);

  const currntDate = () => {
    Date()
  }
  return (
    <>
      <div className="max-w-7xl mx-auto">
       <EventHeader />
      </div>
      {toggleRegisterEvent ? (
        <div>
          <EventManagement>
            <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
              <h1 className="font-bold">Event Management</h1>
              <p className="text-grey-100 text-sm">
                Effortlessly monitor your created and registered events all in
                one place
              </p>
              <div className="flex gap-5 flex-wrap my-10 sm:justify-between">
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
              <div className="flex justify-between">
                <div className="flex gap-3 my-8">
                  <button className="text-[#800000] font-bold underline" onClick={() => setToggleRegisterEvent(true)}>
                    Created Event
                  </button>
                  <button className="text-[#3B3B3B] text-sm" onClick={() => setToggleRegisterEvent(prev => !prev)}>
                    Registered Event
                  </button>
                </div>
                <button className="text-[#800000] text-sm flex justify-center items-center">
                  View All <Image src={chevoronRight} alt="view_more" />
                </button>
              </div>
              <div className="flex justify-between flex-wrap">
                <EventCard img={similarevent} title="Event Name" location="Event Location" dateString="Event time" cost={10000}                />
              </div>
            </div>
          </EventManagement>
        </div>
      ) : (
        <div>
          <EventManagement>
            <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
              <h1 className="font-bold">Event Management</h1>
              <p className="text-grey-100 text-sm">
                Effortlessly monitor your created and registered events all in
                one place
              </p>
              <div className="flex gap-5 flex-wrap my-10 sm:justify-between">
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
              <div className="flex justify-between">
                <div className="flex gap-3 my-8">
                  <button className="text-[#3B3B3B] text-sm" onClick={() => setToggleRegisterEvent(true)}>
                    Created Event
                  </button>
                  <button className="text-[#800000] font-bold underline" onClick={() => setToggleRegisterEvent(prev => !prev)}>
                    Registered Event
                  </button>
                </div>
                <button className="text-[#800000] text-sm flex justify-center items-center">
                  View All <Image src={chevoronRight} alt="view_more" />
                </button>
              </div>
              <div className="flex justify-between flex-wrap">
                {/* <EventCard
                  title="Event Name"
                  location="Event Location"
                  time="Event Time"
                  month="OCT"
                  day="08"
                  cost={0}
                  img={similarevent}
                  isLive={true}
                /> */}
                {/* <EventCard
                title={"Event Name"}
                location="Event Location"
                  month="OCT"
                  day="08"
                  cost={0}
                  img={similarevent}
                  isLive={true}
              /> */}
                
              </div>
            </div>
          </EventManagement>
        </div>
      )}
      <Footer />
    </>
  );
};

export default RegisteredEven;
