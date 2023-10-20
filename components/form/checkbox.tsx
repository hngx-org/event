import React from "react";
import {Field} from "formik";

interface Input {
  name: string;
  label: string;
}

const CheckboxInput: React.FC<Input> = ({name, label}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-6 h-6">
        <Field
          type="checkbox"
          id={name}
          name={name}
          className="w-6 h-6 border border-grey-40 rounded checked:accent-secondary-300"
        />
      </div>

      <label className="text-grey-400" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
