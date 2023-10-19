"use client";
import React, {CSSProperties, useState} from "react";
import {Formik, Form} from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
import {toast} from "react-toastify";
import Instagram from "assets/icons/Instagram.svg";
import {Facebook, XIcon} from "@/public/assets/icons/socialIcons";
import AccountsCheck from "./accountsCheck";
import Image from "next/image";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  facebook: "",
  instagram: "",
  twitter: "",
};

const validationSchema = yup.object().shape({
  facebook: yup.bool(),
  instagram: yup.bool(),
  twitter: yup.bool(),
});

export default function LinkedAccountsForm() {
  const [toggleFacebook, setToggleFacebook] = useState(false);
  const [toggleInsta, setToggleInsta] = useState(false);
  const [toggleX, setToggleX] = useState(false);

  const toggleFacebookCheckbox = () => {
    setToggleFacebook((prevState) => !prevState);
  };
  const toggleInstaCheckbox = () => {
    setToggleInsta((prevState) => !prevState);
  };
  const toggleXCheckbox = () => {
    setToggleX((prevState) => !prevState);
  };
  const onSubmit = async (values: typeof initialValues, setSubmitting: any) => {
    // try {
    //   if (response.success) {
    //     toast.success("Your password has been changed");
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
              <div className="grid grid-cols-2 gap-12">
                {/* Facebook */}
                <div className="flex gap-4 items-center justify-between border rounded-lg border-grey-50 py-10 px-6">
                  <div className="flex items-center gap-4">
                    <Facebook />
                    <p className="font-bold  text-grey-500 ">Facebook</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {toggleFacebook ? (
                      <p className="text-secondary-300 ">Connected</p>
                    ) : (
                      <p className="text-grey-400 ">Not connected</p>
                    )}
                    <AccountsCheck
                      toggle={toggleFacebook}
                      toggleFn={toggleFacebookCheckbox}
                    />
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex gap-4 items-center justify-between border rounded-lg border-grey-50 py-10 px-6">
                  <div className="flex items-center gap-4">
                    <XIcon />
                    <p className="font-bold  text-grey-500 ">X</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {toggleX ? (
                      <p className="text-secondary-300 ">Connected</p>
                    ) : (
                      <p className="text-grey-400 ">Not connected</p>
                    )}
                    <AccountsCheck
                      toggle={toggleX}
                      toggleFn={toggleXCheckbox}
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 items-center justify-between border rounded-lg border-grey-50 py-10 px-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={Instagram}
                      width={24}
                      height={24}
                      alt="Instagram"
                    />
                    <p className="font-bold  text-grey-500 ">Instagram</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {toggleInsta ? (
                      <p className="text-secondary-300 ">Connected</p>
                    ) : (
                      <p className="text-grey-400 ">Not connected</p>
                    )}
                    <AccountsCheck
                      toggle={toggleInsta}
                      toggleFn={toggleInstaCheckbox}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-6 mt-10">
                <button className="py-[13px] px-[23px] border border-secondary-300 text-secondary-300 hover:bg-secondary-300 hover:text-white rounded-lg font-bold transition-all duration-300 ease-in-out">
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
