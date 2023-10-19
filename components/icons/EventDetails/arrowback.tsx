import React from "react";

function ArrowBackIcon() {
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
        d="M8.896 11.997l6.834-6.523a.79.79 0 00.263-.608.838.838 0 00-.277-.608.892.892 0 00-.637-.258.892.892 0 00-.637.258l-6.959 6.63A1.536 1.536 0 007 11.997a1.536 1.536 0 00.483 1.108l6.96 6.642c.18.172.394.256.643.252a.926.926 0 00.644-.265.814.814 0 00.27-.608.814.814 0 00-.27-.608l-6.834-6.522z"
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
          transform="matrix(1 0 0 -1 0 24)"
        ></path>
      </mask>
    </svg>
  );
}

export default ArrowBackIcon;