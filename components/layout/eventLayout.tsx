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
      <EventHeader />
      {children}
      <Footer />
    </>
  );
}
