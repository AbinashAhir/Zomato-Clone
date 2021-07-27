import React from "react"
import { Link } from "react-router-dom";
import brandLogo from "../images/brand_logo.png"

function Logo(){
    return(
        <div className="logo-container">
            <Link to="/"><img src={brandLogo} /></Link>
        </div>
    )
}

export default Logo;