import React, { useState } from "react";
import Logo from "@/public/assets/images/logo.png";
import user from "@/public/assets/images/user.svg";
import search from "@/public/images/search.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const EventHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = (prev: boolean) => setShowSearch(!prev);

  const handleChange = (event: any) => {
    router.push({ pathname: "/events", query: { search: event.target.value } });
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center py-[20px] gap-3 relative">
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
              onKeyDown={handleChange}
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
          <p className="font-semibold truncate">User's Name</p>
        </div>
      </div>
      {showSearch && (
        <div className="md:hidden mb-2.5 items-center gap-4 border border-black/20 p-[10px] rounded-lg">
          <input
            value={searchQuery}
            onChange={handleChange}
            type="text"
            placeholder="Search Input"
            className="w-full border-none outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default EventHeader;
