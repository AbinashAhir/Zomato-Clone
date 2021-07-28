import React from "react"

export default function Input(props){
    return(
            <div className="input-div">
                <input type={props.type} placeholder={props.placeholder} />
            </div>
    )
}