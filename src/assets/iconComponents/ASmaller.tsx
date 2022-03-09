import React from "react";

export const ASmaller = ({
  height = "20px",
  width = "15px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg 
        width={width}
        height={height} 
        viewBox="0 0 20 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M9.4043 11.6895H3.89648L2.74414 15H0.175781L5.54688 0.78125H7.76367L13.1445 15H10.5664L9.4043 11.6895ZM4.58984 9.69727H8.71094L6.65039 3.79883L4.58984 9.69727ZM19.1406 9.91211H14.0137V7.99805H19.1406V9.91211Z" 
        fill={color}/>
    </svg>
);
