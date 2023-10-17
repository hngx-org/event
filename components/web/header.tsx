import Image from "next/image";
import React from "react";
import Logo from "assets/images/logo.png";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {HamburgerIcon} from "@/public/assets/icons/mobileIcons";

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
        <Link href="auth/login">
          <button className="py-3 px-10 border-white bg-secondary-300 text-white hover:bg-white hover:text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
            Login
          </button>
        </Link>

        <Link href="auth/signup">
          <button className="py-3 px-10 border-white hover:bg-secondary-300 hover:text-white bg-white text-secondary-300 rounded-lg font-bold  transition-all duration-300 ease-in-out">
            Sign up
          </button>
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button className="border-[0.5px] border-secondary-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hidden">
        <HamburgerIcon />
      </button>
    </header>
  );
}
