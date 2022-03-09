import React from "react";

export const dds_arrange = ({
    height = "16px",
    width = "16px",
    color = "currentColor",
  }: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M16.325 6.35L15.3875 7.2875L17.3875 9.275H10.7625V2.625L12.75 4.6125L13.75 3.675L10 0L6.35 3.675L7.2875 4.6125L9.275 2.625V9.275H2.625L4.6125 7.2875L3.675 6.35L0 10L3.675 13.75L4.6125 12.8125L2.625 10.7625H9.275V17.375L7.2875 15.3875L6.35 16.325L10 20L13.75 16.325L12.8125 15.3875L10.8125 17.3875V10.775H17.375L15.3875 12.7625L16.325 13.7L20 10L16.325 6.35Z" fill={color}/>
 </svg>

  );