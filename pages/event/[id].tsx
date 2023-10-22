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

export default function EventDetailsPage({
  description,
  endDate,
  endTime,
  eventLink,
  eventType,
  image,
  isPaidEvent,
  location,
  name,
  numberOfAvailableTickets,
  organizerId,
  registrationClosingDate,
  startDate,
  startTime,
  tags,
  ticketPrice,
}: EventDetails) {
  const router = useRouter();
  const {id} = router.query;

  const [eventDetails, setEventDetails] = useState<EventDetails>({
    description: "",
    endDate: "",
    endTime: "",
    eventLink: "",
    eventType: "",
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
          console.log("Event details successfully fetched:", data);
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
          setSimilarEvents(data);
          console.log("Similar events successfully fetched:", data);
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
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 max-w-[733px]">
              <h1 className="text-grey-500 text-2xl font-bold">
                Event Description
              </h1>
              <p className="text-[#666] text-justify font-medium text-lg">
                {eventDetails.description}
              </p>
            </div>
            <div className="inline-flex md:hidden p-6 items-start gap-6 rounded-2xl bg-[#FAFAFA] max-w-[437px] max-h-[252px]">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-secondary-300 font-bold text-xl">
                      08-10 October, 2023
                    </h1>
                    <h1 className="text-grey-700 font-bold text-xl">
                      &#8358;{eventDetails.ticketPrice.toLocaleString()}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-start">
                    <LocationIcon />
                    <h4 className="text-grey-700 text-base font-semibold">
                      Ultimate Garden, By Mobil Junction Lokogoma Expressway
                      Gaduwa Abuja, Federal Capital Territory 900109
                    </h4>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ClockIcon />
                    <h4 className="text-grey-700 text-base font-semibold">
                      9AM Daily
                    </h4>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CalendarIcon />
                    <h4 className="text-grey-700 text-base font-semibold">
                      In 2 weeks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-grey-500 text-2xl font-bold">Event Tags</h1>
              <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-[653px]">
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  Technology
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  AI
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  Workshops
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  Networking
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  Innovation
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  About me
                </span>
                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">
                  About me
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-flex p-6 items-start gap-6 rounded-2xl bg-[#FAFAFA] max-w-[437px] max-h-[252px]">
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-secondary-300 font-bold text-xl">
                    08-10 October, 2023
                  </h1>
                  <h1 className="text-grey-700 font-bold text-xl">
                    &#8358;20,000
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <LocationIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    Ultimate Garden, By Mobil Junction Lokogoma Expressway
                    Gaduwa Abuja, Federal Capital Territory 900109
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <ClockIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    9AM Daily
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <CalendarIcon />
                  <h4 className="text-grey-700 text-base font-semibold">
                    In 2 weeks
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-[72px] mb-28">
          <h1 className="text-grey-500 text-2xl font-bold">Similar Event</h1>
          <div className="grid md:grid-cols-3 gap-5 grid-flow-col overflow-x-scroll snap-x scroll-p-4">
            <div className="w-[250px] md:w-[250px] md:w-full rounded-lg border border-gray-300 relative">
              <button className="w-[40px] h-[40px] flex items-center justify-center p-1 absolute top-4 right-4 bg-white rounded-[50%] ">
                <OptionIcon />
              </button>
              <div className="w-full h-[235px] ">
                <img
                  src="/assets/images/similarevent.png"
                  alt="event"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="grid md:grid-cols-[1fr_0.4fr] gap-1 p-1 md:md:p-[24px]">
                <div className="grid gap-[10px]">
                  <h3 className="md:text-2xl font-bold">Event Name</h3>
                  <div className="flex gap-2 items-center">
                    <LocationIcon />
                    <p className="">Event Location</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ClockIcon />
                    <p>Event Time</p>
                  </div>
                </div>
                <div>
                  <div className="w-full bg-secondary-50 flex items-center justify-center flex-col md:p-[10px] rounded-md ">
                    <p className="text-secondary-200 font-bold">OCT</p>
                    <h3 className="text-2xl font-extrabold">08</h3>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between px-[24px] py-3">
                <div className="flex gap-2 items-center">
                  <ElipseIcon />
                  <p className="text-[#30980C]">Free</p>
                </div>
                <p className="font-bold px-2">Live</p>
              </div>
            </div>
            <div className="w-[250px] md:w-full rounded-lg border border-gray-300 relative">
              <button className="w-[40px] h-[40px] p-3 flex items-center justify-center absolute top-4 right-4 bg-white rounded-[50%] ">
                <OptionIcon />
              </button>
              <div className="w-full h-[235px] ">
                <img
                  src="/assets/images/similarevent.png"
                  alt="event"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="grid md:grid-cols-[1fr_0.4fr] gap-1 p-1 md:p-[24px]">
                <div className="grid gap-[10px]">
                  <h3 className="md:text-2xl font-bold">Event Name</h3>
                  <div className="flex gap-2 items-center">
                    <LocationIcon />
                    <p className="">Event Location</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ClockIcon />
                    <p>Event Time</p>
                  </div>
                </div>
                <div>
                  <div className="w-full bg-secondary-50 flex items-center justify-center flex-col md:p-[10px] rounded-md ">
                    <p className="text-secondary-200 font-bold">OCT</p>
                    <h3 className="text-2xl font-extrabold">08</h3>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between px-[24px] py-3">
                <div className="flex gap-2 items-center">
                  <ElipseIcon />
                  <p className="text-[#30980C]">Free</p>
                </div>
                <p className="font-bold px-2">Live</p>
              </div>
            </div>
            <div className="w-[250px] md:w-full rounded-lg border border-gray-300 relative">
              <button className="w-[40px] h-[40px] flex items-center justify-center p-3 absolute top-4 right-4 bg-white rounded-[50%] ">
                <OptionIcon />
              </button>
              <div className="w-full h-[235px] ">
                <img
                  src="/assets/images/similarevent.png"
                  alt="event"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="grid md:grid-cols-[1fr_0.4fr] gap-1 p-1 md:p-[24px]">
                <div className="grid gap-[10px]">
                  <h3 className="md:text-2xl font-bold">Event Name</h3>
                  <div className="flex gap-2 items-center">
                    <LocationIcon />
                    <p className="">Event Location</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <ClockIcon />
                    <p>Event Time</p>
                  </div>
                </div>
                <div>
                  <div className="w-full bg-secondary-50 flex items-center justify-center flex-col md:p-[10px] rounded-md ">
                    <p className="text-secondary-200 font-bold">OCT</p>
                    <h3 className="text-2xl font-extrabold">08</h3>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between px-[24px] py-3">
                <div className="flex gap-2 items-center">
                  <ElipseIcon />
                  <p className="text-[#30980C]">Free</p>
                </div>
                <p className="font-bold px-2">Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}
