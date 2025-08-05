import { useState } from "react";

export function CreateContnetModal({open, onClose}){

    const [modalOpen, setModalOpen] = useState(false);

    return <div>
        <CrossIcon onClick={() =>{
setModalOpen(false);
        }} />
    </div>
}