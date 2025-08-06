import BrainIcon from "../icons/BrainIcon";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import { SideBarItem } from "./SidebarItem";

export function Sidebar () {
    return <div className="h-screen bg-white border-r w-64 fixed  top-0 left-0">

<div className="flex text-2xl pl-6 gap-10 items-center ">
   <h1>Brainly</h1> 
    <div>
        <SideBarItem icon={<BrainIcon/>} text=""/>
    </div>
</div>
<hr />

<div className="pt-0 pl-5">
    <SideBarItem text="Twitter" icon={<Twitter/>} />
    <SideBarItem text="YouTube" icon={<Youtube/>} />
      

</div>
    </div>
}