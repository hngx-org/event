"use client";
import React, {CSSProperties, useState} from "react";
import {Formik, Form} from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
import {toast} from "react-toastify";
import CheckboxInput from "../form/checkbox";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  vigilant: true,
  notified: false,
  loop: false,
  manage: false,
  feedback: false,
  personalized: true,
  reminders: false,
  changes: false,
  promotional: false,
  joined: false,
  special: false,
};

const validationSchema = yup.object().shape({
  vigilant: yup.bool(),
  notified: yup.bool(),
  loop: yup.bool(),
  manage: yup.bool(),
  feedback: yup.bool(),
  personalized: yup.bool(),
  reminders: yup.bool(),
  changes: yup.bool(),
  promotional: yup.bool(),
  joined: yup.bool(),
  special: yup.bool(),
});

export default function PreferenceForm() {
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
              <div className="mb-10">
                <div className="space-y-4">
                  <CheckboxInput
                    label="Stay vigilant with email notifications for password reset requests, security alerts, and account updates."
                    name="vigilant"
                  />
                  <CheckboxInput
                    label="Get notified when attendees register for your events and keep track of your event's popularity"
                    name="notified"
                  />
                  <CheckboxInput
                    label="Stay in the loop about promotional opportunities, sponsorship deals, and marketing tips to help enhance your events."
                    name="loop"
                  />
                  <CheckboxInput
                    label="Manage your account more effectively with email notifications about password reset requests, security alerts, and account updates."
                    name="manage"
                  />
                  <CheckboxInput
                    label="Receive feedback and event satisfaction surveys from attendees to improve your event planning."
                    name="feedback"
                  />
                </div>
                <h5 className="text-xl font-bold font-montserrat text-grey-500 mb-6 mt-10">
                  As Attendee
                </h5>
                <h6 className="font-bold text-grey-500 mb-6">Email me</h6>
                <div className="space-y-4">
                  <CheckboxInput
                    label="Get personalized event recommendations based on your interests, location, and past event attendance."
                    name="personalized"
                  />
                  <CheckboxInput
                    label="Receive email confirmations and timely reminders about ticket purchases for events you've registered for."
                    name="reminders"
                  />
                  <CheckboxInput
                    label="Stay updated on changes to events you're attending, such as schedule updates, location changes, or cancellations."
                    name="changes"
                  />
                  <CheckboxInput
                    label="Opt in to receive promotional emails, special offers, and discounts related to events you might be interested in."
                    name="promotional"
                  />
                  <CheckboxInput
                    label="Set reminders for events you've joined to ensure you receive timely notifications as the event date approaches."
                    name="joined"
                  />
                  <CheckboxInput
                    label="Opt in to receive promotional emails, special offers, and discounts related to events you might be interested in."
                    name="special"
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
