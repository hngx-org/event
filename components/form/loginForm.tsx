"use client";
import React, {CSSProperties, useState} from "react";
import {Formik, Form} from "formik";
import Input from "./input";
import InputPassword from "./inputPassword";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
// import {toast} from "react-toastify";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginForm() {
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    console.log(values);
    // try {
    // } catch (error: any) {
    //   if (error && error.response) {
    //     toast.error(error.response.data.message, {
    //       position: "top-right",
    //     });
    //   } else {
    //     toast.error("Something went wrong!", {
    //       position: "top-right",
    //     });
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
              <div className="grid grid-cols-1 gap-5">
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
                  placeholder="Enter your password"
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
                      "Sign in"
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
