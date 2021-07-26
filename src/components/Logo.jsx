import React from "react"
import brandLogo from "../images/brand_logo.png"

function Logo(){
    return(
        <div className="logo-container">
            <img src={brandLogo} />
        </div>
    )
}

export default Logo;