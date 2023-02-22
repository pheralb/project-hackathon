import type { ComponentProps, FC } from "react";

const ArrowRight: FC<ComponentProps<"svg">> = (props) => (
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
      d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
    ></path>
  </svg>
);

export default ArrowRight;
