import type { ComponentProps, FC } from "react";

const LightBulb: FC<ComponentProps<"svg">> = (props) => (
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
      d="M9 18h6m-5 3h4m-5-6c.001-2-.499-2.5-1.5-3.5-1-1-1.476-2.013-1.5-3.5-.047-3.05 2-5 6-5 4.001 0 6.049 1.95 6 5-.023 1.487-.5 2.5-1.5 3.5-.999 1-1.499 1.5-1.5 3.5"
    ></path>
  </svg>
);

export default LightBulb;
