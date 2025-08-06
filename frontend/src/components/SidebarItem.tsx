
import { ReactElement } from "react";

export function SideBarItem ({text , icon}: {
    text: String;
    icon: ReactElement;
}) {
    return <div className="flex">
 {
icon
 }{
text
 }
    </div>
}