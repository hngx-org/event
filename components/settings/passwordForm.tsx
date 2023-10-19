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
import FAModal from "./2fa";
import Disable2FAModal from "./disable2FA";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  password: "",
  newPassword: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  newPassword: yup.string().required("Password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), ""], "Password must match")
    .required("Password is required"),
});

export default function PasswordForm() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const toggleCheckbox = () => {
    setToggle((prevState) => !prevState);
  };
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
                {/* Password */}
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
                    name="confirmNewPassword"
                    label="Confirm new Password"
                    placeholder="Password"
                  />
                </div>

                {/* 2FA */}
                <div className="mt-10">
                  <div className="flex gap-4 items-center mb-3">
                    {/* checkbox */}
                    <label
                      className={`relative cursor-pointer  w-10 h-6 border-2    rounded-2xl ${
                        toggle
                          ? "bg-grey-50 border-grey-50"
                          : "bg-secondary-300 border-secondary-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        id="toggle"
                        checked={toggle}
                        className="hidden"
                      />
                      <span
                        className={`w-5 h-5 rounded-full absolute  top-0 z-10 transition-all duration-300 ease-in-out bg-white ${
                          toggle ? "left-0 " : "right-0"
                        }`}
                      ></span>
                    </label>
                    <h5 className="text-xl font-bold font-montserrat text-grey-500 ">
                      Two factor authentication (2FA)
                    </h5>
                    {toggle ? (
                      <FAModal toggle={toggle} toggleFn={toggleCheckbox} />
                    ) : (
                      <Disable2FAModal
                        toggle={toggle}
                        toggleFn={toggleCheckbox}
                      />
                    )}
                  </div>

                  <p className="text-grey-200 mb-12">
                    Setting up a 2FA adds an extra layer of security to protect
                    your account.
                  </p>
                  {/* <div className=" mt-8  flex gap-4 items-center">
                    <p className="text-xl text-grey-400">
                      Enable Two-Factor authentication (2FA)
                    </p>
                  </div> */}
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
