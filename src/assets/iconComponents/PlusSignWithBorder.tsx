import React from "react";

export const PlusSignWithBorder = ({
    height = "16px",
    width = "16px",
    color = "currentColor"
}: React.SVGProps<SVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.36 12.59H8.58V8.59H12.58V7.39H8.58V3.39H7.36V7.39H3.41V8.61H7.41L7.36 12.59Z"
                fill={color}
            />
            <path
                d="M0 0V16H16V0H0ZM14.93 14.93H1.07V1.07H14.93V14.93Z"
                fill={color}
            />
        </svg>
    )
}