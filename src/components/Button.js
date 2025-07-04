import { useState } from "react";

interface Props{
    children:string;
}
function Button({children}:Props) {
    const[btnColor,setBtnColor]=useState("primary");
    const changecolor=()=>{
        if(btnColor=='primary'){
        setBtnColor("secondary");
        }else{
        setBtnColor("primary");
        }
    }
  return (
    <div>
        <button type="button" className={'btn btn-'+btnColor} onClick={changecolor}>{children}</button>
    </div>
  )
}

export default Button