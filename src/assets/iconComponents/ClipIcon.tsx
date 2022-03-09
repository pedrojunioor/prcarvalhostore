import React from "react";

export const ClipIcon = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0705 2.00001L14.6905 1.62001C14.135 1.06351 13.367 0.719513 12.5185 0.719513C12.5015 0.719513 12.485 0.719513 12.468 0.720013H12.4705C11.6065 0.729513 10.8265 1.08301 10.2605 1.65001L4.43053 7.53001C4.01003 7.95451 3.75053 8.53851 3.75053 9.18351C3.75053 9.18601 3.75053 9.18801 3.75053 9.19051V9.19001C3.76203 10.4705 4.79953 11.5045 6.08003 11.51H6.20053C6.80603 11.4805 7.34603 11.222 7.74003 10.8205L7.74053 10.82L12.0705 6.46001L11.3205 5.71001L7.00053 10.07C6.77153 10.303 6.45303 10.4485 6.10103 10.45H6.00053C5.66803 10.434 5.37103 10.296 5.15053 10.08C4.91953 9.85001 4.77653 9.53151 4.77653 9.18001C4.77653 8.82851 4.91953 8.51001 5.15053 8.28001L11.0005 2.40001C11.374 2.02351 11.8915 1.79001 12.464 1.79001C12.4665 1.79001 12.4685 1.79001 12.471 1.79001H12.4705C13.042 1.79551 13.5595 2.02301 13.941 2.39051L13.9405 2.39001L14.3205 2.76001C14.697 3.13351 14.9305 3.65101 14.9305 4.22351C14.9305 4.22601 14.9305 4.22801 14.9305 4.23051V4.23001C14.9305 4.23151 14.9305 4.23301 14.9305 4.23451C14.9305 4.80551 14.7015 5.32301 14.33 5.70051L14.3305 5.70001L6.81053 13.29C6.24103 13.8555 5.45653 14.2055 4.59053 14.2055C3.72453 14.2055 2.94003 13.856 2.37053 13.29L2.00053 12.93C1.42653 12.3685 1.07053 11.586 1.07053 10.7205C1.07053 10.717 1.07053 10.713 1.07053 10.7095V10.71C1.07303 9.83851 1.42803 9.05001 2.00053 8.48001L8.00053 2.41001L7.25053 1.66001L1.25053 7.73001C0.490031 8.49151 0.0195312 9.54351 0.0195312 10.705C0.0195312 11.8665 0.490031 12.9185 1.25053 13.68L1.63053 14.06C2.39353 14.838 3.45553 15.3205 4.63053 15.3205C5.80553 15.3205 6.86753 14.838 7.63003 14.0605L7.63053 14.06L15.1505 6.47001C15.678 5.91401 16.0025 5.16051 16.0025 4.33151C16.0025 4.29251 16.002 4.25351 16.0005 4.21451V4.22001C16.0005 4.21451 16.0005 4.20801 16.0005 4.20151C16.0005 3.33851 15.6445 2.55851 15.071 2.00101L15.0705 2.00051V2.00001Z"
      fill={color}
    />
  </svg>
);