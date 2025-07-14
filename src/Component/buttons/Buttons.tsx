import React, {type ComponentProps} from "react";

type TVariant =  "primery" | "danger"  | "succes"

type TButtons = ComponentProps<"button"> & {
  variant : TVariant
}



export default function Buttons ({children, variant,style , ...props}:TButtons) {
  console.log(checkVariant(variant))
  
  return <button {...props} style={{...style , ...checkVariant(variant)}} >{children}</button>

}



//الان این فانکشن ریتونکننده اینه که هربار هر چیزی رو خواستیم کافیه به باتنمون بدیم

function checkVariant (variant : TVariant) {

  if(variant === "primery") {
    return {backgroundColor : "grey" , color : "white"}
  }
  else if (variant === 'danger') {
    return {backgroundColor : "red" , color : "white"}
  }
  else if (variant === "succes") {
    return {backgroundColor : "green" , color : "white"}
  }

}