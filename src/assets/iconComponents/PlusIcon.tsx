import React from "react";

export const PlusIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 17"
    >
      <path
        fill={color}
        d="M17.1 7.529H9.763V0H7.929v7.529H.592v1.882h7.337v7.529h1.834V9.411H17.1V7.529z"
      ></path>
    </svg>
  );
}