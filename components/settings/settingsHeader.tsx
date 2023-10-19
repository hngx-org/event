import React, {useState} from "react";
import Logo from "@/public/assets/images/logo.png";
import Avatar from "assets/images/avatar.png";
import Image from "next/image";
import {HamburgerIcon} from "@/public/assets/icons/mobileIcons";
import Link from "next/link";
import {useAuth} from "@/hooks/useAuth";

export default function SettingsHeader() {
  const {user, token} = useAuth();

  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between p-4 xl:px-0">
      <div className="">
        {/* Logo */}
        <Link href="/">
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
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={user?.avatar == null ? Avatar : (user?.avatar as string)}
            alt="logo"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-bold text-lg">{user?.username}</p>
      </div>

      {/* Mobile menu toggle */}
      <button className="border-[0.5px] border-secondary-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hidden">
        <HamburgerIcon />
      </button>
    </header>
  );
}
