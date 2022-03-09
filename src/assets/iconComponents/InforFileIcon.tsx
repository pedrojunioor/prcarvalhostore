import React from "react";

export const InforFileIcon = ({
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
      d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8 14.93C6.62938 14.93 5.28953 14.5236 4.1499 13.7621C3.01027 13.0006 2.12203 11.9183 1.59752 10.652C1.073 9.3857 0.935766 7.99231 1.20316 6.64802C1.47056 5.30374 2.13058 4.06893 3.09975 3.09975C4.06893 2.13057 5.30374 1.47055 6.64803 1.20316C7.99232 0.935762 9.38571 1.073 10.652 1.59751C11.9183 2.12203 13.0006 3.01027 13.7621 4.1499C14.5236 5.28953 14.93 6.62938 14.93 8C14.9274 9.83714 14.1964 11.5983 12.8973 12.8973C11.5983 14.1964 9.83714 14.9274 8 14.93Z"
      fill={color}
    />
    <path d="M7.36 3.36H8.64V4.64H7.36V3.36Z" fill={color} />
    <path d="M7.36 6.24H8.64V12.64H7.36V6.24Z" fill={color} />
  </svg>
);