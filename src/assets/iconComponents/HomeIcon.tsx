import React from "react";

export const HomeIcon = ({
  height = "18px",
  width = "18px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 13.41L12 0.555008L0 13.41L1.11 14.46L2.49 12.96V23.46H9.78V15H14.28V23.49H21.555V12.99L22.95 14.49L24.075 13.44L24 13.41ZM19.965 21.915H15.735V13.5H8.235V21.99H4.02V11.49L12 2.79001L19.965 11.325V21.915Z" fill={color}/>
  </svg>
);

