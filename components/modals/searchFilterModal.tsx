import React from "react";
import ArrowDownIcon from "../icons/EventDetails/ArrowDown";
import RedMultiply from "../icons/RedMultiply";
import filterIcon from "@/public/assets/images/filter.svg";
import Image from "next/image";
import Link from "next/link";

const SearchFilterModal = () => {
	return (
		<div className="fixed z-50 inset-0 flex justify-center items-center bg-grey-500/40 p-4">
			<form className="bg-white p-4 rounded-2xl w-full max-w-3xl font-sans">
				<h3 className="text-2xl font-bold font-montserrat">
					Search Filter
				</h3>
				<div className="grid md:grid-cols-2 mt-6 mb-8 gap-4">
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							Location
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 text-center font-medium text-grey-200">
								Location Filter
							</span>
							<ArrowDownIcon />
						</div>
					</div>
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							Category
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 text-center font-medium text-grey-200">
								Category Filter
							</span>
							<ArrowDownIcon />
						</div>
					</div>
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							Date
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 text-center font-medium text-grey-200">
								Date Filter
							</span>
							<ArrowDownIcon />
						</div>
					</div>
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							Event Type
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 text-center font-medium text-grey-200">
								Event Type Filter
							</span>
							<ArrowDownIcon />
						</div>
					</div>
				</div>
				<div className="flex justify-center gap-6">
					<button className="flex items-center px-6 py-3 md:py-4 gap-2 text-lg font-medium rounded-lg border border-secondary-300 text-secondary-500 transition-all duration-200 hover:bg-secondary-75/50 ">
						<RedMultiply />
						<span>Cancel</span>
					</button>
					<Link
						href="/"
						className="flex items-center px-6 py-3 md:py-4 gap-2 text-lg font-medium rounded-lg border bg-secondary-300 text-white transition-all duration-200 hover:bg-secondary-100"
					>
						<Image src={filterIcon} alt="filter" />
						<span>Apply Filter</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SearchFilterModal;
