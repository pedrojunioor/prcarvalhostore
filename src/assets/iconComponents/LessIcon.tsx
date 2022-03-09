import React from "react";

export const LessIcon = ({
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
      d="M11.31 0H4.69L0 4.69V11.31L4.69 16H11.31L16 11.31V4.69L11.31 0ZM14.94 10.87L10.87 14.94H5.13L1.06 10.87V5.13L5.13 1.06H10.87L14.94 5.13V10.87Z"
      fill={color}
    />
    <path
      d="M3.21 7.45H12.78V8.52H3.21V7.45Z"
      fill={color}
    />
    
  </svg>
);
