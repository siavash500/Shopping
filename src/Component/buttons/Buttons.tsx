import React, {type ComponentProps} from "react";

type TButtons = ComponentProps<"button">


export default function Buttons ({children, ...props}:TButtons) {
    return <button {...props} >{children}</button>

}






  // <div className="flex flex-row-reverse gap-4 mt-6 justify-end">
    //   <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">
    //     افزودن به سبد خرید
    //   </button>