import type { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = (props: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {props.children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={clsx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center rounded-md px-4 py-2.5",
            "bg-white dark:bg-neutral-800",
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current text-white dark:text-neutral-800" />
          <span className="block text-sm leading-none text-gray-700 dark:text-gray-100">
            {props.text}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
