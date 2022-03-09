import React from "react";

export const Watch = ({
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
      d="M8 1.07C11.8275 1.07 14.93 4.1725 14.93 8C14.93 11.8275 11.8275 14.93 8 14.93C4.1725 14.93 1.07 11.8275 1.07 8C1.0755 4.175 4.175 1.0755 7.9995 1.07H8ZM8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM12.36 9.09H7.45V2.22H8.52V8H12.36V9.09Z"
      fill={color}
    />
  </svg>
);
