import Header from "@/components/web/header";
import { useRouter } from 'next/router';
import { CSSProperties } from "react"; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {toast} from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function ForgotPassword(){
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  const initialValues = { 
    email: '' ,
  }


  const onSubmit = async (values: typeof initialValues, { setSubmitting }: any) => {
    try {
      setSubmitting(true);

      const formData = {
        email: values.email,
        resetUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      };
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        if (errorResponse.error === "User not found") {
          toast.error("Email address not found. Provide a valid email address.");
        } 
      } else {
        toast.success("An email has been sent. Please click the link!");
        values.email = "";
        // setTimeout(() => {
        //   router.push("/auth/reset-password");
        // }, 3000);
      }
    } catch (error: any) {
      toast.error("Error resolving password change.", {
        position: "top-right",
      });
      setSubmitting(false);
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }
  

  return (
    <div>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className='mt-6 flex justify-center items-center lg:h-screen'>
        <div className="max-w-[379px] font-sans">
          <div>
            <h1 className="font-montserrat text-[40px] font-bold text-grey-500">Forgot Password</h1>
            <p className='text-[#666] text-base font-medium'>Please enter the email address you signed up with.</p>
          </div>
          <div className="mt-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className='flex flex-col gap-2 font-base font-medium'>
                    <label className='text-grey-500' htmlFor="email">Email Address*</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder='Enter email address'
                      className="p-3 placeholder:text-grey-50 border border-grey-70 rounded-lg"
                    />
                    <ErrorMessage name="email" component="div" className="text-[red] text-sm" />
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
    </div>
  )
}