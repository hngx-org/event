import DashboardHeader from "@/components/Dashboard/Dashboardheader";
import OnboardingLayout from "@/components/Onboarding/index";
import Footer from "@/components/web/footer";
import React from "react";

const Onboarding = () => {
  return (
    <>
      <DashboardHeader />
      <OnboardingLayout />
      <Footer />
    </>
  );
};

export default Onboarding;
