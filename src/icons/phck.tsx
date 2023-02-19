import type { ComponentProps, FC } from "react";

const Phck: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        id="c"
        width={512}
        height={512}
        x={0}
        y={0}
        rx={128}
        fill="url(#a)"
        stroke="#FFF"
        strokeWidth={0}
        strokeOpacity="100%"
        paintOrder="stroke"
      />
      <image
        width={512}
        height={512}
        clipPath="url(#b)"
        opacity="10%"
      />
      <clipPath id="b">
        <use xlinkHref="#c" />
      </clipPath>
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(45)"
          style={{ transformOrigin: "center center" }}
        >
          <stop stopColor="#121212" />
          <stop offset={1} />
        </linearGradient>
      </defs>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        height={250}
        x={131}
        y={131}
        alignmentBaseline="middle"
        style={{ color: "#b8b8b8" }}
        {...props}
      >
        <path
          d="M14.25 8a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 9.75v3.75H9a5 5 0 0 0 5-5v-.75H9.75a2 2 0 0 0-2 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

export default Phck;