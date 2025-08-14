import { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: String;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200">
      <div className="p-2 ">{icon}</div> 
      <div className="p-2">{text}</div>
    </div>
  );
}
