import AccountLayout from "@/components/layout/accountLayout";
import ProfileIcon from "@/public/assets/icons/profileIcon";
import Input from "@/components/form/input";
import DisabledEmailInput from "@/components/form/disabledEmailInput";
import { CSSProperties, useState, useRef } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import DropdownInput from "@/components/form/dropdown";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import service from "../../lib/auth/updateProfile";

const override: CSSProperties = {
  borderWidth: "3px",
};

export default function Profile() {
  const [image, setImage] = useState<any>("");
  const [file, setFile] = useState("");
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  const initialValues = {
    prefix: "Mrs",
    fullName: "",
    phoneNumber: "",
    avatar: null,
  };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    if (image) {
      try {
        const formData = new FormData();

        formData.append("prefix", values.prefix);
        formData.append("fullName", values.fullName);
        formData.append("phoneNumber", values.phoneNumber);
        image
          ? formData.append("avatar", image)
          : formData.append("avatar", "");
        const response = await service.updateProfile(formData);
        if (response.success) {
          toast.success("Your profile has been updated");
        }
      } catch (error: any) {
        if (error && error.message) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong!");
        }
        setSubmitting(false);
      }
    } else {
      toast.error("Select an image!");
    }
  };

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
    const uploadedFile = e.target.files[0];

    if (uploadedFile) {
      //To convert to MB
      const fileSize = uploadedFile.size / 1024 / 1024;
      if (fileSize > 5) {
        e.target.value = null;
      } else {
        setImage(uploadedFile);
        setFile(URL.createObjectURL(uploadedFile));
      }
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
                src={file}
                alt="Uploaded Image"
              />
            ) : (
              <>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleFileUpload}
                  className="hidden"
                  ref={fileInputRef}
                />
                <label
                  onClick={handleUploadPhoto}
                  className="p-6 w-[240px] h-[240px] flex flex-col justify-center items-center font-sans border-[1.5px] border-grey-300 rounded-full border-dashed cursor-pointer"
                >
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
                className="hidden"
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
            {(formik) => (
              <Form>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <DropdownInput label="Prefix" name="prefix" />
                  <Input
                    name="fullName"
                    label="Full name*"
                    type="name"
                    placeholder="Full name"
                  />
                  <Input
                    name="phoneNumber"
                    label="Phone*"
                    type="text"
                    placeholder="+2348012345678"
                  />
                  {/* <PhoneInput /> */}
                  <DisabledEmailInput
                    label="Email Address*"
                    value={user?.email}
                  />
                </div>
                <div className="flex justify-center gap-6 mt-10">
                  <button
                    type="submit"
                    className="py-[13px] px-[23px] border border-secondary-300 text-secondary-300 hover:bg-secondary-300 hover:text-white rounded-lg font-bold transition-all duration-300 ease-in-out"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="py-[13px] px-[23px] bg-secondary-300 text-white rounded-lg font-bold"
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
            )}
          </Formik>
        </div>
      </div>
    </AccountLayout>
  );
}
