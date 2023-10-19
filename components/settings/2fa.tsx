import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {CSSProperties, Fragment, useState} from "react";
import QRCode from "assets/images/qr_code.png";
import Image from "next/image";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {ClipLoader} from "react-spinners";

const override: CSSProperties = {
  borderWidth: "3px",
};

const initialValues = {
  code: "",
};

const validationSchema = yup.object().shape({
  code: yup.string().required("Password is required"),
});
export default function FAModal({
  toggle,
  toggleFn,
}: {
  toggle: boolean;
  toggleFn: any;
}) {
  let [isOpen, setIsOpen] = useState(false);

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

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-sm font-semibold underline text-secondary-300"
      >
        {toggle ? "Enable" : "Disable"}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-[652px] transform overflow-auto max-h-[80vh] rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between items-center w-full pb-4"
                  >
                    <h3 className="text-[30px] font-montserrat font-bold text-grey-800">
                      Two-Factor Authentication
                    </h3>
                    <button onClick={closeModal}>
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                  </Dialog.Title>

                  <div>
                    <p className="font-semibold text-grey-100 mb-10">
                      Two factor authentication provides a second layer of
                      security on top of your email and password. This is done
                      through using an app that generates a unique pass code
                      when you login
                    </p>

                    {/* Steps */}
                    <p className="font-semibold text-grey-100 ">
                      1. Install a 2FA app on your mobile, e.g Google
                      Authenticator
                    </p>
                    <p className="font-semibold text-grey-100 my-6">
                      2. Open the application and scan this bar code
                    </p>

                    <div className="pl-4 mb-6">
                      {/* QR code */}
                      <Image
                        src={QRCode}
                        alt="QRcode"
                        width={256}
                        height={256}
                      />

                      <p className="font-semibold text-grey-100 my-6">
                        Unable to scan? Enter this code manually
                      </p>

                      <p className="font-semibold text-black">
                        YHUUGHhk6788875426
                      </p>
                    </div>
                    <p className="font-semibold text-grey-100">
                      3. Input the one-time code from the application and click
                      save to complete the setup.
                    </p>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {(formik) => {
                        return (
                          <Form action="" autoComplete="off">
                            <div className="w-[320px] mt-6">
                              <Field
                                type="number"
                                id="code"
                                name="code"
                                autoComplete="off-autofill"
                                className="w-full p-3 rounded-lg border border-grey-70 placeholder:text-grey-70 outline-none font-medium"
                                placeholder=""
                              />
                            </div>
                            <div className="flex justify-center gap-6 mt-6">
                              <button
                                onClick={closeModal}
                                type="submit"
                                className="py-[13px] px-[23px] border border-secondary-300 text-secondary-300 hover:bg-secondary-300 hover:text-white rounded-lg font-bold transition-all duration-300 ease-in-out"
                              >
                                Cancel
                              </button>

                              <button
                                onClick={() => {
                                  closeModal();
                                  toggleFn();
                                }}
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
                                  "Save"
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
    </>
  );
}
