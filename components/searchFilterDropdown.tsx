import { SearchFilterDropdownProps } from "@/@types";
import ArrowDownIcon from "./icons/EventDetails/ArrowDown";
import { useState } from "react";

const SearchFilterDropdown = ({
	dropDownTitle,
	listItems,
}: SearchFilterDropdownProps) => {
	const [selected, setSelected] = useState(listItems[0]);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative">
			<div
				className="flex flex-col space-y-1"
				onClick={() => setIsOpen(!isOpen)}
			>
				<label htmlFor="location" className="font-bold text-grey-500">
					{dropDownTitle}
				</label>
				<div className="flex justify-between border border-grey-90 rounded-lg  py-2 px-3 md:py-3 md:px-5">
					<span className="flex-1 font-medium text-grey-200">
						{selected}
					</span>
					<ArrowDownIcon />
				</div>
			</div>
			{isOpen && (
				<ul className="absolute bg-white rounded-md shadow-md left-0 right-0 h-20 overflow-y-scroll">
					{listItems.map((item, index) => (
						<li
							key={index}
							className="font-medium text-grey-200"
							onClick={() => {
								setSelected(item);
								setIsOpen(false);
							}}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchFilterDropdown;
