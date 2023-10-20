import React, { useState } from "react";
import Logo from "@/public/assets/images/logo.png";
import avatar from "@/public/assets/images/user.svg";
import search from "@/public/images/search.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const EventHeader = () => {
	const { user } = useAuth();
	const router = useRouter();
	const [searchString, setSearchString] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const toggleSearch = (prev: boolean) => setShowSearch(!prev);

	const submitSearchString = (event: React.SyntheticEvent) => {
		event.preventDefault();
		router.push(`/events/search?value=${searchString}`);
		console.log(searchString);
	};
	return (
		<div>
			<div className="w-full flex px-[20px] md:px-[40px] justify-between items-center py-[20px] gap-3 relative">
				<div className="flex items-center gap-[40px]">
					<Image
						src={Logo}
						alt="logo"
						width={133}
						height={16}
						className="h-[16px] w-[133px] object-cover"
					/>
					<form
						onSubmit={submitSearchString}
						className="w-full md:flex hidden items-center gap-4 border border-black/20 p-[10px] max-w-[350px] rounded-lg"
					>
						<Image src={search} alt="search" className="h-4 w-4" />
						<input
							type="text"
							placeholder="Search Input"
							className="w-full border-none outline-none"
							onChange={(event) =>
								setSearchString(event.target.value)
							}
						/>
						<button type="submit" className="hidden">
							submit
						</button>
					</form>
				</div>
				<div className="flex items-center gap-[20px]">
					<button
						onClick={() => toggleSearch(showSearch)}
						className="md:hidden flex"
					>
						<Image src={search} alt="search" className="h-5 w-5 " />
					</button>
					<Image
						src={user?.avatar || avatar}
						alt="avatar"
						width={40}
						height={40}
						className="rounded-full"
						unoptimized
					/>
					<p className="font-semibold truncate">
						{user?.username?.split(" ")[0] || "User"}
					</p>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.9966 15.1037L5.47374 8.2704C5.30166 8.09013 5.09906 8.00233 4.86592 8.00698C4.63279 8.01164 4.43019 8.1041 4.25811 8.28437C4.08604 8.46462 4 8.67687 4 8.9211C4 9.16534 4.08604 9.37758 4.25811 9.55783L10.8875 16.5168C11.0441 16.6808 11.2195 16.8023 11.4137 16.8814C11.608 16.9605 11.8023 17 11.9966 17C12.1909 17 12.3851 16.9605 12.5794 16.8814C12.7737 16.8023 12.9491 16.6808 13.1056 16.5168L19.7484 9.55783C19.9204 9.37758 20.0043 9.16301 19.9998 8.91412C19.9954 8.66524 19.9071 8.45067 19.7351 8.2704C19.563 8.09013 19.3604 8 19.1272 8C18.8941 8 18.6915 8.09013 18.5194 8.2704L11.9966 15.1037Z"
							fill="#3B3B3B"
						/>
						<mask
							id="mask0_1768_2306"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="24"
							height="24"
						>
							<rect
								width="24"
								height="24"
								transform="matrix(0 -1 -1 0 24 24)"
								fill="#FEFEFE"
							/>
						</mask>
						<g mask="url(#mask0_1768_2306)"></g>
					</svg>
				</div>
			</div>
			{showSearch && (
				<div className="md:hidden mx-[20px] mb-2.5 items-center gap-4 border border-black/20 p-[10px] rounded-lg">
					<input
						type="text"
						placeholder="Search Input"
						className="w-full border-none outline-none"
					/>
				</div>
			)}
		</div>
	);
};

export default EventHeader;
