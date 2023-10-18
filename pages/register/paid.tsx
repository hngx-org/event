import AccountSummary from "@/components/accountSummary";
import EventHeader from "@/components/eventHeader";
import EventLayout from "@/components/layout/eventLayout";
import Footer from "@/components/web/footer";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import banner from "@/public/assets/images/banner.svg";
import Image from "next/image";
import React from "react";

const Paid = () => {
  return (
    <EventLayout>
      <div className="w-full grid gap-4">
        <div className="px-[20px] md:px-[40px] grid gap-4 mt-5">
          <div className="gap-[16px] flex items-center">
            <Image
              src={arrow_back_ios}
              alt="arrow"
              className="w-[24px] h-[24px]"
            />
            <h3 className="font-montserrat text-xl md:text-[24px] text-gray-400 font-normal">
              Tech Innovators Summit \
              <span className="font-bold text-gray-500"> Checkout</span>
            </h3>
          </div>
        </div>
        <div className="w-full h-[458px]">
          <Image
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-[20px] md:px-[40px] gap-6 grid md:grid-cols-[1fr_0.5fr] grid-cols-1 my-10">
          <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-6">
            <div className="w-full grid gap-2">
              <label htmlFor="firstName" className="font-medium text-gray-500">
                First Name
              </label>
              <input
                type="text"
                placeholder="Users's Name"
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              />
            </div>
            <div className="w-full grid gap-2">
              <label htmlFor="lastName" className="font-medium text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Users's Name"
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              />
            </div>
            <div className="w-full grid gap-2">
              <label htmlFor="email" className="font-medium text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="user@mail.com"
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              />
            </div>
            <div className="w-full grid gap-2">
              <label
                htmlFor="phoneNumber"
                className="font-medium text-gray-500"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Users's Name"
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              />
            </div>
            <div className="w-full grid gap-2">
              <label htmlFor="gender" className="font-medium text-gray-500">
                Gender
              </label>
              <select
                name=""
                id=""
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefernottosay">Prefer Not To Say</option>
              </select>
            </div>
            <div className="w-full grid gap-2">
              <label htmlFor="how" className="font-medium text-gray-500">
                How did you hear about this event?
              </label>
              <select
                name="how"
                className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
              >
                <option value="friend">Friend</option>
                <option value="family">Family</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <AccountSummary />
          </div>
          <div className="w-full">
            <p className="text-gray-500">
              By selecting Register, I agree to the{" "}
              <span className="text-secondary-300 underline">
                EventWave Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default Paid;
