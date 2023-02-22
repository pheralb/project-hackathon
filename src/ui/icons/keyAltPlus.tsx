import type { ComponentProps, FC } from "react";

const KeyAltPlus: FC<ComponentProps<"svg">> = (props) => (
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
      d="M14.992 18h3m3 0h-3m0 0v-3m0 3v3m-5.58-10.657a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657zm0 0l-8.485 8.485 2.121 2.122M6.755 16l2.122 2.121"
    ></path>
  </svg>
);

export default KeyAltPlus;
