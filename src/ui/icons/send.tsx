import type { ComponentProps, FC } from "react";

const Send: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeWidth="1.5"
    color="#ffff"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#ffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 12L3 20l3.563-8L3 4l19 8zM6.5 12H22"
    ></path>
  </svg>
);

export default Send;
