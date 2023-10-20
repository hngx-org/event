import React from "react";

export default function AccountsCheck({
  toggle,
  toggleFn,
}: {
  toggle: boolean;
  toggleFn: any;
}) {
  return (
    <label
      className={`relative cursor-pointer  w-10 h-6 border-2    rounded-2xl ${
        !toggle
          ? "bg-grey-50 border-grey-50"
          : "bg-secondary-300 border-secondary-300"
      }`}
    >
      <input
        type="checkbox"
        id="toggle"
        onChange={toggleFn}
        checked={toggle}
        className="hidden"
      />
      <span
        className={`w-5 h-5 rounded-full absolute  top-0 z-10 transition-all duration-300 ease-in-out bg-white ${
          !toggle ? "left-0 " : "right-0"
        }`}
      ></span>
    </label>
  );
}
