import AccountLayout from "@/components/layout/accountLayout";
import ProfileIcon from "@/public/assets/icons/profileIcon";
import Input from "@/components/form/input";
import DisabledEmailInput from "@/components/form/disabledEmailInput";
import { useRouter } from "next/router";
import { CSSProperties, useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
//import Dropdown from "@/components/form/dropdown";
import DropdownInput from "@/components/form/dropdown";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    countryCode: Yup.string().required("Country code is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    image: Yup.mixed().test(
      "fileSize",
      "Image size should be less than 1MB",
      (value) => {
        if (value instanceof File) {
          return value.size <= 1024 * 1024;
        }
        return true;
      }
    ),
  });

  const initialValues = {
    prefix: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    image: null,
  };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {};

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    // Check if the dropped file is an image (e.g., check the file type)
    if (file.type.startsWith("image/")) {
      // Use a FileReader to read and display the dropped image
      const reader = new FileReader();
      reader.onload = () => {
        const imageSrc = reader.result;
        setImage(imageSrc as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleUploadPhoto = () => {
    fileInputRef?.current?.click();
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const imageSrc = event.target.result;
        setImage(imageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setImage(null); 
  };

  return (
    <AccountLayout title="Profile information">
      <div className="flex flex-col gap-8 font-sans">
        <h1 className="font-bold font-montserrat text-xl text-grey-500">
          Profile photo
        </h1>

        {/* Profile Photo */}
        <div className="flex items-center gap-20">
          <div className="" onDrop={handleDrop} onDragOver={handleDragOver}>
            {image ? (
              <Image
                className="object-cover object-center rounded-full overflow-hidden"
                width={240}
                height={240}
                src={image}
                alt="Uploaded Image"
              />
            ) : (
              <>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <label onClick={handleUploadPhoto} className="p-6 w-[240px] h-[240px] flex flex-col justify-center items-center font-sans border-[1.5px] border-grey-300 rounded-full border-dashed cursor-pointer">
                  <ProfileIcon />
                  <p className="mt-4 mb-1 text-secondary-300 font-semibold">
                    Click to upload a photo
                  </p>
                  <div className="text-grey-100 text-center">
                    <p>or drag and drop</p>
                    <p>JPG or PNG </p>
                  </div>
                </label>
              </>
            )}
          </div>
          {image && (
            <div className="flex gap-6">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
              <label
                className="p-4 font-bold bg-secondary-300 text-white rounded-lg text-center cursor-pointer"
                onClick={handleUploadPhoto}
              >
                Upload new avatar
              </label>
              <button
                type="button"
                onClick={handleRemoveAvatar}
                className="p-4 font-bold border border-secondary-300 text-secondary-300 hover:text-white hover:bg-secondary-300 rounded-lg text-center"
              >
                Remove avatar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-[758px] mt-20">
        <h1 className="text-grey-500 text-xl font-bold font-montserrat">
          Contact Information
        </h1>
        <div className="mt-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <DropdownInput label="Prefix" name="prefix" />
                  <div className="invisible"></div>
                  <Input
                    name="firstName"
                    label="First name*"
                    type="name"
                    placeholder="First name"
                  />
                  <Input
                    name="lastName"
                    label="Last name*"
                    type="name"
                    placeholder="Last name"
                  />
                  <PhoneInput />
                  <DisabledEmailInput
                    name="email"
                    label="Email Address*"
                    type="disabled"
                    placeholder="Email Address"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="mt-20 flex justify-center w-3/5 gap-6">
        <button
          type="submit"
          className="p-4 font-bold border border-secondary-300 text-secondary-300 hover:text-white hover:bg-secondary-300 rounded-lg text-center"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="p-4 font-bold bg-secondary-300 text-white rounded-lg text-center"
        >
          Save changes
        </button>
      </div>
    </AccountLayout>
  );
}
