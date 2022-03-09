import React from "react";

export const Progress = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.88 7.215L9.915 15.105L6 11.355L4.875 12.51L9.87 17.34L18.945 8.34L17.88 7.215ZM12 0C11.9738 0 11.9422 0 11.9107 0C11.3707 0 10.8398 0.03825 10.32 0.1125L10.3792 0.10575L10.5893 1.69575C11.0318 1.629 11.5433 1.59075 12.063 1.59075C17.8125 1.59075 22.473 6.25125 22.473 12.0007C22.473 17.7502 17.8125 22.4108 12.063 22.4108C12.0405 22.4108 12.0188 22.4108 11.9963 22.4108H12C11.5087 22.4055 11.031 22.368 10.563 22.299L10.62 22.3057L10.41 23.8958C10.8698 23.9625 11.4 24.0007 11.9392 24.0007C11.9602 24.0007 11.982 24.0007 12.003 24.0007H12C18.6278 24.0007 24 18.6285 24 12.0007C24 5.373 18.6278 0.00075 12 0.00075V0ZM2.175 8.445L0.675 7.905C0.333 8.784 0.093 9.8025 0.003 10.8637L0 10.905L1.59 11.055C1.6875 10.101 1.89375 9.22725 2.199 8.40075L2.175 8.475V8.445ZM4.68 4.575L3.555 3.435C2.838 4.13775 2.208 4.92525 1.68075 5.78175L1.65 5.835L3 6.66C3.48075 5.8665 4.032 5.18175 4.66125 4.57875L4.665 4.575H4.68ZM8.595 2.16L8.085 0.66C7.038 1.0185 6.12975 1.47525 5.29875 2.03625L5.34 2.01L6.225 3.345C6.9075 2.87475 7.6905 2.47425 8.52525 2.181L8.595 2.16ZM1.605 13.02L0 13.17C0.111 14.2778 0.35475 15.294 0.71775 16.2525L0.69 16.17L2.19 15.615C1.89375 14.859 1.686 13.983 1.60725 13.0702L1.605 13.035V13.02ZM5.385 22.035C6.17475 22.572 7.08375 23.025 8.052 23.3475L8.13 23.37L8.64 21.87C7.731 21.57 6.94125 21.1785 6.2205 20.6932L6.255 20.715L5.385 22.05V22.035ZM1.68 18.21C2.23725 19.1205 2.86725 19.908 3.58275 20.6077L3.585 20.61L4.695 19.5C4.05375 18.8827 3.49275 18.1882 3.02625 17.4307L3 17.385L1.68 18.21Z"
      fill={color}
    />
  </svg>
);