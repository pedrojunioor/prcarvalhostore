import React from "react";

export const PencilIcon = ({ 
    height = "1rem",
    width = "1rem",
    color = "currentColor",

}: React.SVGProps<SVGSVGElement>) : JSX.Element => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M13.07 0L1.84 11.23L0.18 15.49L0 16L0.51 15.82L4.78 14.15L16 2.93L13.07 0ZM1.87 14.13L2.73 11.91L4.1 13.26L1.87 14.13ZM4.87 12.52L3.46 11.12L11.46 3.12L12.87 4.51L4.87 12.51V12.52ZM12.24 2.36L13.07 1.53L14.47 2.93L13.65 3.75L12.24 2.36Z" 
            fill={color}
        />
    </svg>
)