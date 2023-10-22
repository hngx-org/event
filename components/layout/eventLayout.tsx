import React, {ReactNode} from "react";
import EventHeader from "../eventHeader";
import Footer from "../web/footer";
import AuthProvider from "@/provider/authProvider";

export default function EventLayout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <div className="w-full">
        <EventHeader />
        <div className="w-full"> {children} </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
