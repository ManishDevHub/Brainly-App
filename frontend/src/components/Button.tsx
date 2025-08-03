import type { ReactElement } from "react";
import { PlusIcon } from "../icons/PlusIcon";



export interface ButtonProps {
  variant: "primary" | "secondary" ;
  size : "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon? : any;
  onClick : () => void;
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

export const Button = (props: ButtonProps) => {
 return (<button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} flex items-center`}>
   {props.startIcon ? <div className="pr-2"> {props.startIcon}</div>: null}  {props.text} {props.endIcon}</button>)
 
  

}

<Button variant="primary" size="md" onClick={()=>{}} text={"aaa"}  />