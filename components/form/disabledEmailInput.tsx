import React from "react";
import { Field } from "formik";

interface Input {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const DisabledEmailInput: React.FC<Input> = ({name, label, type, placeholder}) => {
  return (
    <div className="w-[380px]">
      <label className="font-medium text-grey-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex">
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete="off-autofill"
          disabled="true"
          className="w-full p-3 mb-2 rounded-lg border border-grey-30 bg-grey-30 placeholder:text-grey-70 outline-none font-medium"
          placeholder={placeholder}
        />
      </div>
      <p className="text-grey-90 font-medium">Email address cannot be changed. Contact <span className="text-secondary-300 font-bold">support</span></p>
    </div>
  );
};

export default DisabledEmailInput;
