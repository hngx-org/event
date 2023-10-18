import Image from "next/image";
import React from "react";
import Logo from "assets/images/logo.png";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {HamburgerIcon} from "@/public/assets/icons/mobileIcons";
import {useAuth} from "@/hooks/useAuth";
import Avatar from "assets/images/avatar.png";
import {LogOut} from "@/lib/auth/logout";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/groups",
    name: "Upcoming Events",
  },
  {
    href: "/calendar",
    name: "Join Event",
  },
  {
    href: "/settings",
    name: "Settings",
  },
];

export default function Header() {
  const pathname = usePathname();
  const {user, token} = useAuth();

  return (
    <header className="max-w-7xl mx-auto flex justify-between p-4 xl:px-0">
      <div className="flex gap-20 items-center">
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

        {/* Nav Section */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    className="font-bold text-grey-500 hover:text-secondary-300  transition-all duration-300 ease-in-out"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Login/Signup button */}
      <div className="hidden lg:flex gap-6">
        {token ? (
          <>
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
              <p className="text-white font-bold text-lg">{user?.username}</p>
            </div>
            <button
              onClick={LogOut}
              className="py-3 px-10 border-white border bg-secondary-300 text-white z-10 hover:bg-white hover:text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
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
      <div className="h-full w-4/12 absolute top-0  bg-secondary-300 right-0 -z-[200] hidden lg:block"></div>

      {/* Mobile menu toggle */}
      <button className="border-[0.5px] border-secondary-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hidden">
        <HamburgerIcon />
      </button>
    </header>
  );
}
