import { DeleteIcon } from "../icons/Deleteicon";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TextIcon } from "../icons/TextIcon";


export function Card (){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200
        max-w-72 border">
            <div className="flex justify-between">
        <div className="flex items-center text-md">
                <div className="text-gray-500 pr-2">
                     <TextIcon/>
                </div>
           
            Project ideas
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                     <ShareIcon />
                </div>
                <div className="pl-4 text-gray-500">
                    
           < DeleteIcon />
                </div>
          
            </div>
        </div>
        <iframe className="w-full" src="https://www.youtube.com/embed/VUoa94WUtWA?si=xwtc_Liy3IvlJeQL"
         title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
         web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </div>
    </div>
}