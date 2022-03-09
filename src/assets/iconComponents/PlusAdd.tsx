import React from "react";

export const PlusAdd = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.0997 7.529H9.76272V0H7.92873V7.529H0.591797V9.411H7.92873V16.94H9.76272V9.411H17.0997V7.529Z"
      fill={color}
    />
  </svg>
);
