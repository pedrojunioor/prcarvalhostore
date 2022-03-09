import React from "react";

export const K = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.52734 8.85742L2.91602 10.5664V15H0.445312V0.78125H2.91602V7.45117L4.2832 5.76172L8.44336 0.78125H11.4316L6.14844 7.08008L11.7344 15H8.80469L4.52734 8.85742Z"
      fill={color}
    />
  </svg>
);
