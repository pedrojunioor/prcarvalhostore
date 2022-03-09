import React from "react";

export const Concluded = ({
    height = "16px",
    width = "16px",
    color = "currentColor",
  }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M6.63 10.07L4.06 7.57L3.31 8.33L6.64 11.57L12.69 5.57L11.94 4.81L6.63 10.07ZM8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM8 14.93C4.1725 14.93 1.07 11.8275 1.07 8C1.07 4.1725 4.1725 1.07 8 1.07C11.8275 1.07 14.93 4.1725 14.93 8C14.9245 11.825 11.825 14.9245 8.0005 14.93H8Z" fill={color}/>
 </svg>

  );