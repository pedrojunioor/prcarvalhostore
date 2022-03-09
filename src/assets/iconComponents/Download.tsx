import React from "react";

export const Download = ({
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
      d="M13 8.39005L12.25 7.63005L8.52 11.31V0.300049H7.45V11.3L3.82 7.63005L3.07 8.39005L8 13.33L13 8.39005Z"
      fill={color}
    />
    <path d="M0 14.64H16V15.7H0V14.64Z" fill={color} />
  </svg>
);
