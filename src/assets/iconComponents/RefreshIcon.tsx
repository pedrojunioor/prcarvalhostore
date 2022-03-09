import React from "react";

export const RefreshIcon = ( {
    height = "16px",
    width = "16px",
    color = "currentColor"
} : React.SVGProps<SVGSVGElement> ) : JSX.Element => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M7.81 1.26C10.0215 1.2635 11.9825 2.333 13.207 3.982L13.22 4H10.09V5.05H15.14V0H14.07V3.32C12.628 1.4165 10.366 0.2 7.82 0.2C3.508 0.2 0.0115 3.69 0 7.999V8H1.07C1.07 4.2775 4.0875 1.26 7.81 1.26ZM14.55 8C14.5385 11.714 11.5255 14.72 7.81 14.72C5.602 14.72 3.642 13.658 2.4125 12.0175L2.4 12H5.53V11H0.53V16H1.55V12.68C2.992 14.5835 5.254 15.8 7.8 15.8C12.112 15.8 15.6085 12.31 15.62 8.001V8H14.55Z"
            fill={color}
        />
    </svg>
)