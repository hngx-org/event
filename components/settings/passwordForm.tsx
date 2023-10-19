"use client";
import React, {CSSProperties, useState} from "react";
import {Formik, Form} from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
import service from "@/lib/auth/signInWithCredentials";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import InputPassword from "../form/inputPassword";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  password: "",
  newPassword: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
});

export default function PasswordForm() {
  const router = useRouter();
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    // try {
    //   const response = await service.signin(values);
    //   if (response.statusCode === 200) {
    //     Cookies.set("token", response.token);
    //     Cookies.set("user", JSON.stringify(response.user));
    //     toast.success("Log in successful");
    //     setTimeout(() => {
    //       router.push("/timeline");
    //     }, 1000);
    //   }
    // } catch (error: any) {
    //   if (error && error.message) {
    //     toast.error(error.message);
    //   } else {
    //     toast.error("Something went wrong!");
    //   }
    //   setSubmitting(false);
    // }
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
              <div className="">
                <div className="grid grid-cols-1 gap-5 w-[380px]">
                  {" "}
                  {/* Password */}
                  <InputPassword
                    name="password"
                    label="Enter current password"
                    placeholder="Password"
                  />
                  <InputPassword
                    name="newPassword"
                    label="Enter new password"
                    placeholder="Password"
                  />
                  <InputPassword
                    name="password"
                    label="Confirm new Password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-6">
                <button
                  type="submit"
                  className="py-[13px] px-[23px] border border-secondary-300 text-secondary-300 hover:bg-secondary-300 hover:text-white rounded-lg font-bold transition-all duration-300 ease-in-out"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="py-[13px] px-[23px]   bg-secondary-300 text-white rounded-lg font-bold"
                >
                  {formik.isSubmitting ? (
                    <ClipLoader
                      color="white"
                      size={23}
                      cssOverride={override}
                    />
                  ) : (
                    "Save changes"
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
