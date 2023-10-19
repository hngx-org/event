import React, { useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import AccountSummary from "@/components/accountSummary";
import EventLayout from "@/components/layout/eventLayout";
import arrow_back_ios from "@/public/assets/images/arrow_back_ios.svg";
import banner from "@/public/assets/images/banner.svg";
import { initialValues } from "@/@types";

interface paymentOptions {
  method: string;
  methodValue: string;
}

const Register = () => {
  const paymentOptions: paymentOptions[] = [
    { method: "Card", methodValue: "Pay with Card or Bank" },
    { method: "Transfer", methodValue: "Pay with Bank Transfer" },
    { method: "Chipper Cash", methodValue: "Pay with Chipper Cash" },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    gender: Yup.string().required("Gender is required"),
    howDidYouHear: Yup.string().required(
      "Please select how you heard about the event"
    ),
    paymentMethod: Yup.string().required(
      "At least one payment method must be selected"
    ),
  });

  const handleSubmit = (values: initialValues) => {
    console.log(values);
  };

  return (
    <EventLayout>
      <div className="w-full grid gap-4">
        <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
          <div className="grid gap-4 mt-5">
            <div className="gap-[16px] flex items-center">
              <Image
                src={arrow_back_ios}
                alt="arrow"
                className="w-[24px] h-[24px]"
              />
              <h3 className="font-montserrat text-xl md:text-[24px] text-gray-400 font-normal">
                Tech Innovators Summit
                <span className="font-bold text-gray-500"> Checkout</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-[458px]">
          <Image
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              gender: "",
              howDidYouHear: "",
              paymentMethod: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form>
                <div className="w-full gap-6 grid md:grid-cols-[1fr_0.5fr] grid-cols-1 my-10">
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="firstName"
                        className="font-medium text-gray-500"
                      >
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="User's Name"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      />
                      {formikProps.touched.firstName &&
                        formikProps.errors.firstName && (
                          <div className="text-red-500">
                            {formikProps.errors.firstName}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="lastName"
                        className="font-medium text-gray-500"
                      >
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="User's Name"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      />
                      {formikProps.touched.lastName &&
                        formikProps.errors.lastName && (
                          <div className="text-red-500">
                            {formikProps.errors.lastName}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="email"
                        className="font-medium text-gray-500"
                      >
                        Email Address
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="user@mail.com"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      />
                      {formikProps.touched.email &&
                        formikProps.errors.email && (
                          <div className="text-red-500">
                            {formikProps.errors.email}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="phoneNumber"
                        className="font-medium text-gray-500"
                      >
                        Phone Number
                      </label>
                      <Field
                        name="phoneNumber"
                        type="text"
                        placeholder="User's Phone Number"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      />
                      {formikProps.touched.phoneNumber &&
                        formikProps.errors.phoneNumber && (
                          <div className="text-red-500">
                            {formikProps.errors.phoneNumber}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="gender"
                        className="font-medium text-gray-500"
                      >
                        Gender
                      </label>
                      <Field
                        name="gender"
                        as="select"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefernottosay">
                          Prefer Not To Say
                        </option>
                      </Field>
                      {formikProps.touched.gender &&
                        formikProps.errors.gender && (
                          <div className="text-red-500">
                            {formikProps.errors.gender}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-2">
                      <label
                        htmlFor="how"
                        className="font-medium text-gray-500"
                      >
                        How did you hear about this event?
                      </label>
                      <Field
                        name="howDidYouHear"
                        as="select"
                        className="w-full p-3 rounded-lg border-none outline outline-1 outline-gray-400"
                      >
                        <option value="">Select an option</option>
                        <option value="friend">Friend</option>
                        <option value="family">Family</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                      </Field>
                      {formikProps.touched.howDidYouHear &&
                        formikProps.errors.howDidYouHear && (
                          <div className="text-red-500">
                            {formikProps.errors.howDidYouHear}
                          </div>
                        )}
                    </div>
                    <div className="w-full grid gap-6">
                      <h3 className="text-2xl text-gray-500">
                        Payment Details
                      </h3>
                      {paymentOptions.map((method) => (
                        <div key={method.method}>
                          <label className="flex gap-3 text-lg text-gray-400">
                            <Field
                              type="radio"
                              name="paymentMethod"
                              value={method.method}
                            />
                            {method.methodValue}
                          </label>
                        </div>
                      ))}
                      {formikProps.touched.paymentMethod &&
                        formikProps.errors.paymentMethod && (
                          <div className="text-red-500">
                            {formikProps.errors.paymentMethod}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="w-full">
                    <AccountSummary
                      handleSubmit={formikProps.handleSubmit}
                      formValues={formikProps.values}
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="mt-7 px-8 sm:px-12 md:px-16 lg:px-20">
          <div className="w-full">
            <p className="text-gray-500">
              By selecting Register, I agree to the{" "}
              <span className="text-secondary-300 underline">
                EventWave Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </EventLayout>
  );
};

export default Register;
