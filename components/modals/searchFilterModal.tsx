import React from "react";
import ArrowDownIcon from "../icons/EventDetails/ArrowDown";
import RedMultiply from "../icons/EventDetails/RedMultiply";
import Image from "next/image";
import Link from "next/link";
import { SearchFilterProps } from "@/@types";

const SearchFilterModal = ({ setIsFilterOpen }: SearchFilterProps) => {
	return (
		<div className="fixed z-50 inset-0 flex justify-center items-center bg-grey-500/40 p-4">
			<form className="bg-white p-4 rounded-2xl w-full max-w-lg md:max-w-3xl font-sans">
				<h3 className="text-2xl font-bold font-montserrat">
					Search Filter
				</h3>
				<div className="grid md:grid-cols-2 mt-6 mb-10 md:mb-8 gap-4">
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							Location
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 font-medium text-grey-200">
								All, Lagos, Abuja
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
							<span className="flex-1 font-medium text-grey-200">
								All, Today, 2 weeks, a month
							</span>
							<ArrowDownIcon />
						</div>
					</div>
					<div className="flex flex-col space-y-1">
						<label
							htmlFor="location"
							className="font-bold text-grey-500"
						>
							All, Physical, Virtual
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 font-medium text-grey-200">
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
							Event Pricing
						</label>
						<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
							<span className="flex-1 font-medium text-grey-200">
								All, Free, Paid
							</span>
							<ArrowDownIcon />
						</div>
					</div>
				</div>
				<div className="flex justify-center flex-col md:flex-row gap-4 md:gap-6">
					<button
						onClick={() => setIsFilterOpen(false)}
						className="flex items-center px-5 py-3 gap-2 text-lg justify-center md:justify-start font-medium rounded-lg border border-secondary-300 text-secondary-500 transition-all duration-200 hover:bg-secondary-75/50 "
					>
						<RedMultiply />
						<span>Cancel</span>
					</button>
					<Link
						href="/event/filter"
						className="flex items-center px-5 py-3 gap-2 text-lg justify-center md:justify-start font-medium rounded-lg border bg-secondary-300 text-white transition-all duration-200 hover:bg-secondary-100"
					>
						<Image src="assets/images/filter.svg" alt="filter" />
						<span>Apply Filter</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SearchFilterModal;
