import React from "react";

export const User = ({
  height = "16px",
  width = "16px",
  color = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 15.4744C12.4699 15.4744 10.9742 15.0207 9.70187 14.1708C8.4296 13.3208 7.4379 12.1127 6.85215 10.6991C6.26641 9.28562 6.11292 7.73016 6.4111 6.22942C6.70927 4.72867 7.44572 3.35003 8.52733 2.26778C9.60894 1.18553 10.9872 0.448279 12.4877 0.149225C13.9883 -0.149829 15.5438 0.00274662 16.9577 0.587661C18.3716 1.17258 19.5803 2.16357 20.431 3.43535C21.2817 4.70712 21.7363 6.20259 21.7372 7.73267C21.7473 8.75177 21.5541 9.76266 21.169 10.7062C20.7838 11.6498 20.2143 12.507 19.4939 13.2279C18.7734 13.9488 17.9165 14.5187 16.9732 14.9045C16.0298 15.2902 15.0191 15.484 14 15.4744ZM14 2.02674C13.2226 2.01621 12.4509 2.16157 11.7307 2.45422C11.0104 2.74688 10.356 3.1809 9.80627 3.73065C9.25652 4.2804 8.8225 4.93474 8.52984 5.65503C8.23719 6.37532 8.09183 7.14694 8.10236 7.92434C8.10236 8.69882 8.2549 9.46572 8.55129 10.1813C8.84767 10.8968 9.28208 11.5469 9.82973 12.0946C10.3774 12.6422 11.0275 13.0766 11.743 13.373C12.4586 13.6694 13.2255 13.8219 14 13.8219C14.7744 13.8219 15.5413 13.6694 16.2569 13.373C16.9724 13.0766 17.6226 12.6422 18.1702 12.0946C18.7178 11.5469 19.1523 10.8968 19.4486 10.1813C19.745 9.46572 19.8976 8.69882 19.8976 7.92434C19.9081 7.14694 19.7627 6.37532 19.4701 5.65503C19.1774 4.93474 18.7434 4.2804 18.1937 3.73065C17.6439 3.1809 16.9896 2.74688 16.2693 2.45422C15.549 2.16157 14.7774 2.01621 14 2.02674Z"
      fill={color}
    />
    <path
      d="M28 27.4477H0L0.183733 26.5267C0.183733 26.1593 1.10467 18.9733 6.6314 15.2907L7.18487 14.9232L7.73833 15.2907C9.47169 16.7888 11.6774 17.6284 13.9683 17.662C16.2591 17.6956 18.4885 16.9211 20.2651 15.4744L20.8185 15.1069L21.372 15.4744C27.0825 19.1593 27.8197 26.343 27.8197 26.7105L28 27.4477ZM2.02673 25.6058H25.7895C25.1398 22.2991 23.3863 19.3112 20.8163 17.1314C18.7998 18.5693 16.3848 19.3422 13.9081 19.3422C11.4315 19.3422 9.0165 18.5693 7 17.1314C3.68487 19.7105 2.57907 23.7628 2.02673 25.6058Z"
      fill={color}
    />
  </svg>
);
