import Header from '@/components/web/header';
import { useRouter } from 'next/router';
import React from 'react'

const CheckCircleSVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
    >
        <path
            d="M25.6673 12.9267V14C25.6659 16.5158 24.8512 18.9638 23.3449 20.9788C21.8385 22.9938 19.7211 24.4679 17.3086 25.1812C14.896 25.8945 12.3175 25.8089 9.95753 24.937C7.59761 24.0652 5.58275 22.4538 4.21344 20.3433C2.84413 18.2327 2.19374 15.7361 2.35927 13.2257C2.52481 10.7153 3.49739 8.32572 5.13198 6.41326C6.76656 4.50079 8.97557 3.16795 11.4295 2.61351C13.8835 2.05907 16.451 2.31273 18.749 3.33667M25.6673 4.66667L14.0007 16.345L10.5007 12.845"
            stroke="#30980C"
            strokeWidth={2.33333}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const EmailVerificationSuccess = () => {
    const router = useRouter();
    return (
        <>
            <div className="sm:hidden">
                <Header />
            </div>
            <div className="w-full min-h-[80vh] sm:min-h-screen bg-[#FEFEFE] p-6 sm:p-0 flex items-center justify-center">
                <div className="max-w-[605px] w-full text-center">
                    <h1 className="text-[#3B3B3B] font-montserrat font-bold text-[32px] sm:text-[40px]">
                        Email Verification Successful
                    </h1>
                    <div className="max-w-[398px] mx-auto">
                        <div className="p-6 border-[10px] border-[#E6FCDE] rounded-full w-min bg-[#CCFABD] mx-auto mt-8">
                            <CheckCircleSVG />
                        </div>
                        <p className="text-[#757575] mt-6 text-base font-semibold font-sans">
                            Congratulations! Answer a few questions to customize your event timeline and make it uniquely yours
                        </p>
                        <button onClick={() => router.push(`/timeline`)} className="w-full mt-6 mx-auto p-[18px] text-center text-white bg-[#800000] rounded-lg text-base font-bold active:scale-[0.99] font-sans">
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerificationSuccess
