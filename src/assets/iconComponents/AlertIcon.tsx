import React from "react";

export const AlertIcon = ({
    height = "16px",
    width = "16px",
    color = "#EE6411"
} : React.SVGProps<SVGAElement> ) : JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.60498L0 21.395H24L12 0.60498ZM12 3.60498L21.36 19.805H2.64L12 3.66498V3.60498ZM11.22 17H12.72V18.5H11.22V17ZM11.22 8.07498H12.72V15.575H11.22V8.07498Z"
        fill={color}/>
    </svg>
)