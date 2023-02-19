import React from "react";
import './MyButton.css'

const CatsV = ({children, ...props})=>{
    return(
        <button {...props} className='MyBtn'>
            {children}
        </button>
    )
}
export default CatsV;