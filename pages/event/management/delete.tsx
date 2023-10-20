import EventLayout from '@/components/layout/eventLayout'
import { EventManagementModalType, SimilarEventsType } from '@/@types';
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import banner from "@/public/assets/images/banner.svg";
import similarImage from "@/public/images/eventimage.jpg"
import { LocationSVG, TimerSVG, CalendarSVG } from '@/public/assets/icons/event-management-svg';
import Image from "next/image";
import React, { useState } from 'react'
import EventManagementModal from '@/components/modals/event-management-modal';

const Delete = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const eventTags: Array<String> = ["Technology", "AI", "Workshops", "Networking", "Innovation", "About me", "About me"]
    const similarEvents: SimilarEventsType[] = [
        {
            imgSrc: similarImage,
            name: "Event Name",
            location: "Event Location",
            time: "Event Time",
            date: "OCT 08",
            live: "Live",
            amount: "Free"
        },
        {
            imgSrc: similarImage,
            name: "Event Name",
            location: "Event Location",
            time: "Event Time",
            date: "OCT 08",
            live: "Live",
            amount: "Free"
        },
        {
            imgSrc: similarImage,
            name: "Event Name",
            location: "Event Location",
            time: "Event Time",
            date: "OCT 08",
            live: "In 2 weeks",
            amount: "#20,000"
        },
    ]

    const modalMessage: EventManagementModalType = {
        title: "Event Deleted",
        message: "Are you sure you want to delete this event? This action cannot be undone.",
        text: "Your event has been successfully deleted. Thank you for using our platform.",
        route: "event/event-details",
        button: "Back to Event Management",
        onclose: () => setShowModal(false),
        onNext: () => { }
    }

    return (
        <EventLayout>
            <div className="w-full">
                <hr />
                {/* Tech Summit And Button */}
                <div className="mt-8 px-[20px] md:px-[40px] gap-8 flex items-center justify-between">
                    <div className="gap-4 flex items-center">
                        <Image
                            src={arrow_back_ios}
                            alt="arrow"
                            className="w-[24px] h-[24px]"
                        />
                        <h3 className="font-montserrat text-xl md:text-2xl text-[#3B3B3B] font-bold">
                            Tech Innovators Summit
                        </h3>
                    </div>
                    <div className="flex gap-6 items-center">
                        <button
                            onClick={() => setShowModal(true)}
                            type="button"
                            className="px-8 py-[18px] rounded-lg bg-transparent text-[#800000] border border-[#800000] font-bold active:scale-[0.99]"
                        >
                            Delete Event
                        </button>
                        <button
                            type="button"
                            className="px-8 py-[18px] rounded-lg bg-[#800000] text-[#FEFEFE] font-bold active:scale-[0.99]"
                        >
                            Edit Event Details
                        </button>
                    </div>
                </div>
                {/* Banner */}
                <Image
                    src={banner}
                    alt="banner"
                    className="w-full max-h-[458px] h-full object-cover  mt-11"
                />
                <div className="container mx-auto mt-8 px-[20px] md:px-[40px] mb-4">
                    {/* Event Description and Date */}
                    <div className="flex flex-col lg:flex-row gap-10 justify-between">
                        {/* Event Description */}
                        <div className="max-w-[733px] w-full">
                            <h1 className="text-[#3B3B3B] text-2xl font-bold font-montserrat">Event Description</h1>
                            <p className="mt-6 text-[#666666] text-lg font-medium text-justify">
                                Dive into the world of cutting-edge technology at the Tech Innovators Summit. This immersive event is designed for tech enthusiasts, entrepreneurs, and innovators alike. Join us for a day filled with inspiring keynote speakers, hands-on workshops, and networking opportunities with industry leaders. Discover the latest trends in artificial intelligence, blockchain, cybersecurity, and more. Whether you&apos;re a tech veteran or just starting your journey, the Tech Innovators Summit is the ultimate destination to explore, learn, and connect in the dynamic tech landscape.
                            </p>
                            {/*  */}
                            <div className="max-w-[650px] w-full flex gap-4 justify-between mt-8">
                                <div>
                                    <h1 className="font-montserrat font-bold text-2xl text-[#3B3B3B]">Available Tickets</h1>
                                    <p className="mt-6 text-[#666666] font-medium">20</p>
                                </div>
                                <div>
                                    <h1 className="font-montserrat font-bold text-2xl text-[#3B3B3B]">Registration Closing Date</h1>
                                    <p className="mt-6 text-[#666666] font-medium">06/11/2023</p>
                                </div>
                            </div>
                            {/* Event Tags */}
                            <div className="max-w-[653px] mt-8">
                                <h1 className="font-bold font-montserrat text-[#3B3B3B] text-2xl">Event Tags</h1>
                                <div className="mt-6 flex flex-wrap gap-y-4 gap-x-8">
                                    {eventTags?.map((event, index) => (
                                        <button
                                            key={index}
                                            type='button'
                                            className="py-2 text-center px-3 border rounded-lg text-[#3B3B3B]"
                                        >
                                            {event}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Date */}
                        <div className="lg:max-w-[437px] w-full h-max p-6 rounded-2xl bg-[#FAFAFA]">
                            <div className="flex items-center justify-between gap-5 text-xl font-bold">
                                <h4 className="text-[#800000]">08-10 October, 2023</h4>
                                <h4 className="text-[#1C1C1C]">#20,000</h4>
                            </div>
                            <div className="mt-6 text-[#1C1C1C] font-semibold">
                                <div className="flex gap-2">
                                    <div>
                                        <LocationSVG />
                                    </div>
                                    <p>Ultimate Garden, By Mobil Junction Lokogoma Expressway Gaduwa Abuja, Federal Capital Territory 900109</p>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <TimerSVG />
                                    <p>9AM Daily</p>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <CalendarSVG />
                                    <p>In 2 weeks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            {showModal && <EventManagementModal {...modalMessage} />}
        </EventLayout>
    )
}

export default Delete
