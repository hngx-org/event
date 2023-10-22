import Footer from "@/components/web/footer";
import {useRouter} from "next/router";
import Link from "next/link";
import {useState, useEffect} from "react";
import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  ArrowBackIcon,
  ElipseIcon,
  OptionIcon,
} from "@/components/icons/EventDetails/SocialIcons";
import {EventDetails} from "@/@types";
import Image from "next/image";
import AuthProvider from "@/provider/authProvider";
import EventHeader from "@/components/eventHeader";
import Herobg from "assets/images/herobg.png";
import SimilarImg from "assets/images/similarevent.png";
import moment from "moment";
import EventCard from "@/components/eventCard";

export default function EventDetailsPage() {
  const router = useRouter();
  const {id} = router.query;

  const [eventDetails, setEventDetails] = useState<EventDetails>({
    description: "",
    endDate: "",
    endTime: "",
    eventLink: "",
    eventType: "",
    id: "",
    image: "",
    isPaidEvent: false,
    location: "",
    name: "",
    numberOfAvailableTickets: 0,
    organizerId: "",
    registrationClosingDate: "",
    startDate: "",
    startTime: "",
    tags: [],
    ticketPrice: 0,
  });
  const [similarEvents, setSimilarEvents] = useState<EventDetails[]>([]);
  const currentDate = new Date();
  useEffect(() => {
    if (id) {
      // Fetch event details
      fetch(`https://wetindeysup-api.onrender.com/api/events/${id}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Event not found");
          }
        })
        .then((data) => {
          setEventDetails(data.data);
        })
        .catch((error) => {
          console.error("Error fetching event details:", error);
        });

      // Fetch similar events
      fetch("https://wetindeysup-api.onrender.com/api/events")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("No events found");
          }
        })
        .then((data) => {
          setSimilarEvents(data.data.slice(0, 3));
        })
        .catch((error) => {
          console.error("Error fetching similar events:", error);
        });
    }
  }, [id]);

  const eventId = Array.isArray(id) ? id[0] : id;
  return (
    <AuthProvider>
      <EventHeader />
      <div className="max-w-7xl md:mx-auto flex flex-col md:flex-row justify-between mb-6 p-4 xl:p-0">
        <div className="flex gap-4 items-center" onClick={() => router.back()}>
          <button>
            <ArrowBackIcon />
          </button>
          <h3 className="text-grey-500 text-2xl font-bold">
            {eventDetails.name}
          </h3>
        </div>
        <Link
          href={
            eventDetails.isPaidEvent
              ? `/event/register/paid/${id}`
              : `/event/register/free/${id}`
          }
          className="w-[200px] ml-4 md:w-auto bg-secondary-300 text-white text-base font-bold flex justify-center items-center px-2 py-4 md:py-[18px] md:px-8 rounded-lg mt-10"
        >
          Register for this event
        </Link>
      </div>

      <div className="w-full">
        {eventDetails.image ? (
          <Image
            src={eventDetails.image}
            width={2000}
            height={500}
            alt="hero"
            className="w-full"
          />
        ) : (
          <Image
            src={Herobg}
            width={2000}
            height={500}
            alt="hero"
            className="w-full"
          />
        )}
      </div>
      <div className="max-w-7xl mx-auto mt-8 p-4 lg::p-0">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-[733px]">
            <h1 className="text-grey-500 text-2xl font-bold">
              Event Description
            </h1>
            <p className="text-[#666] text-justify font-medium text-lg">
              {eventDetails.description}
            </p>

            <div className="flex flex-col gap-6">
              <h1 className="text-grey-500 text-2xl font-bold">Event Tags</h1>
              <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-[653px]">
                {eventDetails.tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="inline-flex p-6 items-start gap-6 rounded-2xl bg-[#FAFAFA] max-w-[437px] w-[437px] max-h-[252px]">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-secondary-300 font-bold text-xl">
                  {`${moment(eventDetails.startDate).format("DD")}-${moment(
                    eventDetails.endDate
                  ).format("DD MMMM, YYYY")}`}
                </h1>
                <h1 className="text-grey-700 font-bold text-xl">
                  &#8358;{eventDetails.ticketPrice.toLocaleString()}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <LocationIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    {eventDetails.location}
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <ClockIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    {`${moment(eventDetails.startTime).format(
                      "hh:mma"
                    )}-${moment(eventDetails.endTime).format("hh:mma")}`}
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <CalendarIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    {moment(eventDetails.startDate).fromNow()}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-[72px] mb-28">
          <h1 className="text-grey-500 text-2xl font-bold">Similar Event</h1>
          <div className="grid md:grid-cols-3 gap-5 grid-flow-col overflow-x-scroll snap-x scroll-p-4">
            {similarEvents.map((events) => {
              return (
                <Link href={`/event/${events.id}`} key={events.id}>
                  <EventCard events={events} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}
