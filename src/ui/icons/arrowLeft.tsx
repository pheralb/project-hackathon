import type { ComponentProps, FC } from "react";

const ArrowLeft: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#ffff"
    {...props}
  >
    <path
      stroke="#ffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.5 12H6m0 0l6-6m-6 6l6 6"
    ></path>
  </svg>
);

export default ArrowLeft;
