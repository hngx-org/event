import EventCard from "@/components/eventCardTimeline";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/web/footer";
import EventHeader from "@/components/eventHeader";
import EventCardLoading from "@/components/eventCardLoading";
import { useRouter, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import EventsPageTitle from "@/components/eventsPageTitle";
import SearchFilterModal from "@/components/modals/searchFilterModal";

export default function SearchResults() {
	const search = useSearchParams();
	const searchQuery = search ? search.get("q") : null;
	const router = useRouter();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
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

			<EventsPageTitle
				setIsFilterOpen={setIsFilterOpen}
				isFilterOpen={isFilterOpen}
			>
				<h3 className="font-montserrat text-lg md:text-[24px] text-[#2E2E2E] font-medium">
					Search results for{" "}
					<span className="font-bold">{searchQuery}</span>
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
			<Footer />
		</div>
	);
}
