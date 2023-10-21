import React from "react";
import { Field, ErrorMessage } from "formik";

interface Input {
  name: string;
  label: string;
}

const DropdownInput: React.FC<Input> = ({ name, label }) => {
  return (
    <div className="w-full">
      <label className="font-medium text-grey-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex">
        <Field
          as="select"
          name={name}
          className="w-full p-3 rounded-lg border border-grey-70  outline-none font-medium"
        >
          <option value="Mrs">Mrs</option>
          <option value="Mr">Mr</option>
          <option value="Miss">Miss</option>
        </Field>
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-700"
      />
    </div>
  );
};

export default DropdownInput;