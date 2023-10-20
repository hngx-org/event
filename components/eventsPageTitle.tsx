import { EventsPageTitleProps } from "@/@types";
import Image from "next/image";
import { useRouter } from "next/router";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import filterIcon from "@/public/assets/images/filter.svg";

const EventsPageTitle = ({
	children,
	setIsFilterOpen,
	isFilterOpen,
}: EventsPageTitleProps) => {
	const router = useRouter();
	return (
		<div className="px-[20px] md:px-[40px] grid gap-4">
			<div className="w-full mt-4 flex md:justify-between md:items-center flex-col md:flex-row gap-[15px]">
				<div className="gap-[16px] flex items-center">
					<button onClick={() => router.push(".")}>
						<Image
							src={arrow_back_ios}
							alt="arrow"
							className="w-[24px] h-[24px]"
						/>
					</button>
					{children}
				</div>
				<button
					onClick={() => setIsFilterOpen(!isFilterOpen)}
					className="w-full flex justify-center max-w-sm min-[480px]max-w-none mx-auto min-[480px]mx-0 min-[480px]justify-start items-center px-5 py-3 gap-2 text-lg font-medium rounded-lg border bg-secondary-300 text-white transition-all duration-200 hover:bg-secondary-100"
				>
					<Image src={filterIcon} alt="filter" />
					<p>Filter</p>
				</button>
			</div>
		</div>
	);
};

export default EventsPageTitle;
