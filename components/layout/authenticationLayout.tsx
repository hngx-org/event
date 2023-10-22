import Image from "next/image";
import React from "react";
import AuthImage from "assets/images/authSideImage.png";
import Header from "../web/header";
import Authentication from "@/provider/authentication";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authentication>
      <main className="flex w-full h-screen overflow-hidden">
        <section className="hidden lg:flex lg:w-[45%] h-screen">
          <Image
            src={AuthImage}
            alt="logo"
            width={900}
            height={900}
            className="h-full w-full object-cover object-bottom"
          />
        </section>
        <section className="w-full lg:w-[60%] lg:flex items-center justify-center overflow-y-auto">
          <div className="lg:hidden">
            <Header />
          </div>
          {children}
        </section>
      </main>
    </Authentication>
  );
}
