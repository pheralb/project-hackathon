import type { ComponentProps, FC } from "react";

const FrameSimple: FC<ComponentProps<"svg">> = (props) => (
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
      strokeMiterlimit="1.5"
      d="M4.998 2H2v2.998h2.998V2zm0 1.501h14M3.499 4.998V19M20.497 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998V19zM21.996 2.002h-2.998V5h2.998V2.002zm0 17h-2.998V22h2.998v-2.998z"
    ></path>
  </svg>
);

export default FrameSimple;
