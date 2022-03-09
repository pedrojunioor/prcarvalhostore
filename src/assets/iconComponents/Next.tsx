import React from "react";

export const Next = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.38012 0L0.620117 0.76L7.86012 8L0.620117 15.24L1.38012 16L9.38012 8L1.38012 0Z"
      fill={color}
    />
  </svg>
);
