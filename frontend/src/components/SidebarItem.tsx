import { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: String;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2">
      <div className="p-2 ">{icon}</div> 
      <div className="p-2">{text}</div>
    </div>
  );
}
