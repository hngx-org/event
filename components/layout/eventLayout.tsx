import React, { ReactNode } from "react";
import EventHeader from "../eventHeader";
import Footer from "../web/footer";

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <EventHeader />
      </div>
      {children}
      <Footer />
    </>
  );
}
