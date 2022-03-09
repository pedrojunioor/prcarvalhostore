import React from "react";

export const DeleteIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.63 15.43H2.03V4.77H0.96V16.5H12.69V4.77H11.63V15.43Z"
      fill={color}
    />
    <path d="M6.29 6.05H7.36V14.5H6.29V6.05Z" fill={color} />
    <path d="M9.28 6.05H10.35V14.5H9.28V6.05Z" fill={color} />
    <path d="M3.31 6.05H4.37V14.5H3.31V6.05Z" fill={color} />
    <path
      d="M9.17 2.5V0.5H4.48V2.5H0V3.59H13.76V2.5H9.17ZM5.55 1.5H8.21V2.5H5.55V1.5Z"
      fill={color}
    />
  </svg>
);
