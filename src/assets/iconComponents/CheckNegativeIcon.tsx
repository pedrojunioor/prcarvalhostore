import React from "react";

export const CheckNegativeIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0.82L15.18 0L8 7.2L0.82 0.05L0 0.87L7.15 8L0.05 15.13L0.87 16L8 8.85L15.13 16L15.95 15.18L8.8 8L16 0.82Z"
      fill={color}
    />
  </svg>
);
