import { CalendarIcon, ClockIcon, LocationIcon, ArrowBackIcon, ElipseIcon, OptionIcon } from "@/components/icons/EventDetails/SocialIcons";
import Link from "next/link";

export default function EventDetails() {
    return (
        <>
            <div className="max-w-7xl mx-auto flex justify-between mb-6 mt-24">
                <div className="flex gap-4 items-center">
                    <ArrowBackIcon />
                    <h3 className="text-grey-500 text-2xl font-bold">Tech Innovators Summit</h3>
                </div>
                <Link href='/Checkout' className="bg-secondary-300 text-white text-base font-bold flex justify-center items-center py-[18px] px-8 rounded-lg">Register for this event</Link>
            </div>
            
            <div className="w-full">
                <img src="/assets/images/herobg.png" alt="hero" className="w-full"/>
            </div>

            <div className="max-w-7xl mx-auto mt-8">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6 max-w-[733px]">
                            <h1 className="text-grey-500 text-2xl font-bold">Event Description</h1>
                            <p className="text-[#666] text-justify font-medium text-lg">Dive into the world of cutting-edge technology at the Tech Innovators Summit. This immersive event is designed for tech enthusiasts, entrepreneurs, and innovators alike. Join us for a day filled with inspiring keynote speakers, hands-on workshops, and networking opportunities with industry leaders. Discover the latest trends in artificial intelligence, blockchain, cybersecurity, and more. Whether you&aptos;re a tech veteran or just starting your journey, the Tech Innovators Summit is the ultimate destination to explore, learn, and connect in the dynamic tech landscape.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-grey-500 text-2xl font-bold">Event Tags</h1>
                            <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-[653px]">
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">Technology</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">AI</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">Workshops</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">Networking</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">Innovation</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">About me</span>
                                <span className="flex py-2 px-3 justify-center gap-1 rounded-lg border border-grey-500">About me</span>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex p-6 items-start gap-6 rounded-2xl bg-[#FAFAFA] max-w-[437px] max-h-[252px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="flex justify-between">
                                <h1 className="text-secondary-300 font-bold text-xl">08-10 October, 2023</h1>
                                <h1 className="text-grey-700 font-bold text-xl">&#8358;20,000</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2 items-start">
                                    <LocationIcon />
                                    <h4 className="text-grey-700 text-base font-semibold">
                                        Ultimate Garden, By Mobil Junction Lokogoma Expressway Gaduwa Abuja, Federal Capital Territory 900109
                                    </h4>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ClockIcon />
                                    <h4 className="text-grey-700 text-base font-semibold">
                                        9AM Daily
                                    </h4>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <CalendarIcon />
                                    <h4 className="text-grey-700 text-base font-semibold">
                                        In 2 weeks
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-[72px] mb-28">
                    <h1 className="text-grey-500 text-2xl font-bold">Similar Event</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="w-full rounded-lg border border-gray-300 relative">
                            <button className="w-[40px] h-[40px] flex items-center justify-center p-3 absolute top-4 right-4 bg-white rounded-[50%] ">
                                <OptionIcon />
                            </button>
                            <div className="w-full h-[235px] ">
                                <img
                                src='/assets/images/similarevent.png'
                                alt="event"
                                className="w-full h-full object-cover rounded-t-lg"

                                />
                            </div>
                            <div className="grid grid-cols-[1fr_0.4fr] gap-3 p-[24px]">
                                <div className="grid gap-[10px]">
                                <h3 className="text-2xl font-bold">Event Name</h3>
                                <div className="flex gap-2 items-center">
                                    <LocationIcon />
                                    <p className="">Event Location</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ClockIcon />
                                    <p>Event Time</p>
                                </div>
                                </div>
                                <div>
                                <div className="w-full bg-secondary-50 flex items-center justify-center flex-col p-[10px] rounded-md ">
                                    <p className="text-secondary-200 font-bold">OCT</p>
                                    <h3 className="text-2xl font-extrabold">08</h3>
                                </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-between px-[24px] py-3">
                                <div className="flex gap-2 items-center">
                                <ElipseIcon />
                                <p className="text-[#30980C]">Free</p>
                                </div>
                                <p className="font-bold px-2">Live</p>
                            </div>
                        </div>
                        <div className="w-full rounded-lg border border-gray-300 relative">
                            <button className="w-[40px] h-[40px] p-3 flex items-center justify-center absolute top-4 right-4 bg-white rounded-[50%] ">
                                <OptionIcon />
                            </button>
                            <div className="w-full h-[235px] ">
                                <img
                                src='/assets/images/similarevent.png'
                                alt="event"
                                className="w-full h-full object-cover rounded-t-lg"

                                />
                            </div>
                            <div className="grid grid-cols-[1fr_0.4fr] gap-3 p-[24px]">
                                <div className="grid gap-[10px]">
                                <h3 className="text-2xl font-bold">Event Name</h3>
                                <div className="flex gap-2 items-center">
                                    <LocationIcon />
                                    <p className="">Event Location</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ClockIcon />
                                    <p>Event Time</p>
                                </div>
                                </div>
                                <div>
                                <div className="w-full bg-secondary-50 flex items-center justify-center flex-col p-[10px] rounded-md ">
                                    <p className="text-secondary-200 font-bold">OCT</p>
                                    <h3 className="text-2xl font-extrabold">08</h3>
                                </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-between px-[24px] py-3">
                                <div className="flex gap-2 items-center">
                                <ElipseIcon />
                                <p className="text-[#30980C]">Free</p>
                                </div>
                                <p className="font-bold px-2">Live</p>
                            </div>
                        </div>
                        <div className="w-full rounded-lg border border-gray-300 relative">
                            <button className="w-[40px] h-[40px] flex items-center justify-center p-3 absolute top-4 right-4 bg-white rounded-[50%] ">
                                <OptionIcon />
                            </button>
                            <div className="w-full h-[235px] ">
                                <img
                                src='/assets/images/similarevent.png'
                                alt="event"
                                className="w-full h-full object-cover rounded-t-lg"

                                />
                            </div>
                            <div className="grid grid-cols-[1fr_0.4fr] gap-3 p-[24px]">
                                <div className="grid gap-[10px]">
                                <h3 className="text-2xl font-bold">Event Name</h3>
                                <div className="flex gap-2 items-center">
                                    <LocationIcon />
                                    <p className="">Event Location</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <ClockIcon />
                                    <p>Event Time</p>
                                </div>
                                </div>
                                <div>
                                <div className="w-full bg-secondary-50 flex items-center justify-center flex-col p-[10px] rounded-md ">
                                    <p className="text-secondary-200 font-bold">OCT</p>
                                    <h3 className="text-2xl font-extrabold">08</h3>
                                </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-between px-[24px] py-3">
                                <div className="flex gap-2 items-center">
                                <ElipseIcon />
                                <p className="text-[#30980C]">Free</p>
                                </div>
                                <p className="font-bold px-2">Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}