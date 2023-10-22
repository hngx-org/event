import React from "react";
import NavLink from "./navLinks";
import {SearchIcon} from "@/public/assets/icons/settingsIcon";

export default function SideBar() {
  return (
    <aside className="pl-20 pr-14 py-10 w-[408px] min-w-[408px] space-y-9 hidden lg:block">
      <h3 className="text-xl text-grey-500 font-bold">Account Settings</h3>
      {/* Search */}
      <div className="relative">
        <input
          className="focus:outline-none border rounded-lg border-grey-90 py-2 px-4 w-full pl-10 placeholder:text-grey-400"
          type="search"
          placeholder="Search"
          name=""
          id=""
        />
        <div className="absolute left-4 top-3">
          <SearchIcon />
        </div>
      </div>
      <NavLink />
    </aside>
  );
}
