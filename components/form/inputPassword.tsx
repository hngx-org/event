import React, {useState} from "react";
import {Field, ErrorMessage} from "formik";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/outline";

interface Input {
  name: string;
  label: string;
  placeholder: string;
}

const InputPassword: React.FC<Input> = ({name, label, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full">
      <label className="font-medium text-grey-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex relative">
        <Field
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          autoComplete="off-autofill"
          className="w-full p-3 rounded-lg border border-grey-70 placeholder:text-grey-70 outline-none font-medium"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute bottom-3 right-2 "
        >
          {showPassword ? (
            <EyeSlashIcon className="w-6 z-10 text-grey-300" />
          ) : (
            <EyeIcon className="w-6 z-10 text-grey-300" />
          )}
        </button>
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-700"
      />
    </div>
  );
};

export default InputPassword;
