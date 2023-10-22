import React from "react";
import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import SearchInput from "./events/SearchInput";
import HeaderDropdown from "./settings/headerDropdown";
import Link from "next/link";

const EventHeader = () => {
  return (
    <div>
      <div className="w-full flex px-[20px] md:px-[40px] justify-between items-center py-[20px] gap-3 relative">
        <div className="flex items-center gap-[40px]">
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
          <SearchInput />
        </div>
        <HeaderDropdown />
      </div>
    </div>
  );
};

export default EventHeader;
