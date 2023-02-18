import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = (props: AlertProps) => {
  return <div className="rounded-md bg-red-900/20 p-3">{props.children}</div>;
};

export default Alert;
