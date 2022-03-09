import React from "react";

export const Previous = ({
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
      d="M9.38012 0.76L8.62012 0L0.620117 8L8.62012 16L9.38012 15.24L2.14012 8L9.38012 0.76Z"
      fill={color}
    />
  </svg>
);
