import GoogleSignin from "@/components/form/googleSignin";
import LoginForm from "@/components/form/loginForm";
import AuthenticationLayout from "@/components/layout/authenticationLayout";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import Link from "next/link";
import React, {useEffect} from "react";
import {toast} from "react-toastify";

export default function Login() {
  const router = useRouter();

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
    <AuthenticationLayout>
      <div className="p-4 w-full lg:w-[380px]">
        <h1 className="text-[32px] lg:text-[40px] font-montserrat font-bold mb-2 text-grey-500">
          Sign In
        </h1>
        <p className="font-medium text-grey-200 mb-4">
          Please enter the correct details
        </p>
        <LoginForm />
        <GoogleSignin />
        <p className="text-center font-medium text-grey-200">
          <span>Already have an account?</span>
          <Link
            className="ml-1 text-secondary-300 font-bold"
            href="/auth/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthenticationLayout>
  );
}
