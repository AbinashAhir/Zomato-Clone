import React from "react"
import Header from "./Header";
import closeImg from "../images/close.png"
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";


function SignUp(){

    return(
        <div>
            <Header/>
            <div id="window" className="focus-container">

                <div className="round-corner signup-box">
                    <div className="display-flex justify-space-between align-center">
                        <h1>Sign Up</h1>
                        <Link to="/"><img className="close-img" src={closeImg} alt="close" /></Link>
                    </div>

                   <SignUpForm />

                    <div className="divider">
                        <p className="or"><span>or</span></p>
                    </div>

                    <div>
                        <p>Already have an account?
                        <Link to="/login"><span className="login-txt">Login</span></Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp;