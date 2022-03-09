import React from "react";

export const FilledArrowIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0.120004L0 7.88L16 7.88L8 0.120004Z" fill={color} />
  </svg>
);
