"use client";
import {useEffect, useState} from "react";
import {
  AccountIcon,
  ActiveAccountIcon,
  ActiveEmailIcon,
  ActiveLinkIcon,
  ActivePrivacyIcon,
  ActiveProfileIcon,
  EmailIcon,
  LinkIcon,
  PrivacyIcon,
  ProfileIcon,
} from "@/public/assets/icons/settingsIcon";
import {usePathname} from "next/navigation";
import Link from "next/link";

const links = [
  {
    href: "/settings",
    name: "Profile information",
    icon: ProfileIcon,
    activeIcon: ActiveProfileIcon,
  },
  {
    href: "/settings/security",
    name: "Account security",
    icon: AccountIcon,
    activeIcon: ActiveAccountIcon,
  },
  {
    href: "/settings/email",
    name: "Email preferences",
    icon: EmailIcon,
    activeIcon: ActiveEmailIcon,
  },
  {
    href: "/settings/linked",
    name: "Linked accounts",
    icon: LinkIcon,
    activeIcon: ActiveLinkIcon,
  },
  {
    href: "/settings/privacy",
    name: "Privacy settings",
    icon: PrivacyIcon,
    activeIcon: ActivePrivacyIcon,
  },
];

const NavLink = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-4 w-full">
      <ul>
        {links.map((link) => {
          let isActive =
            pathname.startsWith(link.href) && pathname == link.href;

          //   if (link.href == "/reports/transactions") {
          //     isActive = pathname.startsWith("/reports");
          //   }
          const Icon = link.icon;
          const ActiveIcon = link.activeIcon;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  !isActive
                    ? "flex gap-3 items-center  font-medium px-4 py-3"
                    : "flex gap-3 items-center  font-medium px-[14px] py-3 border-l-2 border-l-secondary-300 text-secondary-300"
                }
              >
                {isActive ? <ActiveIcon /> : <Icon />}

                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLink;
