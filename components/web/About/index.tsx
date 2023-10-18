import Image from "next/image";
import React from "react";
import VectorImg from "../../../public/images/vectorImg.png";
import aboutImg from "../../../public/images/aboutImg.png";
import AboutCard from "../AboutCard/index";

const features = [
  {
    title: "Easy Registration",
    subtitle:
      "Register for events hassle-free and save time with our streamlined registration process.",
  },
  {
    title: " Event Discovery",
    subtitle:
      "Explore a wide range of events and find the perfect ones to attend.",
  },
  {
    title: "Networking Opportunities",
    subtitle:
      "Connect with like-minded individuals and expand your professional network at events.",
  },
  {
    title: "Easy Event Creation",
    subtitle:
      "Create and manage your own events effortlessly with our intuitive event creation tool.",
  },
];

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5 md:px-20 py-20 mx-auto relative w-full">
        <p className="text-red text-sm font-bold font-sans mb-5">Discover</p>
        <div className="max-w-2xl">
          <div className="mx-auto max-w-xl">
            <p className="text-4xl text-center font-montserrat font-semibold text-[#3B3B3B] mb-6">
              Simplify Event Management with Our Platform
            </p>
          </div>
          <p className="text-center ">
            Our platform offers easy registration, event discovery, and
            networking opportunities, making event management a breeze.
          </p>
        </div>

        <Image
          src={VectorImg}
          alt="vector_img"
          className="absolute h-[200px] w-8 left-20 hidden lg:block"
        />
      </div>

      <div className="px-5 md:px-20 w-full h-full flex flex-col justify-center items-center lg:flex-row mt-10">
        <div className="lg:w-3/12 flex flex-col md:flex-row lg:flex-col items-center justify-center h-full gap-y-10">
          {features.slice(0, 2).map((item, idx) => {
            return <AboutCard {...item} key={idx} />;
          })}
        </div>
        <div className="md:w-6/12 p-6">
          <Image src={aboutImg} alt="hero-img" />
        </div>

        <div className="lg:w-3/12 flex flex-col md:flex-row lg:flex-col items-center justify-center h-full gap-y-10">
          {features.slice(2).map((item, idx) => {
            return <AboutCard {...item} key={idx} />;
          })}
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <button className="bg-secondary-300 rounded-lg text-center text-white px-4 py-2">
          Create an account
        </button>
      </div>
    </>
  );
};

export default About;
