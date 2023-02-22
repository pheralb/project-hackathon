import type { ComponentProps, FC } from "react";

const Plus: FC<ComponentProps<"svg">> = (props) => (
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
      d="M6 12h6m6 0h-6m0 0V6m0 6v6"
    ></path>
  </svg>
);

export default Plus;
