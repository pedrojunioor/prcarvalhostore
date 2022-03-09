import React from "react";

export const AlertNoticeIcon = ({ 
    height = "1rem",
    width = "1rem",
    color = "currentColor"
}: React.SVGProps<SVGSVGElement>) : JSX.Element => (
    <svg 
        height={height}
        width={width} 
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M8 0.0700073L0 13.93H16L8 0.0700073ZM8 2.07001L14.24 12.87H1.76L8 2.11001V2.07001ZM7.48 11H8.48V12H7.48V11ZM7.48 5.05001H8.48V10.05H7.48V5.05001Z" 
            fill={color}
        />
    </svg>
)