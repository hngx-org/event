import React from "react";
import {Field, ErrorMessage} from "formik";

interface Input {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<Input> = ({name, label, type, placeholder}) => {
  return (
    <div className="w-full">
      <label className="font-medium text-grey-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex">
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete="off-autofill"
          className="w-full p-3 rounded-lg border border-grey-70 placeholder:text-grey-70 outline-none font-medium"
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-700"
      />
    </div>
  );
};

export default Input;
