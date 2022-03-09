import React from "react";

export const SucessIcon = ({
    height = "16px",
    width = "16px",
    color = "#6EA204"
} : React.SVGProps<SVGAElement>) : JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.945 15.105L6.09 11.355L4.965 12.495L9.96 17.355L19.035 8.355L17.91 7.215L9.945 15.105ZM12 0C5.37225 0 0 5.37225 0 12C0 18.6278 5.37225 24 12 24C18.6278 24 24 18.6278 24 12C24 5.37225 18.6278 0 12 0ZM12 22.395C6.25875 22.395 1.605 17.7413 1.605 12C1.605 6.25875 6.25875 1.605 12 1.605C17.7413 1.605 22.395 6.25875 22.395 12C22.3868 17.7375 17.7375 22.3868 12.0007 22.395H12Z"
        fill={color}/>
    </svg>
)