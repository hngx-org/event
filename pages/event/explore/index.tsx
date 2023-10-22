import {EventDetails} from "@/@types";
import EventCard from "@/components/eventCard";
import EventCardLoading from "@/components/eventCardLoading";
import EventsPageTitle from "@/components/eventsPageTitle";
import EventLayout from "@/components/layout/eventLayout";
import SearchFilterModal from "@/components/modals/searchFilterModal";
import http from "@/http/interceptor";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

interface filterParam {
  location?: string;
  date?: string;
  category?: string;
  fee?: string;
}

const Events = () => {
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventDetails[]>([]);

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
    <EventLayout>
      <div className="w-full grid gap-4 mb-20">
        <EventsPageTitle
          setIsFilterOpen={setIsFilterOpen}
          isFilterOpen={isFilterOpen}
        >
          <h3 className="font-montserrat text-lg md:text-[24px] text-[#2E2E2E] font-bold">
            Explore other Events
          </h3>
        </EventsPageTitle>

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

        {isFilterOpen && (
          <SearchFilterModal setIsFilterOpen={setIsFilterOpen} />
        )}
      </div>
    </EventLayout>
  );
};

export default Events;
