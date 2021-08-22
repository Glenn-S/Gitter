import { ReactElement } from "react";

export type SidebarProps = { 
  title: string
}

export const Sidebar : React.FC<SidebarProps> = ({ title, children }) : ReactElement => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};