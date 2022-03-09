import React from "react";

export const dds_expand = ({
    height = "16px",
    width = "16px",
    color = "currentColor",
  }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M8.0625 12.8375L6.8125 11.5875L1.7 16.8125V14.0375H0V20H5.9375V18.225H3.175L8.0625 12.8375Z" fill={color}/>
 <path d="M16.825 18.225H14.0625V20H20V14.0375H18.2375V16.8125L13.075 11.625L11.9375 12.875L16.825 18.225Z" fill={color}/>
 <path d="M11.875 7.1625L13.125 8.4125L18.2875 3.225V5.9625H20V0H14.0625V1.775H16.825L11.875 7.1625Z" fill={color}/>
 <path d="M3.175 1.775H5.9375V0H0V5.9625H1.7625V3.1875L6.925 8.375L8.175 7.125L3.175 1.775Z" fill={color}/>
 </svg>

  );