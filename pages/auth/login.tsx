import GoogleSignin from "@/components/form/googleSignin";
import LoginForm from "@/components/form/loginForm";
import AuthenticationLayout from "@/components/layout/authenticationLayout";
import Link from "next/link";
import React from "react";

export default function Login() {
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
