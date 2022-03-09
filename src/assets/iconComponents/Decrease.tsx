import React from "react";

export const Decrease = ({
    height = "16px",
    width = "16px",
    color = "currentColor",
  }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M0.75 0.0849609H17.25V1.91496H0.75V0.0849609Z" fill={color}/>
 </svg>

  );