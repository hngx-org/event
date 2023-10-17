import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "assets/images/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/public/assets/icons/socialIcons";
import {link} from "fs";

const socials = [
  {
    href: "",
    icon: FacebookIcon,
  },
  {
    href: "",
    icon: TwitterIcon,
  },
  {
    href: "",
    icon: InstagramIcon,
  },
  {
    href: "",
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-4 xl:px-0 xl:py-14">
      {/* Details and External links */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-36 mb-12">
        {/* About */}
        <div className="lg:max-w-sm">
          <h3 className="text-xl font-montserrat font-bold mb-6">
            About EventWave
          </h3>
          <p className="text-grey-100">
            We set out to redefine event experiences. What started as a passion
            project soon evolved into a full-fledged entity, and our journey has
            been marked by collaborations, and challenges.
          </p>
        </div>

        {/* Links */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-3">
          {/* Company */}
          <div className="">
            <h3 className="text-xl font-montserrat font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-2 text-grey-100">
              <li>
                <Link href="">About us</Link>
              </li>
              <li>
                <Link href="">Our services</Link>
              </li>
              <li>
                <Link href="">Our Works</Link>
              </li>
              <li>
                <Link href="">Career</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="">
            <h3 className="text-xl font-montserrat font-semibold mb-6">
              Resources
            </h3>

            <ul className="space-y-2 text-grey-100">
              <li>
                <Link href="">Free eBooks</Link>
              </li>
              <li>
                <Link href="">Development Tutorial</Link>
              </li>
              <li>
                <Link href="">How to - Blog</Link>
              </li>
              <li>
                <Link href="">Youtube Playlist</Link>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div className="">
            <h3 className="text-xl font-montserrat font-semibold mb-6">
              Others
            </h3>

            <ul className="space-y-2 text-grey-100">
              <li>
                <Link href="">Customer Support</Link>
              </li>
              <li>
                <Link href="">Delivery Details</Link>
              </li>
              <li>
                <Link href="">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo & Social Link */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Logo section */}
        <div className="space-y-4">
          <Image
            src={Logo}
            alt="logo"
            width={133}
            height={16}
            className="h-auto w-auto"
          />
          <p className="text-grey-80 text-sm">
            © 2012-2023, All Rights Reserved
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.href}
                href={social.href}
                className="bg-secondary-300 w-10 h-10 flex items-center justify-center rounded-full"
              >
                {<Icon />}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
