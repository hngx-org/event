import { useRouter } from "next/router";
import { CSSProperties } from "react";
import { toast } from "react-toastify";
import { CloseIcon } from "./confirmPassword";

type CloseProp = {
  onClose: () => {} | void;
};

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function CloseAccountModal({ onClose }: CloseProp) {
  const router = useRouter();

  const deleteAccount = () => {
    toast.success("Account has been closed successfully!")
    setTimeout(()=>{
      onClose()
    }, 2000)
  }

  return (
    <>
      <div className="flex justify-center items-center w-full fixed top-0 left-0 bg-[rgba(59,59,59,0.65)] h-screen">
        <div className="px-14 py-12 max-w-[672px] rounded-2xl bg-[#FEFEFE] font-sans">
          <div>
            <div className="flex items-center relative">
              <h1 className="font-montserrat text-[40px] font-bold text-grey-500">
                We’re sorry to see you go
              </h1>
              <span
                className="absolute -top-2 -right-2 cursor-pointer"
                onClick={() => onClose()}
              >
                <CloseIcon />
              </span>
            </div>
            <p className="text-[#666] text-base font-medium">
              If you&rsquo;d like to discuss any concerns with our support team, please click <span className="font-bold text-secondary-300">here.</span>{" "}
              Please be aware that account deletion is a permanent action. Once deleted, your account cannot be restored. 
            </p>
          </div>
          <div className="mt-10 flex justify-center gap-6">
            <button
              type="submit"
              onClick={() => onClose()}
              className="p-4 w-[162px] font-bold border bg-secondary-300 text-white rounded-lg text-center"
            >
              Never mind
            </button>
            <button
              type="submit"
              onClick={deleteAccount}
              className="p-4 font-bold border border-secondary-300 text-secondary-300 hover:text-white hover:bg-secondary-300 rounded-lg text-center w-fit"
            >
              Close my account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
