import React from "react";

function ArrowDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#3B3B3B"
        d="M11.997 15.104L5.474 8.27a.79.79 0 00-.608-.263.838.838 0 00-.608.277.892.892 0 00-.258.637c0 .244.086.457.258.637l6.63 6.959a1.536 1.536 0 001.11.483 1.535 1.535 0 001.108-.483l6.642-6.96A.876.876 0 0020 8.915a.926.926 0 00-.265-.644.814.814 0 00-.608-.27.814.814 0 00-.608.27l-6.522 6.834z"
      ></path>
      <mask
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#FEFEFE"
          d="M0 0H24V24H0z"
          transform="matrix(0 -1 -1 0 24 24)"
        ></path>
      </mask>
    </svg>
  );
}

export default ArrowDownIcon;