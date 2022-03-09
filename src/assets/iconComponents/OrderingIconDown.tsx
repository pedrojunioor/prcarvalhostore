import React from "react";

export const OrderingIconDown = ({
  height = "6px",
  width = "15px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 6 10 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.58711 5.55625H0.430859L5.03086 10L9.58711 5.55625Z"
      fill={color}
    />
  </svg>
);