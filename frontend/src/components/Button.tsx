import type { ReactElement } from "react";



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
  "secondary" : "bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonProps) => {
 return  <button className={variantStyle[props.variant]}>{props.text}</button>
 
  

}

<Button endIcon={"+"} variant="primary" size="md" onClick={()=>{}} text={"aaa"}  startIcon={">"}/>