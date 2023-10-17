import Header from "@/components/web/header";
import { useRouter } from "next/router";
import { useState } from "react";

const OpenEyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M3.77489 15.2957C2.92496 14.1915 2.5 13.6394 2.5 12C2.5 10.3606 2.92496 9.80853 3.77489 8.70433C5.47196 6.49956 8.31811 4 12.5 4C16.6819 4 19.528 6.49956 21.2251 8.70433C22.075 9.80853 22.5 10.3606 22.5 12C22.5 13.6394 22.075 14.1915 21.2251 15.2957C19.528 17.5004 16.6819 20 12.5 20C8.31811 20 5.47196 17.5004 3.77489 15.2957Z"
        stroke="#666666"
        stroke-width="1.5"
      />
      <path
        d="M15.5 12C15.5 13.6569 14.1569 15 12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12Z"
        stroke="#666666"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default function ResetPassword() {
  const [visibleNewPassword, setVisibleNewPassword] = useState<boolean>(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="flex justify-center items-center mt-6 lg:mt-0 lg:h-screen">
        <div className="max-w-[379px] font-sans">
          <div>
            <h1 className="font-montserrat text-[40px] font-bold text-grey-500">
              Reset Password
            </h1>
            <p className="text-[#666] text-base font-medium">
              Please enter the email address you signed up with.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-2 font-base font-medium">
              <label className="text-grey-500" htmlFor="new-password">
                Enter a new password
              </label>
              <div className="w-full relative">
                <span onClick={() => setVisibleNewPassword(!visibleNewPassword)} className="pr-2 absolute top-3 right-0 cursor-pointer"><OpenEyeIcon /></span>
                <input
                  type={visibleNewPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 w-full text-grey-50 border border-grey-70 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 font-base font-medium mt-5">
              <label className="text-grey-500" htmlFor="confirm-password">
                Confirm password
              </label>
              <div className="w-full relative">
                <span onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)} className="pr-2 absolute top-3 right-0 cursor-pointer"><OpenEyeIcon /></span>
                <input
                  type={visibleConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 w-full text-grey-50 border border-grey-70 rounded-lg"
                  required
                />
              </div>
            </div>
            <button
              onClick={handleClick}
              className="py-[18px] mt-6 text-[#FEFEFE] font-bold bg-secondary-300 rounded-lg text-center w-full"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
