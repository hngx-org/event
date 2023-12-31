import React from "react";
import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import {HamburgerIcon} from "@/public/assets/icons/mobileIcons";
import Link from "next/link";
import HeaderDropdown from "./headerDropdown";

export default function SettingsHeader() {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between p-4 xl:px-0">
      <div className="">
        {/* Logo */}
        <Link href="/timeline">
          <Image
            src={Logo}
            alt="logo"
            width={133}
            height={16}
            className="h-auto w-auto"
          />
        </Link>
      </div>
      {/* User button */}
      <HeaderDropdown />

      {/* Mobile menu toggle */}
      <button className="border-[0.5px] border-secondary-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hidden">
        <HamburgerIcon />
      </button>
    </header>
  );
}
