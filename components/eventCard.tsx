import { EventCardProps } from "@/@types";
import Image from "next/image";

export default function EventCard({
	img,
	title,
	location,
	time,
	month,
	day,
	isLive = false,
	cost,
}: EventCardProps) {
	// I set default values incase props aren't passed
	return (
		<div className="border border-gray-200 bg-[#FAFAFA] rounded-md">
			<div className="relative">
				<div className="">
					<Image
						src={img}
						width={400}
						height={400}
						alt={"title"}
						className="rounded-t-md w-full h-[240px] 2xl:h-[280px]"
					/>
				</div>
				<button className="mt-5 mr-5 absolute top-0 right-0 bg-white hover:bg-gray-100 active:bg-gray-200 w-max rounded-bg p-0.5 rounded-full">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_1663_2418)">
							<path
								d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z"
								stroke="#383838"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11Z"
								stroke="#383838"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
								stroke="#383838"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1663_2418">
								<rect
									width="24"
									height="24"
									fill="white"
									transform="matrix(0 1 -1 0 24 0)"
								/>
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
			<div className="p-5">
				<div className="flex justify-between">
					<div>
						<h4 className="font-black text-xl">
							{title || "Event Name"}
						</h4>
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
							<span>{location || "Event Location"}</span>
						</div>
					</div>
					<div className="text-[#962B2B] bg-[#F2E6E6] px-3 py-0.5 text-center text-lg">
						<span className="block">{month || "OCT"}</span>
						<span className="block font-black">{day || "08"}</span>
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
					<span className="font-semibold">
						{time || "Event Time"}
					</span>
				</div>
				<div className="mt-4 flex justify-between">
					{isLive ? (
						<div className="flex text-[#30980C] font-bold">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="my-auto mr-1.5"
							>
								<circle cx="4" cy="4" r="4" fill="#30980C" />
							</svg>{" "}
							<p>Live</p>
						</div>
					) : (
						<div className="font-bold flex">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mr-1.5"
							>
								<path
									d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
									fill="#292D32"
								/>
								<path
									d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
									fill="#292D32"
								/>
								<path
									d="M8.5 14.5003C8.37 14.5003 8.24 14.4703 8.12 14.4203C7.99 14.3703 7.89 14.3003 7.79 14.2103C7.61 14.0203 7.5 13.7703 7.5 13.5003C7.5 13.3703 7.53 13.2403 7.58 13.1203C7.63 13.0003 7.7 12.8903 7.79 12.7903C7.89 12.7003 7.99 12.6303 8.12 12.5803C8.48 12.4303 8.93 12.5103 9.21 12.7903C9.39 12.9803 9.5 13.2403 9.5 13.5003C9.5 13.5603 9.49 13.6303 9.48 13.7003C9.47 13.7603 9.45 13.8203 9.42 13.8803C9.4 13.9403 9.37 14.0003 9.33 14.0603C9.3 14.1103 9.25 14.1603 9.21 14.2103C9.02 14.3903 8.76 14.5003 8.5 14.5003Z"
									fill="#292D32"
								/>
								<path
									d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z"
									fill="#292D32"
								/>
								<path
									d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z"
									fill="#292D32"
								/>
								<path
									d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z"
									fill="#292D32"
								/>
								<path
									d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z"
									fill="#292D32"
								/>
								<path
									d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z"
									fill="#292D32"
								/>
								<path
									d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
									fill="#292D32"
								/>
								<path
									d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
									fill="#292D32"
								/>
							</svg>
							In 2 weeks
						</div>
					)}
					<p className="font-bold text-[#1C1C1C]">
						{!cost ? "Free" : "₦ " + cost}
					</p>
				</div>
			</div>
		</div>
	);
}
