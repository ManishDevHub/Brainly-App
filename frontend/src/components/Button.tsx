import type { ReactElement } from "react";
import { PlusIcon } from "../icons/PlusIcon";



export interface ButtonProps {
  variant: "primary" | "secondary" ;
  size : "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon? : ReactElement;
  onClick? : () => void;
}

const variantStyle = {
  "primary" : "bg-purple-600 text-white",
  "secondary" : "bg-purple-300 text-purple-600"
}

const sizeStyle = {
  "sm" : "py-1 px-2",
  "md" : "py-2 px-4",
  "lg": "p-6"

}

const defaultStyle = 'rounded-md p-4 flex'

export const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
 return (<button onClick={onClick} className={`${variantStyle[variant]} ${defaultStyle} ${sizeStyle[size]} flex items-center`}>
   {startIcon ? <div className="pr-2"> {startIcon}</div>: null}  {text} {endIcon}</button>)
 
  

}

<Button variant="primary" size="md" onClick={()=>{}} text={"aaa"}  />