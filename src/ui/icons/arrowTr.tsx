import type { ComponentProps, FC } from "react";

const ArrowTr: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeWidth="1.5"
    color="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 19L19 6m0 0v12.48M19 6H6.52"
    ></path>
  </svg>
);

export default ArrowTr;
