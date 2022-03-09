import React from "react";

export const CalendarIcon = ({
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
    <path d="M5.43641 6.62H7.43641V7.68H5.43641V6.62Z" fill={color}/>
    <path d="M8.71641 6.62H10.7164V7.68H8.71641V6.62Z" fill={color}/>
    <path d="M11.9864 6.62H13.9864V7.68H11.9864V6.62Z" fill={color}/>
    <path d="M2.16641 9.46H4.16641V10.52H2.16641V9.46Z" fill={color}/>
    <path d="M5.43641 9.46H7.43641V10.52H5.43641V9.46Z" fill={color}/>
    <path d="M8.71641 9.46H10.7164V10.52H8.71641V9.46Z" fill={color}/>
    <path d="M11.9864 9.46H13.9864V10.52H11.9864V9.46Z" fill={color}/>
    <path d="M2.16641 12.29H4.16641V13.36H2.16641V12.29Z" fill={color}/>
    <path
      d="M11.5464 1.21V0H10.4764V1.21H5.59641V0H4.53641V1.21H0.0664062V16H16.0664V1.21H11.5464ZM4.54641 2.27V3.21H5.59641V2.27H10.4764V3.21H11.5464V2.27H14.9964V4H1.13641V2.27H4.54641ZM1.13641 14.93V5.05H14.9964V14.93H1.13641Z"
      fill={color}
    />
  </svg>
  
);