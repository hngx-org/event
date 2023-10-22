import {useState, useEffect} from "react";
import BG from "@/public/assets/images/dashboardBg.png";
import EventCardLoading from "@/components/eventCardLoading";
import EventHeader from "@/components/eventHeader";
import Modal from "./Modal";
import {useRouter} from "next/router";
import Footer from "@/components/web/footer";
import {toast} from "react-toastify";
import Link from "next/link";
import AuthProvider from "@/provider/authProvider";
import http from "@/http/interceptor";
import EventCard from "@/components/eventCard";
import {EventDetails} from "@/@types";

export default function Timeline() {
  const router = useRouter();
  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const fetchData = async () => {
    try {
      const response = await http.get("/events");
      setEvents(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthProvider>
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
          <button
            onClick={handleOpenModal}
            className="w-full sm:w-max bg-secondary-300 text-white hover:bg-secondary-400 sm:mr-3 px-6 py-2.5 rounded-md"
          >
            Create An Events
          </button>
          <Link
            href="/event/explore"
            className="w-full sm:w-max border border-secondary-300 mt-5 sm:mt-0 sm:ml-3 text-secondary-300 hover:bg-secondary-300 hover:text-white px-6 py-2.5 rounded-md"
          >
            Explore Other Events
          </Link>
        </div>
      </div>
      <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20 w-full">
        <h4 className="text-2xl font-bold">Upcoming Events Near You</h4>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {loading ? (
            <>
              <EventCardLoading />
              <EventCardLoading />
              <EventCardLoading />
            </>
          ) : events.length > 0 ? (
            events.map((event) => (
              <Link href={`/event/${event.id}`} key={event.id}>
                <EventCard events={event} />
              </Link>
            ))
          ) : (
            <div className="py-12 w-screen text-center flex flex-col items-center justify-center">
              <h2 className="font-montserrat text-6xl text-center text-[#2E2E2E] font-bold mb-2">
                Oops!!!
              </h2>
              <p className="font-montserrat text-base md:text-xl text-center text-[#2E2E2E] font-medium">
                No event at the moment.
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
