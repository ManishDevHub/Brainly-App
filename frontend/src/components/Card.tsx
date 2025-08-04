import { PlusIcon } from "../icons/PlusIcon";


export function Card (){
    return <div>
        <div className="p-4 bg-white rounded-md shadow-md border-gray-200
        max-w-72 border">
            <div className="flex justify-between">
        <div className="flex items-center text-md">
                <div className="text-gray-500 pr-2">
                     <PlusIcon />
                </div>
           
            Project ideas
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                     <PlusIcon />
                </div>
                <div className="pr-2 text-gray-500">
                    
           <PlusIcon />
                </div>
          
            </div>
        </div>

    </div>
    </div>
}