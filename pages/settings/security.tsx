import AccountLayout from "@/components/layout/accountLayout";
import PasswordForm from "@/components/settings/passwordForm";
import React from "react";

export default function Security() {
  return (
    <AccountLayout title="Password">
      <h5 className="text-xl font-bold font-montserrat text-grey-500 mb-6">
        Change your password
      </h5>
      {/* Change password form */}
      <PasswordForm />
    </AccountLayout>
  );
}
