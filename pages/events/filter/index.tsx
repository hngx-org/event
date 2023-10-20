"use client";
import EventCardLoading from "@/components/eventCardLoading";
import EventCard from "@/components/eventCardTimeline";
import EventsPageTitle from "@/components/eventsPageTitle";
import EventLayout from "@/components/layout/eventLayout";
import SearchFilterModal from "@/components/modals/searchFilterModal";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import filterIcon from "@/public/assets/images/filter.svg";
import multiply from "@/public/assets/images/multiply.svg";
import Event from "@/public/images/event-image.png";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface filterParam {
	location?: string;
	date?: string;
	category?: string;
	fee?: string;
}

const Filter = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get("search");
	const router = useRouter();
	const [params, setParams] = useState<filterParam>();
	const location = searchParams.get("location");
	const category = searchParams.get("category");
	const date = searchParams.get("date");
	const fee = searchParams.get("fee");
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
			<div className="w-full grid gap-4">
				<EventsPageTitle
					setIsFilterOpen={setIsFilterOpen}
					isFilterOpen={isFilterOpen}
				>
					<h3 className="font-montserrat text-sm md:text-[24px] text-gray-600">
						Search results for{" "}
						<span className="font-bold text-ellipsis">
							“{search}”
						</span>
					</h3>
				</EventsPageTitle>
				<div className="w-full flex gap-4 flex-wrap">
					<button className="text-base text-black border border-black py-2 px-4  flex gap-3 items-center rounded-lg">
						<p>Location</p>
						<Image src={multiply} alt="close" />
					</button>
					<button className="text-base text-black border border-black py-2 px-4  flex gap-3 items-center rounded-lg">
						<p>Date</p>
						<Image src={multiply} alt="close" />
					</button>
					<button className="text-base text-black border border-black py-2 px-4  flex gap-3 items-center rounded-lg">
						<p>Category</p>
						<Image src={multiply} alt="close" />
					</button>
					<button className="text-base text-black border border-black py-2 px-4  flex gap-[1px] items-center rounded-lg">
						<p>Paid/Free</p>
						<Image src={multiply} alt="close" />
					</button>
				</div>
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

export default Filter;
