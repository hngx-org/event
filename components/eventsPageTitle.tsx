import { EventsPageTitleProps } from "@/@types";
import Image from "next/image";
import { useRouter } from "next/router";

const EventsPageTitle = ({
	children,
	setIsFilterOpen,
	isFilterOpen,
}: EventsPageTitleProps) => {
	const router = useRouter();
	return (
		<div className="px-[20px] md:px-[40px] grid gap-4">
			<div className="w-full mt-4 flex min-[480px]:justify-between min-[480px]:items-center flex-col min-[480px]:flex-row gap-[15px]">
				<div className="gap-[16px] flex items-center">
					<button onClick={() => router.push(".")}>
						<Image
							src="/images/backarrow.svg"
							alt="back arrow icon"
							width={24}
							height={24}
						/>
					</button>
					{children}
				</div>
				<button
					onClick={() => setIsFilterOpen(!isFilterOpen)}
					className="w-full flex justify-center max-w-sm min-[480px]:max-w-none mx-auto min-[480px]:mx-0 min-[480px]:justify-start min-[480px]:w-auto items-center px-5 py-3 gap-2 text-lg font-medium rounded-lg border bg-secondary-300 text-white transition-all duration-200 hover:bg-secondary-100"
				>
					<Image
						src="/assets/images/filter.svg"
						width={20}
						height={20}
						alt="filter"
					/>
					<p>Filter</p>
				</button>
			</div>
		</div>
	);
};

export default EventsPageTitle;
