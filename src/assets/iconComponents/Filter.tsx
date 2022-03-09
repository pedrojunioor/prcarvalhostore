import React from "react";

export const Filter = ({
    height = "16px",
    width = "16px",
    color = "currentColor"
}: React.SVGProps<SVGAElement>): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 0H0V2.05646L6.14084 10.1278V16L9.82535 14.3596V10.1278L16 2.05646V0ZM14.7606 1.64042L8.61972 9.67608V13.5156L7.34648 14.0862V9.67608L7.07606 9.33135L1.23944 1.6523V1.27192H14.7606V1.64042Z"
                fill={color}/>
        </svg>
    )
}