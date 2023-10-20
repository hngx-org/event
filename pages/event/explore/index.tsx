import EventCardLoading from "@/components/eventCardLoading";
import EventCard from "@/components/eventCardTimeline";
import EventsPageTitle from "@/components/eventsPageTitle";
import EventLayout from "@/components/layout/eventLayout";
import SearchFilterModal from "@/components/modals/searchFilterModal";
import Event from "@/public/images/event-image.png";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface filterParam {
	location?: string;
	date?: string;
	category?: string;
	fee?: string;
}

const Events = () => {
	const router = useRouter();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		try {
			axios
				.get("https://wetindeysup-api.onrender.com/api/events/upcoming")
				.then((res) => setEvents(res.data.data));
		} catch (error: any) {
			toast.error(error.message);
		}
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

				<div className="px-[20px] md:px-[40px] mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{events.length > 0 ? (
						events.map((event: any) => (
							<EventCard
								key={event.id}
								title={event.name || "Event Name"}
								location={event.location || "Not Specified"}
								img={event.image || Event}
								cost={event.ticketPrice || 0}
								dateString={event.startTime}
							/>
						))
					) : (
						<>
							<EventCardLoading />
							<EventCardLoading />
							<EventCardLoading />
						</>
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
