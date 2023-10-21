import AccountLayout from "@/components/layout/accountLayout";
import CloseAccountModal from "@/components/modals/closeAccount";
import ConfirmPasswordModal from "@/components/modals/confirmPassword";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Privacy() {

  const {user} = useAuth();
  const [isConfirmPasswordModalOpen, setConfirmPasswordModalOpen] = useState(false);
  const [isCloseAccountModalOpen, setCloseAccountModalOpen] = useState(false);

  return (
    <AccountLayout title="Privacy settings">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold font-montserrat text-grey-500 text-xl">
          Data management
        </h1>
        <p className="font-sans text-grey-400">
          As an integral part of our ongoing dedication to safeguarding your
          privacy, we&rsquo;ve made it easy for you to obtain your data from
          Eventwave. Once you make a request for your data, a notification will
          be sent to your email address{" "}
          <span className="font-bold">({user?.email})</span> containing a
          link to access the data archive.<br></br>
          <br></br> For a comprehensive understanding of how we handle your
          data, please take a moment to review our{" "}
          <span className="text-secondary-300 font-bold">Privacy Policy.</span>
        </p>
        <button
          type="submit"
          className="p-4 font-bold border border-secondary-300 text-secondary-300 hover:text-white hover:bg-secondary-300 rounded-lg text-center w-fit"
        >
          Request data
        </button>
      </div>
      <div className="mt-20 flex flex-col gap-6">
        <h1 className="font-bold font-montserrat text-grey-500 text-xl">
          Delete my account
        </h1>
        <p className="font-sans text-grey-400">
          When you delete your account, all your data, including event history
          and profile information, will be permanently removed from our
          platform. You will no longer have access to your account, event
          details, or any related information. Please consider your decision
          carefully, as this action is irreversible. If you have concerns or
          need assistance, our <span className="text-secondary-300 font-bold">support</span> team is here to help. Your privacy and
          data security are our priorities.
        </p>
        <button
          type="submit"
          onClick={()=> setConfirmPasswordModalOpen(true)}
          className="p-4 font-bold border border-secondary-300 text-secondary-300 hover:text-white hover:bg-secondary-300 rounded-lg text-center w-fit"
        >
          Delete my account
        </button>
          {
            isConfirmPasswordModalOpen && (
              <ConfirmPasswordModal onClose={() => setConfirmPasswordModalOpen(false)} setCloseAccountModalOpen={()=>setCloseAccountModalOpen(true)}/>
            )
          }{
            isCloseAccountModalOpen && (
              <CloseAccountModal onClose={() => setCloseAccountModalOpen(false)} />
            )
          }

      </div>
    </AccountLayout>
  );
}
