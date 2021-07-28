import React from "react"
import { Link } from "react-router-dom";


function HeaderBtns(){


    return(
        <div className="header-btns">
            <div className="login-btn">
                <Link className="link" to="/login">Login</Link>
            </div>
            <div className="signup-btn">
                <Link to="/signup">SignUp</Link>
            </div>
        </div>
    )
}

export default HeaderBtns;