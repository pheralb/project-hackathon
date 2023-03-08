import type { ComponentProps, FC } from "react";

const ArrowDown: FC<ComponentProps<"svg">> = (props) => (
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
      d="M12.25 5.5V18m0 0l-6-6m6 6l6-6"
    ></path>
  </svg>
);

export default ArrowDown;
