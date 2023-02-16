import clsx from "clsx";
import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export const ExternalLink = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className={clsx(props.underline && "underline", props.className)}
    >
      {props.children}
    </a>
  );
};

export const Link = (props: LinkProps) => {
  return (
    <NextLink
      href={props.href}
      className={clsx(props.underline && "underline", props.className)}
    >
      {props.children}
    </NextLink>
  );
};
