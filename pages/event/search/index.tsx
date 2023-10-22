import Link from "next/link";
import Footer from "@/components/web/footer";
import EventHeader from "@/components/eventHeader";
import EventCardLoading from "@/components/eventCardLoading";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import EventsPageTitle from "@/components/eventsPageTitle";
import SearchFilterModal from "@/components/modals/searchFilterModal";
import AuthProvider from "@/provider/authProvider";
import http from "@/http/interceptor";
import EventCard from "@/components/eventCard";
import {EventDetails} from "@/@types";

export default function SearchResults() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventDetails[]>([]);

  const fetchData = async () => {
    try {
      const response = await http.get(`/events/search?keyword=${searchQuery}`);
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
      <div className="max-w-7xl w-full h-full mx-auto">
        <EventHeader />

        <EventsPageTitle
          setIsFilterOpen={setIsFilterOpen}
          isFilterOpen={isFilterOpen}
        >
          <h3 className="font-montserrat text-lg md:text-[24px] text-[#2E2E2E] font-medium">
            Search results for <span className="font-bold">{searchQuery}</span>
          </h3>
        </EventsPageTitle>

        <div className="w-full">
          {loading ? (
            <>
              <EventCardLoading />
              <EventCardLoading />
              <EventCardLoading />
            </>
          ) : events.length > 0 ? (
            <div className="px-[20px] md:px-[40px] mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link href={`/event/${event.id}`} key={event.id}>
                  <EventCard events={event} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12">
              <h2 className="font-montserrat text-6xl text-center py-12 text-[#2E2E2E] font-bold">
                Oops!!!
              </h2>
              <p className="font-montserrat text-base md:text-xl text-center text-[#2E2E2E] font-medium">
                No event with the name
                <span className="font-bold ml-1">{searchQuery}</span>
              </p>
            </div>
          )}
        </div>
        {isFilterOpen && (
          <SearchFilterModal setIsFilterOpen={setIsFilterOpen} />
        )}
        <Footer />
      </div>
    </AuthProvider>
  );
}
