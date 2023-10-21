import React, {useState} from "react";
import Logo from "@/public/assets/images/logo.png";
import avatar from "@/public/assets/images/user.svg";
import search from "@/public/images/search.svg";
import Image from "next/image";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {useAuth} from "@/hooks/useAuth";
import SearchInput from "./events/SearchInput";
import HeaderDropdown from "./settings/headerDropdown";

const EventHeader = () => {
  const {user} = useAuth();

  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = (prev: boolean) => setShowSearch(!prev);
  return (
    <div>
      <div className='w-full flex px-[20px] md:px-[40px] justify-between items-center py-[20px] gap-3 relative'>
        <div className='flex items-center gap-[40px]'>
          <Image
            src={Logo}
            alt='logo'
            width={133}
            height={16}
            className='h-[16px] w-[133px] object-cover'
          />
          {/* <div className="w-full md:flex hidden items-center gap-4 border border-black/20 p-[10px] max-w-[350px] rounded-lg">
            <Image src={search} alt="search" className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search Input"
              className="w-full border-none outline-none"
            />
          </div> */}
          <SearchInput />
        </div>
        <HeaderDropdown />
      </div>
      {showSearch && (
        <div className='md:hidden mx-[20px] mb-2.5 items-center gap-4 border border-black/20 p-[10px] rounded-lg'>
          <input
            type='text'
            placeholder='Search Input'
            className='w-full border-none outline-none'
          />
        </div>
      )}
    </div>
  );
};

export default EventHeader;
