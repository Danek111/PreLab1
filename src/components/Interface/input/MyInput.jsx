import React from "react";
import './MyInput.css'

export default function CatsI(props){
    return(
        <input type='text' {...props} className={'myInput'}/>
    )
}