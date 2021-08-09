import React from "react";
import down_arrow from "../images/down_arrow.png"
import userDropdown from "../userName"


export default function UserName(props){
    return(
        <div className="username">
            <span>{props.username}&nbsp;&nbsp;<img onClick={userDropdown} className="down-arrow" src={down_arrow} alt="down" /></span>
            <div id="userDropdown"></div>
        </div>
    )
}