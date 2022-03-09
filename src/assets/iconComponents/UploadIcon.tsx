import React from "react";
import {IAccessbilityIcon} from './index'

export const UploadIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>, {title = "Upload", description = "Upload Icon"} : IAccessbilityIcon): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="[title + description]"
  >
    <title>{title}</title>
    <desc>{description}</desc>
    <path
      d="M14.93 8V15H1.07V8H0V16H16V8H14.93ZM7.47 2.18V12.24H8.54V2.18L12.06 6.06L12.85 5.34L8 0L3.16 5.34L4 6.06L7.47 2.18Z"
      fill={color}
    />
  </svg>
);
