import React from "react";

export const Increase = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.25 8.085H9.915V0.75H8.085V8.085H0.75V9.915H8.085V17.25H9.915V9.915H17.25V8.085Z"
      fill={color}
    />
  </svg>
);
