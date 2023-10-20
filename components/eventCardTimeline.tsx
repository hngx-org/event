import React from "react";
import eventImage from "@/public/assets/images/eventImage.svg";
import Optionicon from "@/public/assets/images/Optionicon.svg";
import location from "@/public/assets/images/location.svg";
import time from "@/public/assets/images/time.svg";
import Ellipse from "@/public/assets/images/Ellipse.svg";
import Image from "next/image";
import { EventCardProps } from "@/@types";

function formatDate(dateString: string): {
	time: string;
	month: string;
	day: string;
	isLive: boolean;
} {
	const date = new Date(dateString);
	const time = date.toLocaleString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
	const month = date.toLocaleString("en-US", { month: "short" });
	const day = date.toLocaleString("en-US", { day: "2-digit" });

	const isLive = date < new Date(); // Compare the date with the current date and time

	return { time, month, day, isLive };
}

export default function EventCard({
	img,
	title,
	location,
	dateString,
	cost,
}: EventCardProps) {
	const { time, month, day, isLive } = formatDate(dateString);
	return (
		<div className="w-full rounded-lg border border-gray-300 relative">
			<button className="w-[40px] h-[40px] p-3 absolute top-4 right-4 bg-white rounded-[50%] ">
				<Image
					src={Optionicon}
					alt="elipse"
					className="w-full h-full"
				/>
			</button>
			<div className="w-full h-[235px] ">
				<Image
					src={eventImage}
					alt="event"
					className="w-full h-full object-cover rounded-t-lg"
				/>
			</div>
			<div className="p-5">
				<div className="flex justify-between">
					<div>
						<h4 className="font-black text-xl">{title}</h4>
						<div className="mt-1.5 flex font-semibold">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								className="mr-1.5"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
									stroke="#0C0F14"
									stroke-width="1.5"
								/>
								<circle
									cx="12"
									cy="10"
									r="3"
									stroke="#0C0F14"
									stroke-width="1.5"
								/>
							</svg>
							<span>{location}</span>
						</div>
					</div>
					<div className="text-[#962B2B] bg-[#F2E6E6] px-3 py-0.5 text-center text-lg">
						<span className="block">{month}</span>
						<span className="block font-black">{day}</span>
					</div>
				</div>
				<div className="mt-3 flex">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mr-1.5"
					>
						<path
							d="M9.99999 3.01758C9.58578 3.01758 9.24999 2.68179 9.24999 2.26758C9.24999 1.85336 9.58578 1.51758 9.99999 1.51758H13.5355C13.9497 1.51758 14.2855 1.85336 14.2855 2.26758C14.2855 2.68179 13.9497 3.01758 13.5355 3.01758H9.99999Z"
							fill="#3B3B3B"
						/>
						<path
							d="M6.53033 3.46948C6.82322 3.76238 6.82322 4.23725 6.53033 4.53014L4.03033 7.03014C3.73744 7.32304 3.26256 7.32304 2.96967 7.03014C2.67678 6.73725 2.67678 6.26238 2.96967 5.96948L5.46967 3.46948C5.76256 3.17659 6.23744 3.17659 6.53033 3.46948Z"
							fill="#3B3B3B"
						/>
						<path
							d="M12 5.74981C7.99594 5.74981 4.75 8.99575 4.75 12.9998C4.75 17.0039 7.99594 20.2498 12 20.2498C16.0041 20.2498 19.25 17.0039 19.25 12.9998C19.25 12.5856 19.5858 12.2498 20 12.2498C20.4142 12.2498 20.75 12.5856 20.75 12.9998C20.75 17.8323 16.8325 21.7498 12 21.7498C7.16751 21.7498 3.25 17.8323 3.25 12.9998C3.25 8.16732 7.16751 4.24981 12 4.24981C12.4142 4.24981 12.75 4.5856 12.75 4.99981C12.75 5.41403 12.4142 5.74981 12 5.74981Z"
							fill="#3B3B3B"
						/>
						<path
							d="M17.1882 8.36407C17.4204 8.0655 17.394 7.64074 17.1265 7.37329C16.8591 7.10583 16.4343 7.07938 16.1357 7.3116L12.9658 9.77708L10.8944 11.2567C10.4519 11.5727 10.1893 12.083 10.1893 12.6268C10.1893 13.5566 10.9432 14.3105 11.873 14.3105C12.4168 14.3105 12.9271 14.0479 13.2431 13.6054L14.7227 11.534L17.1882 8.36407Z"
							fill="#3B3B3B"
						/>
					</svg>{" "}
					<span className="font-semibold">{time}</span>
				</div>
			</div>
			<div className="w-full flex justify-between px-[24px] py-3">
				<div className="flex gap-2 items-center">
					<Image
						src={Ellipse}
						alt="arrow"
						className="w-[10px] h-[10px]"
					/>
					<p className="text-[#30980C]">Live</p>
				</div>
				<p className="font-bold px-2">Free</p>
			</div>
		</div>
	);
}
