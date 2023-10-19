import AccountLayout from "@/components/layout/accountLayout";
import PreferenceForm from "@/components/settings/preference";
import React from "react";

export default function Email() {
  return (
    <AccountLayout title="Email preference">
      <h5 className="text-xl font-bold font-montserrat text-grey-500 mb-6">
        As organizer
      </h5>
      <h6 className="font-bold text-grey-500 mb-6">Email me</h6>

      <PreferenceForm />
    </AccountLayout>
  );
}
