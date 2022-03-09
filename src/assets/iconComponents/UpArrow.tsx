import React from "react";

export const UpArrow = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0.620117L0 8.62012L0.76 9.38012L8 2.14012L15.24 9.38012L16 8.62012L8 0.620117Z"
      fill={color}
    />
  </svg>
);
