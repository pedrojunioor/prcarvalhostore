import React from "react";
import {IAccessbilityIcon} from './index'

export const DownloadIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>, {title = "Download", description = "Dowload Icon"} : IAccessbilityIcon): JSX.Element => (
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
      d="M13 8.09L12.25 7.33L8.52 11.01V0H7.45V11L3.82 7.33L3.07 8.09L8 13.03L13 8.09Z"
      fill={color}
    />
    <path d="M0 14.34H16V15.4H0V14.34Z" fill={color} />
  </svg>
);
