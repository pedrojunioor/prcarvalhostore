import React from "react";

export const TrashIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6278 14.9335H2.02745V4.26605H0.960938V16H12.6949V4.26605H11.6284L11.6278 14.9335Z"
      fill={color}
    />
    <path d="M6.29395 5.54675H7.36046V13.974H6.29395V5.54675Z" fill={color} />
    <path d="M9.28027 5.54675H10.3468V13.974H9.28027V5.54675Z" fill={color} />
    <path d="M3.30664 5.54675H4.37316V13.974H3.30664V5.54675Z" fill={color} />
    <path
      d="M9.17362 2.02649V0H4.48027V2.02649H0V3.09301H13.7604V2.02649H9.17362ZM5.54679 1.06652H8.21364V2.02649H5.54679V1.06652Z"
      fill={color}
    />
  </svg>
);