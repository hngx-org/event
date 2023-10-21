import OnboardingLayout from "@/components/Onboarding/index";
import EventHeader from "@/components/eventHeader";
import Footer from "@/components/web/footer";
import AuthProvider from "@/provider/authProvider";
import React from "react";

const Onboarding = () => {
  return (
    <AuthProvider>
      <EventHeader />
      <OnboardingLayout />
      <Footer />
    </AuthProvider>
  );
};

export default Onboarding;
