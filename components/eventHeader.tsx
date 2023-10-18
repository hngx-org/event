import React, { useState } from "react";
import Logo from "@/public/assets/images/logo.png";
import user from "@/public/assets/images/user.svg";
import search from "@/public/images/search.svg";
import Image from "next/image";

const EventHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = (prev: boolean) => setShowSearch(!prev);
  return (
    <div className="w-full flex px-[20px] md:px-[40px] justify-between items-center py-[20px] gap-3 relative">
      <div
        className={`w-full ${
          showSearch ? "flex" : "hidden"
        } bottom-[-25px] items-center gap-4 border border-black/20 p-[10px] max-w-[350px] rounded-lg absolute`}
      >
        <input
          type="text"
          placeholder="Search Input"
          className="w-full border-none outline-none"
        />
      </div>
      <div className="flex items-center gap-[40px]">
        <Image
          src={Logo}
          alt="logo"
          width={133}
          height={16}
          className="h-[16px] w-[133px] object-cover"
        />
        <div className="w-full md:flex hidden items-center gap-4 border border-black/20 p-[10px] max-w-[350px] rounded-lg">
          <Image src={search} alt="search" className="h-4 w-4" />
          <input
            type="text"
            placeholder="Search Input"
            className="w-full border-none outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <button
          onClick={() => toggleSearch(showSearch)}
          className="md:hidden flex"
        >
          <Image src={search} alt="search" className="h-5 w-5 " />
        </button>
        <Image src={user} alt="user" className="h-[40px] w-[40px]" />
        <p className="font-semibold truncate">User’s Name</p>
      </div>
    </div>
  );
};

export default EventHeader;
