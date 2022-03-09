import React from "react";

export const ArrowTriSolidRight = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.001 0.15008L0 5.00708L10 5.00708L5.001 0.15008Z" fill={color} />
  </svg>
);
