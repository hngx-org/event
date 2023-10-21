import { useState, useEffect } from "react";
import BG from "@/public/assets/images/dashboardBg.png";
import EventCard from "@/components/eventCardTimeline";
import EventCardLoading from "@/components/eventCardLoading";
import Event from "@/public/images/event-image.png";
import EventHeader from "@/components/eventHeader";
import Modal from './Modal';
import { useRouter } from "next/router";
import Footer from "@/components/web/footer";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import Link from "next/link";


export default function Timeline() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const router =  useRouter()
  useEffect(() => {
   const fetchData = async () => {
      try {
        const response = await axios.get("https://wetindeysup-api.onrender.com/api/events/upcoming");
        if (response.data.length === 0) {
          setEvents(null);
        } else {
          setEvents(response.data.data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <EventHeader />
      </div>
      <div
        style={{
          backgroundImage: `url(${BG.src})`,
          height: "420px",
        }}
        className="bg-cover w-full px-8 sm:px-12 md:px-16 lg:px-20"
      >
        <div className="pt-[275px] sm:pt-[325px] font-bold">
          <button onClick={handleOpenModal} className="w-full sm:w-max bg-[#800000] text-white hover:bg-[#800000]/50 sm:mr-3 px-6 py-2.5 rounded-md">
            Create An Event
          </button>
          <Link
            href="/event/explore"
            className="w-full sm:w-max border border-[#800000] mt-5 sm:mt-0 sm:ml-3 text-[#800000] hover:bg-[#800000]/25 hover:text-white px-6 py-2.5 rounded-md"
          >
            Explore
          </Link>
        </div>
      </div>
      <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
        <h4 className="text-2xl font-bold">Upcoming Events Near You</h4>
            {events !== null && <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event: any) => (
              <Link href={`/event/${event.id}`} key={event.id}>
                <EventCard
                  title={event.name || "Event Name"}
                  location={event.location || "Not Specified"}
                  img={event.image || Event}
                  cost={event.ticketPrice || 0}
                  dateString={event.startTime}
                />
              </Link>
            ))
          ) : (
            <>
              <EventCardLoading />
              <EventCardLoading />
              <EventCardLoading />
            </>
          )}
        </div>}
        {events === null && <div className="w-full h-40 flex items-center justify-center text-4xl"> 
            No Upcoming Events
         </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </>
  );
}
