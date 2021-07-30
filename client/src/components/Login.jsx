import React from "react"
import Header from "./Header";
import closeImg from "../images/close.png"
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import LoginForm from "./LoginForm";

function Login(){
    return(
        <div>
            <Header/>
            <div id="window" className="focus-container">

                <div className="round-corner signup-box">
                    <div className="display-flex justify-space-between align-center">
                        <h1>Login</h1>
                        <Link to="/"><img className="close-img" src={closeImg} alt="close" /></Link>
                    </div>
                    
                    <LoginForm/>

                    <div className="divider">
                        <p className="or"><span>or</span></p>
                    </div>

                    <div>
                        <p>Already have an account?
                        <Link to="/signup"><span className="login-txt">Sign Up</span></Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;