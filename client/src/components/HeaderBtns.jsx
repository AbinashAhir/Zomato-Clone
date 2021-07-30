import React from "react"
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import user from "../user";


function HeaderBtns(props){

    var isLoggedIn = false;
    if(user.email !== ""){
        isLoggedIn = true;
    }

    function logoutUser(){
        user.email = "";
        user.fullName = "";
        props.history.push("/")
    }

    const LoginBtn = <div className="login-btn"><Link className="link" to="/login">Login</Link></div>

    const SignupBtn = <div className="signup-btn"><Link to="/signup">SignUp</Link></div>

    const LogoutBtn = <div className="logout-btn"><Link to="" onClick={logoutUser}>Log Out</Link></div>



    if(isLoggedIn){
        return(
            <div className="header-btns">
                {LogoutBtn}
            </div>
        )
    }else{
        return(
            <div className="header-btns">
            {LoginBtn}
            {SignupBtn}
            </div>
        )
    }
}

export default withRouter(HeaderBtns);