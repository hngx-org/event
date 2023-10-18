import AccountSummary from "@/components/accountSummary";
import EventHeader from "@/components/eventHeader";
import EventLayout from "@/components/layout/eventLayout";
import Footer from "@/components/web/footer";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import banner from "@/public/assets/images/banner.svg";
import Image from "next/image";
import React, { useState } from "react";



const Paid = () => {
  const [num, setNum] = useState<number>(1);
  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  return (
    <EventLayout>
      <div className="w-full">
        <hr />
        <div className="mt-8 ps-[20px] md:px-[40px] gap-4 flex items-center">
          <Image
            src={arrow_back_ios}
            alt="arrow"
            className="w-[24px] h-[24px]"
          />
          <h3 className="font-montserrat text-xl md:text-2xl text-[#4A4A4A] font-normal">
            Tech Innovators Summit \
            <span className="font-bold text-[#3B3B3B]"> Checkout</span>
          </h3>
        </div>
        {/* Banner */}
        <Image
          src={banner}
          alt="banner"
          className="w-full max-h-[458px] h-full object-cover  mt-11"
        />

        <form className="container mx-auto px-[20px] md:px-[40px] gap-10 md:gap-6 md:justify-between flex flex-col sm:flex-row mt-8">
          <div className="max-w-[735px] w-full">
            <h1 className="text-[3B3B3B] font-montserrat text-2xl font-bold">Contact Information</h1>
            {/* FIRST AND LAST NAME */}
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* First Name */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="firstName">
                  First Name*
                </label>
                <div className="py-3 px-4 mt-2 flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full focus-visible:outline-none"
                    required
                  />
                  <Image
                    alt="arrow down"
                    src={arrow_back_ios}
                    className="rotate-[270deg]"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="lastName">
                  Last Name*
                </label>
                <div className="py-3 px-4 mt-2 flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full focus-visible:outline-none"
                    required
                  />
                  <Image
                    alt="arrow down"
                    src={arrow_back_ios}
                    className="rotate-[270deg]"
                  />
                </div>
              </div>
            </div>
            {/* EMAIL AND NUMBER */}
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Email */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="email">
                  Email*
                </label>
                <div className="py-3 px-4 mt-2 flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full focus-visible:outline-none"
                    required
                  />
                  <Image
                    alt="arrow down"
                    src={arrow_back_ios}
                    className="rotate-[270deg]"
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="phoneNumber">
                  Phone Number*
                </label>
                <div className="mt-2 overflow-hidden flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <select
                    title="countryCode"
                    name="country code"
                    id="countryCode"
                    className="focus-visible:outline-none py-3 ps-4 border-e border-[#A3A3A3]"
                    required
                  >
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="number"
                    placeholder="8123456789"
                    className="w-full py-3 ps-3 pe-4 focus-visible:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            {/* GENDER AND HOW DID YOU HEAR ABOUT THIS EVENT */}
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Gender */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="gender">
                  Gender
                </label>
                <div className="mt-2 overflow-hidden flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <select
                    title="gender"
                    name="gender"
                    id="gender"
                    className="focus-visible:outline-none w-full py-3 px-4"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="notSay">Preferrably not to say</option>
                  </select>
                </div>
              </div>
              {/* How Did you hear about us */}
              <div className="font-sans font-medium text-base text-[#3B3B3B]">
                <label htmlFor="phoneNumber">
                  How did you hear about this event?
                </label>
                <div className="mt-2 overflow-hidden flex items-center gap-2 rounded-lg border-[#A3A3A3] border bg-[#FEFEFE]">
                  <select
                    title="howYouHear"
                    name="howYouHear"
                    id="howYouHear"
                    className="focus-visible:outline-none w-full py-3 px-4"
                  >
                    <option value="twitter">Twitter</option>
                    <option value="linkedln">LinkedLn</option>
                    <option value="facebook">Facebook</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="others">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PAYMENT DETAILS */}
            <div className="mt-[56px]">
              <h1 className="text-[#3B3B3B] font-montserrat text-2xl font-bold">Payment Details</h1>
              {/* Card or Bank */}
              <div className="mt-6 flex items-center gap-4">
                <input
                  type="checkbox"
                  title="Pay with Card or Bank"
                  name="cardOrBank"
                  id="cardOrBank"
                  className="w-5 h-5"
                />
                <p className="font-sans text-lg font-medium text-[#666]">Pay with Card or Bank</p>
              </div>
              {/* Bank Transfer */}
              <div className="mt-6 flex items-center gap-4">
                <input
                  type="checkbox"
                  title="Pay with Bank Transfer"
                  name="bankTransfer"
                  id="bankTransfer"
                  className="w-5 h-5"
                />
                <p className="font-sans text-lg font-medium text-[#666]">Pay with Bank Transfer</p>
              </div>
              {/* Chipper Cash */}
              <div className="mt-6 flex items-center gap-4">
                <input
                  type="checkbox"
                  title="Pay with Chipper Cash"
                  name="chipperCash"
                  id="chipperCash"
                  className="w-5 h-5"
                />
                <p className="font-sans text-lg font-medium text-[#666]">Pay with Chipper Cash</p>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="md:max-w-[437px] h-max w-full p-6 rounded-2xl bg-[#FAFAFA]">
            <h4 className="text-xl text-center font-sans text-[#800000] mb-6 font-bold">
              Order Summary
            </h4>
            <hr />
            <div className="mt-6 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-[#1C1C1C]">Tech Innovators Summit Regular Ticket</h3>
              <div className="flex items-center gap-4">
                <a
                  onClick={decrement}
                  className={`w-8 h-8 flex place-content-center cursor-pointer rounded-lg text-2xl font-bold text-white ${num == 1 ? "bg-[#BFBFBF]" : "bg-[#800000]"
                    } `}
                >
                  -
                </a>
                <p className="text-2xl font-montserrat text-[#800000] font-bold">{num}</p>
                <a
                  onClick={increment}
                  className="w-8 h-8 flex place-content-center cursor-pointer rounded-lg text-2xl font-bold text-white bg-secondary-300"
                >
                  +
                </a>
              </div>
            </div>
            <div className="my-8 flex justify-between gap-4 items-center text-[#1C1C1C] text-base font-sans">
              <h3 className="font-semibold">Sub-total</h3>
              <h3 className="font-medium">₦20,000</h3>
            </div>
            <hr />
            <div className="mt-8 flex justify-between gap-4 items-center">
              <h3 className="font-semibold text-[#1C1C1C] text-base font-sans">Total:</h3>
              <h3 className="font-bold text-2xl font-montserrat text-[#800000]">₦20,000</h3>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="text-base font-bold text-white bg-[#800000] py-4 px-8 rounded-lg font-sans"
              >
                Register for this event
              </button>
            </div>
          </div>

        </form>
        {/* Agrrements */}
        <div className="container mx-auto px-[20px] md:px-[40px] mb-[180px]">
          <p className="mt-[56px] text-[#4A4A4A] font-sans text-lg font-medium">
            By selecting Register, I agree to the{" "}
            <span className="font-bold text-[#800000] underline">
              EventWave Terms of Service
            </span>
          </p>
        </div>
        <hr />
      </div>
    </EventLayout>
  );
};

export default Paid;
