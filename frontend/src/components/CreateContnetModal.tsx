import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContnetModal({open, onClose}){

    const [modalOpen, setModalOpen] = useState(false);

    return <div>
        {open && <div className="w-screen h-screen bg-slate-500
         fixed top-0 left-0 bg-opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white  px-5 py-7 rounded">
                    <div className="  ">
                        <div onClick={onClose} className="mb-5 cursor-pointer flex justify-between">
                            <h1 >Content</h1>
                        <CrossIcon/>

                        </div>
                    </div>
                    <div>
                        <Input placeholder="Title"  />
                        <Input placeholder="Link" />
                    </div>
                    <div className="flex justify-center pt-4 ">
                    <Button variant="primary" text="Submit" size="md" />
                    </div>
                    </div>
                    </div>
      </div>
}
    </div>

    function Input({onChange,placeholder}: {onchange: () => void}) {
        return <div>
            <input  placeholder ={placeholder} type={"text"}  className="px-4 py-2 rounded m-2 border" onChange={onChange} />
        </div>
        
    }
        
}