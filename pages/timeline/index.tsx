import WebLayout from "@/components/layout/webLayout";
import BG from "@/public/assets/images/dashboardBg.png";
import EventCard from "@/components/eventCard";
import EventCardLoading from "@/components/eventCardLoading";
import Event from "@/public/images/event-image.png";
import Event2 from "@/public/images/event-image-2.png";
import Event3 from "@/public/images/event-image-3.png";
import EventLayout from "@/components/layout/eventLayout";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { EventCardProps } from "@/@types";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://wetindeysup-api.onrender.com/api/events/upcoming?limit=6")
        .then((res) => setEvents(res.data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(events);
  return (
    <>
      <EventLayout>
        <div
          style={{
            backgroundImage: `url(${BG.src})`,
            height: "420px",
          }}
          className="bg-cover w-full px-8 sm:px-12 md:px-16 lg:px-20"
        >
          <div className="pt-[275px] sm:pt-[325px] font-bold">
            <button className="w-full sm:w-max bg-[#800000] text-white hover:bg-[#800000]/50 sm:mr-3 px-6 py-2.5 rounded-md">
              Create An Event
            </button>
            <Link
              href="/events"
              className="w-full sm:w-max border border-[#800000] mt-5 sm:mt-0 sm:ml-3 text-[#800000] hover:bg-[#800000]/25 hover:text-white px-6 py-2.5 rounded-md"
            >
              Explore Other Events
            </Link>
          </div>
        </div>
        <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
          <h4 className="text-2xl font-bold">Upcoming Events Near You</h4>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event: any) => (
              <EventCard
                key={event.id}
                title={event.name || "Event Name"}
                location={event.location || "Not Specified"}
                img={event.image || Event}
                cost={event.ticketPrice || 0}
                isLive={true}
                day="08"
                month="OCT"
                time="9:00 AM"
              />
            ))}
            <EventCard
              title="Event Name"
              location="Event Location"
              time="Event Time"
              month="OCT"
              day="08"
              cost={0}
              img={Event}
              isLive={true}
            />
            <EventCard
              title="Event Name"
              location="Event Location"
              time="Event Time"
              month="OCT"
              day="08"
              cost={0}
              img={Event2}
              isLive={false}
            />
            <EventCardLoading />
            <EventCardLoading />
            <EventCardLoading />
          </div>
        </div>
      </EventLayout>
    </>
  );
}
