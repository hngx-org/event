import Header from "@/components/web/header";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputPassword from "@/components/form/inputPassword";
import {toast} from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function ResetPassword() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      if (!this.resolve(Yup.ref('newPassword')) || this.resolve(Yup.ref('newPassword')) === null) {
        return true; 
      }
      return value === this.resolve(Yup.ref('newPassword'));
    })
    .required('Confirm Password is required')
  });

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {

    try {
      setSubmitting(true);

      const { newPassword, confirmPassword } = values;
      const { token } = router.query;

      if (newPassword === confirmPassword) {
        
        const data = {
          resetToken: token,
          password: newPassword,
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          toast.success("Password reset successful!");
          setTimeout(() => {
            router.push("/auth/reset-password-successful");
          }, 1000);
        } else {
          toast.error("Password reset failed.");
        }
      } 
    } catch (error) {
      toast.error("Error resetting password.", {
        position: "top-right",
      });
      setSubmitting(false);
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="flex justify-center items-center mt-6 lg:mt-0 lg:h-screen">
        <div className="max-w-[379px] font-sans">
          <div>
            <h1 className="font-montserrat text-[40px] font-bold text-grey-500">
              Reset Password
            </h1>
            <p className="text-[#666] text-base font-medium">
              Please enter the email address you signed up with.
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
                    <InputPassword
                      name="newPassword"
                      label="Enter a new password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-base font-medium mt-5">
                    <InputPassword
                      name="confirmPassword"
                      label="Password"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-[18px] mt-6 text-[#FEFEFE] font-bold bg-secondary-300 rounded-lg text-center w-full"
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
    </div>
  );
}
