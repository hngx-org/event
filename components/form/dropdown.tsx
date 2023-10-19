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
          <option value="" selected>
            Mrs
          </option>
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

// import { ErrorMessage, FieldInputProps, FormikProps } from "formik";

// interface DropdownProps {
//   field: FieldInputProps<string>;
//   form: FormikProps<{ prefix: string }>;
//   label: string;
//   options: { value: string; label: string }[];
// }

// const Dropdown: React.FC<DropdownProps> = ({
//   field,
//   form,
//   label,
//   options,
//   ...rest
// }) => (
//   <div>
//     <label className="font-medium text-grey-500 mb-2" htmlFor={field.name}>{label}</label>
//     <select {...field} {...rest}>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//     <ErrorMessage
//       name={field.name}
//       component="p"
//       className="text-sm text-red-700"
//     />
//   </div>
// );

// export default Dropdown;

// {/* <Field
//   name="prefix"
//   className="w-full p-3 rounded-lg border border-grey-70 placeholder:text-grey-70 outline-none font-medium"
//   render={({ field }) => (
//     <Dropdown
//       field={field}
//       form={field.form}
//       label="Prefix"
//       options={[
//         { value: "Mrs", label: "Mrs" },
//         { value: "Mr", label: "Mr" },
//         { value: "Miss", label: "Miss" },
//         { value: "Dr", label: "Dr" },
//       ]}
//     />
//   )}
// /> */}
