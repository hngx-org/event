import Image from "next/image";
import Link from "next/link";
import Logo from "assets/images/logo.png";
import user from "assets/images/user.jpg"
import { HamburgerIcon } from "@/public/assets/icons/mobileIcons";

export default function DashboardHeader() {
    return (
        <header className='fixed top-0 left-0 right-0 bg-white z-10'>
                <div className="max-w-7xl mx-auto flex justify-between p-4 xl:px-0 ">
                    <div className='flex gap-20 items-center'>
                        {/* Logo */}
                        <Link href='/'>
                        <Image
                            src={Logo}
                            alt='logo'
                            width={133}
                            height={16}
                            className='h-auto w-auto'
                        />
                        </Link>                    
                        <form className="w-[380px]">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search for more events" required />
                            </div>
                        </form>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image 
                            src={user}
                            width={40}
                            height={40}
                            alt="user"
                        />
                        <h3 className="text-base font-semibold">Username</h3>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <button className='border-[0.5px] border-secondary-400 w-10 h-10 flex items-center justify-center rounded-xl lg:hidden'>
                    <HamburgerIcon />
                </button>
            </header>
    )
}         