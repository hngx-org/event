import WebLayout from "@/components/layout/webLayout";
import BG from "@/public/assets/images/dashboardBg.png";
import EventCard from "@/components/eventCard";
import Event from "@/public/images/event-image.png";
import Event2 from "@/public/images/event-image-2.png";
import Event3 from "@/public/images/event-image-3.png";
import EventHeader from "@/components/eventHeader";
import Footer from "@/components/web/footer";

export default function Dashboard() {
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
          <button className="w-full sm:w-max bg-[#800000] text-white hover:bg-[#800000]/50 sm:mr-3 px-6 py-2.5 rounded-md">
            Create An Event
          </button>
          <button className="w-full sm:w-max border border-[#800000] mt-5 sm:mt-0 sm:ml-3 text-[#800000] hover:bg-[#800000]/25 hover:text-white px-6 py-2.5 rounded-md">
            Explore Other Events
          </button>
        </div>
      </div>
      <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
        <h4 className="text-2xl font-bold">Upcoming Events Near You</h4>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* How to use the Event Card
            <EventCard
              img={Event}
              title="HNGX Finalist Event"
              location="Uyo"
              time="9:00 AM"
              month="OCT"
              day="27"
              cost={0}
            /> */}
          <EventCard img={Event} isLive={true} />
          <EventCard img={Event2} isLive={true} />
          <EventCard img={Event3} isLive={false} />
          <EventCard img={Event} isLive={true} />
          <EventCard img={Event} isLive={true} />
          <EventCard img={Event} isLive={false} />
        </div>
      </div>
      <Footer />
    </>
  );
}
