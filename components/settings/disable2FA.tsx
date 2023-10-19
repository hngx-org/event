import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {CSSProperties, Fragment, useState} from "react";
import QRCode from "assets/images/qr_code.png";
import Image from "next/image";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {ClipLoader} from "react-spinners";
import InputPassword from "../form/inputPassword";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  password: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
});
export default function Disable2FAModal({
  toggle,
  toggleFn,
}: {
  toggle: boolean;
  toggleFn: any;
}) {
  let [isPassOpen, setIsPassOpen] = useState(false);
  let [isCompletedOpen, setIsCompletedOpen] = useState(false);

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

  function closePassModal() {
    setIsPassOpen(false);
  }
  function openPassModal() {
    setIsPassOpen(true);
  }
  function closeCompletedModal() {
    setIsCompletedOpen(false);
  }
  function openCompletedModal() {
    setIsCompletedOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openPassModal}
        className="text-sm font-semibold underline text-secondary-300"
      >
        {toggle ? "Enable" : "Disable"}
      </button>

      {/* Confirm Password Modal */}
      <Transition appear show={isPassOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[552px] transform overflow-auto max-h-[80vh] rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between items-center w-full pb-4"
                  >
                    <h3 className="text-[30px] font-montserrat font-bold text-grey-800">
                      Confirm Password
                    </h3>
                    <button onClick={closePassModal}>
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                  </Dialog.Title>

                  <div>
                    <p className="font-semibold text-grey-100 mb-10">
                      To disable Two-Factor Authentication (2FA), please confirm
                      your password.
                    </p>

                    {/* Confirm Password */}
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {(formik) => {
                        return (
                          <Form action="" autoComplete="off">
                            <div className="w-full mt-6">
                              <InputPassword
                                name="password"
                                label="Password"
                                placeholder="Enter Password"
                              />
                            </div>
                            <div className="w-full mt-6">
                              <button
                                onClick={() => {
                                  closePassModal();
                                  openCompletedModal();
                                }}
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="py-[13px] w-full  bg-secondary-300 text-white rounded-lg font-bold"
                              >
                                {formik.isSubmitting ? (
                                  <ClipLoader
                                    color="white"
                                    size={23}
                                    cssOverride={override}
                                  />
                                ) : (
                                  "Submit"
                                )}
                              </button>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* 2Fa disabled modal */}
      <Transition appear show={isCompletedOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[720px] transform overflow-auto max-h-[80vh] rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between items-center w-full pb-4"
                  >
                    <h3 className="text-[26px] font-montserrat font-bold text-grey-800">
                      Two-Factor Authentication (2FA) Disabled
                    </h3>
                    <button onClick={closeCompletedModal}>
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                  </Dialog.Title>

                  <div>
                    <p className="font-semibold text-grey-100 mb-10">
                      Your account&apos;s Two-Factor Authentication has been
                      disabled. While this makes access more convenient, please
                      remember that it&apos;s important to keep your account
                      secure.
                    </p>

                    {/* Steps */}
                    <p className="font-semibold text-grey-100 ">
                      1. Use a strong and unique password.
                    </p>
                    <p className="font-semibold text-grey-100 my-6">
                      2. Avoid sharing your login credentials
                    </p>

                    <p className="font-semibold text-grey-100 mb-6">
                      3. Re-enable 2FA for an extra layer of security.
                    </p>
                    <p className="font-semibold text-grey-100">
                      If you have any concerns or need assistance, feel free to
                      contact our support team. Your account security is our
                      priority.
                    </p>

                    <div className="flex justify-center gap-6 mt-6">
                      <button
                        onClick={() => {
                          closeCompletedModal();
                          toggleFn();
                        }}
                        className="py-[13px] px-[23px]   bg-secondary-300 text-white rounded-lg font-bold"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
