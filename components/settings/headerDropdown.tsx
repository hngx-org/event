import {LogOut} from "@/lib/auth/logout";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Avatar from "assets/images/avatar.png";
import {useAuth} from "@/hooks/useAuth";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

export default function HeaderDropdown() {
  const {user, token} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden lg:flex gap-6 relative">
      {token ? (
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex gap-2 items-center"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={user?.avatar == null ? Avatar : (user?.avatar as string)}
                alt="logo"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-grey-500 font-bold text-lg">{user?.username}</p>
            <div className="transition-all duration-300 ease-in-out">
              {!isDropdownOpen ? (
                <ChevronDownIcon className="w-6 h-6 text-grey-500" />
              ) : (
                <ChevronUpIcon className="w-6 h-6 text-grey-500" />
              )}
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute -right-1 top-16 w-48 bg-white rounded shadow-lg z-50 py-2 px-[1px] transition-all duration-300 ease-in-out">
              <ul className="block w-full">
                <li className="w-full">
                  <Link
                    href="/timeline"
                    className="block w-full text-secondary-300 text-left py-2 px-4 hover:bg-grey-30 font-semibold"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    href="/register/free"
                    className="block w-full text-secondary-300 text-left py-2 px-4 hover:bg-grey-30 font-semibold"
                  >
                    Join Event
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    href="/settings"
                    className="block w-full text-secondary-300 text-left py-2 px-4 hover:bg-grey-30 font-semibold"
                  >
                    Account Settings
                  </Link>
                </li>
                <li
                  onClick={LogOut}
                  className="block cursor-pointer w-full text-secondary-300 text-left py-2 px-4 hover:bg-grey-30 font-semibold"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          <Link href="auth/login">
            <button className="py-3 px-10 border-white border bg-secondary-300 text-white z-10 hover:bg-white hover:text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
              Login
            </button>
          </Link>

          <Link href="auth/signup">
            <button className="py-3 px-10 border border-white z-10 hover:bg-secondary-300 hover:text-white bg-white text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
              Sign up
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
