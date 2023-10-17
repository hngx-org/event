import React from "react";
import Header from "../web/header";
import Footer from "../web/footer";

export default function WebLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
