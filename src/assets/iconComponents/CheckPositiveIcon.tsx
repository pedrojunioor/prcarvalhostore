import React from "react";

export const CheckPositiveIcon = ({
    height = "16px",
    width = "16px",
    color = "currentColor",
    }: React.SVGProps<SVGSVGElement>): JSX.Element => (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.93 13.0599L0 7.30994L0.71 6.56994L5.94 11.6499L15.3 2.93994L16 3.68994L5.93 13.0599Z" fill={color}/>
        </svg>
    );