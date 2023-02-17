import clsx from "clsx";
import type { ReactNode } from "react";
import { Ring } from "@uiball/loaders";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-md border border-neutral-800 bg-neutral-800/20 px-4 py-2 font-medium text-white",
        "transition-all duration-200 ease-in-out",
        "hover:bg-neutral-800/60 hover:shadow-md",
        "outline-none focus:outline-none",
        "focus:ring-2 focus:ring-neutral-700 focus:ring-opacity-50",
        props.loading && "cursor-wait opacity-50",
        props.disabled && "cursor-not-allowed opacity-50",
        props.className,
      )}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      {...props}
    >
      <div className="flex items-center justify-center">
        {props.loading && (
          <div className="mr-3">
            <Ring size={20} color="white" />
          </div>
        )}
        {props.icon && !props.loading && (
          <span className="mr-3">{props.icon}</span>
        )}
        <span>{props.children}</span>
      </div>
    </button>
  );
};

export const ButtonLg = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full rounded-md border border-neutral-800 bg-neutral-800/20 px-6 py-3 font-medium text-white",
        "transition-all duration-200 ease-in-out",
        "hover:bg-neutral-800/60 hover:shadow-md",
        "outline-none focus:outline-none",
        "focus:ring-2 focus:ring-neutral-700 focus:ring-opacity-50",
        props.loading && "cursor-wait opacity-50",
        props.disabled && "cursor-not-allowed opacity-50",
        props.className,
      )}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      {...props}
    >
      <div className="flex flex-col items-center justify-center">
        {props.loading && (
          <div className="mr-3">
            <Ring size={20} color="white" />
          </div>
        )}
        {props.icon && !props.loading && (
          <span className="mb-3">{props.icon}</span>
        )}
        <span>{props.children}</span>
      </div>
    </button>
  );
};
