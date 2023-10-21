import React from "react";
import ArrowDownIcon from "../icons/EventDetails/ArrowDown";
import RedMultiply from "../icons/EventDetails/RedMultiply";
import Image from "next/image";
import Link from "next/link";
import { SearchFilterProps } from "@/@types";
import SearchFilterDropdown from "../searchFilterDropdown";

const dropDownFields = [
	{
		type: "Location",
		values: ["All, Lagos, Abuja", "All", "Lagos", "Abuja"],
	},
	{
		type: "Date",
		values: [
			"All, Today, 2 weeks, a month",
			"All",
			"Today",
			"2 weeks",
			"1 month",
		],
	},
	{
		type: "Event Type",
		values: ["All, Physical, Virtual", "All", "Physical", "Virtual"],
	},
	{
		type: "Event Pricing",
		values: ["All, Free, Paid", "All", "Free", "Paid"],
	},
];

const SearchFilterModal = ({ setIsFilterOpen }: SearchFilterProps) => {
	return (
		<div className="fixed z-50 inset-0 flex justify-center items-center bg-grey-500/40 p-4">
			<form className="bg-white p-4 rounded-2xl w-full max-w-lg md:max-w-3xl font-sans">
				<h3 className="text-2xl font-bold font-montserrat">
					Search Filter
				</h3>
				<div className="grid md:grid-cols-2 mt-6 mb-10 md:mb-8 gap-4">
					{dropDownFields.map((field, index) => (
						<SearchFilterDropdown
							key={index}
							dropDownTitle={field.type}
							listItems={field.values}
						/>
					))}
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
						<Image
							src="/assets/images/filter.svg"
							width={20}
							height={20}
							alt="filter"
						/>
						<span>Apply Filter</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SearchFilterModal;
