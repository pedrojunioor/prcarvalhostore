import React from "react";

export const dds_chevronUp = ({
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
      d="M8 12.38L16 4.38L15.24 3.62L8 10.86L0.760001 3.62L6.99382e-07 4.38L8 12.38Z"
      fill={color}
    />
  </svg>
);
