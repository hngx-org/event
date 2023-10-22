import {useState, useEffect} from "react";
import BG from "@/public/assets/images/dashboardBg.png";
import EventCard from "@/components/eventCardTimeline";
import EventCardLoading from "@/components/eventCardLoading";
import Event from "@/public/images/event-image.png";
import EventHeader from "@/components/eventHeader";
import Modal from "./Modal";
import {useRouter} from "next/router";
import Footer from "@/components/web/footer";
import axios, {AxiosError} from "axios";
import {toast} from "react-toastify";
import Link from "next/link";
import Authentication from "../../provider/authentication";
import AuthProvider from "@/provider/authProvider";
import http from "@/http/interceptor";

export default function Timeline() {
  const [events, setEvents] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const router = useRouter();
  useEffect(() => {
    try {
      axios
        .get("https://wetindeysup-api.onrender.com/api/events")
        .then((res) => setEvents(res.data.data));
      setIsLoading(false);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <EventHeader />
      </div>
      <div
        style={{
          backgroundImage: `url(${BG.src})`,
          height: "420px",
        }}
        className='bg-cover w-full px-8 sm:px-12 md:px-16 lg:px-20'
      >
        <div className='pt-[275px] sm:pt-[325px] font-bold'>
          <button
            onClick={handleOpenModal}
            className='w-full sm:w-max bg-[#800000] text-white hover:bg-[#800000]/50 sm:mr-3 px-6 py-2.5 rounded-md'
          >
            Create An Events{" "}
          </button>
          <Link
            href='/event/explore'
            className='w-full sm:w-max border border-[#800000] mt-5 sm:mt-0 sm:ml-3 text-[#800000] hover:bg-[#800000]/25 hover:text-white px-6 py-2.5 rounded-md'
          >
            Explore Other Events
          </Link>
        </div>
      </div>
      <div className='mt-7 px-8 sm:px-12 md:px-16 lg:px-20 w-full'>
        <h4 className='text-2xl font-bold'>Upcoming Events Near You</h4>

        <div className='mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {loading ? (
            <>
              <EventCardLoading />
              <EventCardLoading />
              <EventCardLoading />
            </>
          ) : events.length > 0 ? (
            events.map((event: any) => (
              <div className='px-5 md:px-10 mt-7 gap-6' key={event.id}>
                <EventCard
                  title={event.name || "Event Name"}
                  location={event.location || "Not Specified"}
                  img={event.image || Event}
                  cost={event.ticketPrice || 0}
                  dateString={event.startTime}
                />
              </div>
            ))
          ) : (
            <div className='py-12 w-screen text-center flex flex-col items-center justify-center'>
              <h2 className='font-montserrat text-6xl text-center text-[#2E2E2E] font-bold mb-2'>
                Oops!!!
              </h2>
              <p className='font-montserrat text-base md:text-xl text-center text-[#2E2E2E] font-medium'>
                No event with the name
              </p>
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </AuthProvider>
  );
}
