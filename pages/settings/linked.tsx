import AccountLayout from "@/components/layout/accountLayout";
import LinkedAccountsForm from "@/components/settings/linkedForm";
import React from "react";

export default function Security() {
  return (
    <AccountLayout title="Linked accounts">
      <h5 className="text-xl font-bold font-montserrat text-grey-500 mb-6">
        Manage your social logins
      </h5>
      {/* Change password form */}
      <LinkedAccountsForm />
    </AccountLayout>
  );
}