import React from "react";

export const OrderingIconUp = ({
  height = "6px",
  width = "15px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.99961 0L0.412109 4.44375H9.58711L4.99961 0Z" fill={color} />
  </svg>
);