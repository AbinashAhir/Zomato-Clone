import React from "react"

export default function Button(props){
    return(
        <div>
            <button className="btn round-corner">{props.text}</button>
        </div>
    )
}