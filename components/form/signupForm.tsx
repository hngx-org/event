"use client";
import React, {CSSProperties, useState} from "react";
import {Formik, Form} from "formik";
import Input from "./input";
import InputPassword from "./inputPassword";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
import {toast} from "react-toastify";
import service from "@/lib/auth/signup";
import {useRouter} from "next/navigation";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

export default function SignupForm() {
  const router = useRouter();
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    try {
      const response = await service.signup(values);
      if (response.ok) {
        toast.success("User created successfully");
        setTimeout(() => {
          router.push("/auth/signup-successful");
        }, 1000);
      }
    } catch (error: any) {
      if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong!");
      }
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form action="" autoComplete="off">
              <div className="grid grid-cols-1 gap-5">
                {/* Name */}
                <Input
                  name="name"
                  label="Name"
                  type="name"
                  placeholder="Full name"
                />

                {/* Email */}
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                />

                {/* Password */}
                <InputPassword
                  name="password"
                  label="Password"
                  placeholder="password"
                />

                <div className="w-full">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-secondary-300 text-white rounded-lg py-4 font-bold max-h-[52px]"
                  >
                    {formik.isSubmitting ? (
                      <ClipLoader
                        color="white"
                        size={23}
                        cssOverride={override}
                      />
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
