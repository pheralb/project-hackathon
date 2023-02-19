import type { ReactNode } from "react";

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="mt-20">
      <div className="fixed top-0 left-0 z-50 h-full w-60 overflow-y-auto overflow-x-hidden pb-10">
        sidebar
      </div>
      <div className="ml-60">{props.children}</div>
    </div>
  );
};

export default Sidebar;
