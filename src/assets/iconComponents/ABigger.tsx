import React from "react";

export const ABigger = ({
  height = "24px",
  width = "15px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (

    <svg 
        width={width}
        height={height} 
        viewBox="0 0 24 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M9.4043 11.6895H3.89648L2.74414 15H0.175781L5.54688 0.78125H7.76367L13.1445 15H10.5664L9.4043 11.6895ZM4.58984 9.69727H8.71094L6.65039 3.79883L4.58984 9.69727ZM20.0195 7.17773H23.7305V9.3457H20.0195V13.5742H17.7148V9.3457H13.9844V7.17773H17.7148V3.22266H20.0195V7.17773Z" 
        fill={color}/>
    </svg>
);
