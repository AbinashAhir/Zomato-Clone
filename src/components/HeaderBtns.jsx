import React from "react"
import { Link, withRouter } from "react-router-dom";

function HeaderBtns(){
    return(
        <div className="header-btns">
            <div className="login-btn"><Link to="/login">Login</Link></div>
            <div className="signup-btn"><Link to="/signup">SignUp</Link></div>
        </div>
    )
}

export default withRouter(HeaderBtns);