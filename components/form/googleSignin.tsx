import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import Cookies from "js-cookie";
import {GoogleIcon} from "@/public/assets/icons/socialIcons";

export default function GoogleSignin() {
  const router = useRouter();
  const clientId =
    "69712066400-eu3ddnj8njs960htlnbh9hlgrvfg6ke9.apps.googleusercontent.com";
  //   const redirectUri = "http://localhost:3000";
  const redirectUri = "https://event-tan-iota.vercel.app/auth/login";

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
        toast.success("Google sign-in successful");
        router.push("/timeline");
      } else {
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const authorizationCode = queryParams.get("code");
    if (authorizationCode) {
      authorizeUser(authorizationCode);
    }
  }, []);

  return (
    <button
      onClick={signInWithGoogle}
      className="mt-4 mb-4 flex gap-4 items-center justify-center border rounded-lg border-secondary-300 w-full py-3"
    >
      <span>
        <GoogleIcon />
      </span>
      <span className="font-bold text-secondary-300">Sign in with Google</span>
    </button>
  );
}
