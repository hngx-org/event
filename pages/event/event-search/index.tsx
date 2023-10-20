import EventCard from "@/components/eventCardTimeline";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/web/footer";
import EventHeader from "@/components/eventHeader";
import { useRouter, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();
  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          `https://wetindeysup-api.onrender.com/api/events/search?keyword=${searchQuery}`
        )
        .then((res) => setEvents(res.data.data));
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="max-w-7xl w-full h-full mx-auto my-10 ">
      <EventHeader />
      <div className="w-full mt-6 flex justify-between">
        <Link href={"#"} onClick={goBack} className="flex gap-2 items-center">
          <Image
            src="/images/backarrow.svg"
            alt="back arrow icon"
            width={24}
            height={24}
          />
          <p className="text-2xl font-medium">
            Search results for <span className="font-bold">{searchQuery}</span>
          </p>
        </Link>
        <Link
          href="./filter"
          className="bg-[#800000] rounded-lg px-8 py-4 flex gap-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 3C16.8638 3 18.4299 4.27477 18.874 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H18.874C18.4299 9.72523 16.8638 11 15 11C13.1362 11 11.5701 9.72523 11.126 8L3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6L11.126 6C11.5701 4.27477 13.1362 3 15 3ZM15 5C16.1046 5 17 5.89543 17 7C17 8.10457 16.1046 9 15 9C13.8954 9 13 8.10457 13 7C13 5.89543 13.8954 5 15 5Z"
              fill="#F2E6E6"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.12602 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H5.12602C5.57006 19.7252 7.13616 21 9 21C10.8638 21 12.4299 19.7252 12.874 18L21 18C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16L12.874 16C12.4299 14.2748 10.8638 13 9 13C7.13616 13 5.57006 14.2748 5.12602 16ZM9 19C10.1046 19 11 18.1046 11 17C11 15.8954 10.1046 15 9 15C7.89543 15 7 15.8954 7 17C7 18.1046 7.89543 19 9 19Z"
              fill="#F2E6E6"
            />
          </svg>
          <p className="font-bold text-white">Filter</p>
        </Link>
      </div>
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any) => (
          <EventCard
            key={event.id}
            title={event.name || "Event Name"}
            location={event.location || "Not Specified"}
            img={event.image || Event}
            cost={event.ticketPrice || 0}
            dateString={event.startTime}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
