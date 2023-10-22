import React from "react";
import Footer from "../web/footer";
import SettingsHeader from "../settings/settingsHeader";
import SideBar from "../settings/sideBar";
import AuthProvider from "@/provider/authProvider";

export default function AccountLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <AuthProvider>
      <div className="w-full">
        <SettingsHeader />
        <div className="w-full border-y border-y-grey-30 flex divide-x">
          <SideBar />
          <div className="flex-grow p-6 lg:py-10 lg:pl-14 lg:pr-20">
            <h4 className="text-2xl font-bold font-montserrat text-grey-500 pb-4 border-b">
              {title}
            </h4>
            <div className="py-8">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
