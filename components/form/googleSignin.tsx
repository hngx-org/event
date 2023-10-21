import React, { useState, useEffect } from "react";
import Image from "next/image";
import Google from "@/public/assets/icon/Google.svg";
import Twitter from "@/public/assets/icon/Twitter.svg";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { GoogleIcon } from "@/public/assets/icons/socialIcons";

export default function GoogleSignin() {
  const router = useRouter();
  const clientId =
    "69712066400-eu3ddnj8njs960htlnbh9hlgrvfg6ke9.apps.googleusercontent.com";
  //   const redirectUri = "http://localhost:3000";
  const redirectUri = "https://event-tan-iota.vercel.app/timeline";

  const signInWithGoogle = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile&access_type=offline`;
    window.location.href = authUrl;
  };

  const authorizeUser = async (authorizationCode: any) => {
    try {
      const callBackURL = "https://wetindeysup-api.onrender.com/api/auth/login";
      const response = await fetch(`${callBackURL}?code=${authorizationCode}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data: any = response.json();
        Cookies.set("token", data.token);
        Cookies.set("user", JSON.stringify(data.user));
        router.push("/timeline");
      } else {
        toast.error("Google sign-in failed");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/timeline");
    } else {
      const queryParams = new URLSearchParams(window.location.search);
      const authorizationCode = queryParams.get("code");
      console.log(authorizationCode);
      if (authorizationCode) {
        authorizeUser(authorizationCode);
      }
    }
  }, []);

  return (
    <button
      onClick={signInWithGoogle}
      className="mt-6 mb-8 flex gap-4 items-center justify-center border rounded-lg border-secondary-300 w-full py-3"
    >
      <span>
        <GoogleIcon />
      </span>
      <span className="font-bold text-secondary-300">Sign in with Google</span>
    </button>
  );
}
