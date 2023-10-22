import { useRouter } from "next/router";
import { CSSProperties } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1.5 1.5L22.8627 22.5626"
        stroke="#51526C"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.8633 1.5L1.50059 22.5626"
        stroke="#51526C"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

type ConfirmPasswordProp = {
  onClose: ()=>{} | void,
  setCloseAccountModalOpen: (value: boolean)=>{} | void
}

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function ConfirmPasswordModal({ onClose, setCloseAccountModalOpen }: (ConfirmPasswordProp)) {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    password: "",
  };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    setTimeout(()=>{
      setCloseAccountModalOpen(true);
      onClose()
    }, 1000)
  };

  return (
    <>
      <div className="flex justify-center items-center w-full fixed top-0 left-0 bg-[rgba(59,59,59,0.65)] h-screen">
        <div className="mx-4 p-6 lg:px-14 lg:py-12 max-w-[582px] rounded-2xl bg-[#FEFEFE] font-sans">
          <div>
            <div className="flex items-center relative">
              <h1 className="font-montserrat text-[40px] font-bold text-grey-500">
                Confirm Password
              </h1>
              <span className="absolute -top-2 -right-2 cursor-pointer" onClick={() => onClose()}><CloseIcon /></span>
            </div>
            <p className="text-[#666] text-base font-medium">
              To initiate the account closure process, please enter your
              password for confirmation.
            </p>
          </div>
          <div className="mt-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col gap-2 font-base font-medium">
                    <label className="text-grey-500" htmlFor="password">
                      Enter password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter email address"
                      className="p-3 placeholder:text-grey-50 border border-grey-70 rounded-lg"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-700 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-[18px] mt-6 text-white font-bold bg-secondary-300 rounded-lg text-center w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <ClipLoader
                        color="white"
                        size={23}
                        cssOverride={override}
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
