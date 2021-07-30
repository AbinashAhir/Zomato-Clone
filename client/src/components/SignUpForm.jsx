import React, {useState} from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
import user from "../user"


function SignUpForm(props){
    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    function handleNameChange(event){
        setname(event.target.value)
    }
    function handleEmailChange(event){
        setemail(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        const newUser = {
            "fullName":name,
            "email":email,
        }
        addUser(newUser)
        user.email = newUser.email;
        user.fullName = newUser.fullName;
        props.history.push("/")
    }

    function addUser(user){
        axios.post("/signup",user)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    }

        return(
                <form id="form" onSubmit={handleSubmit}>
                    <div className="input-div">
                        <input value={name} onChange={handleNameChange} type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-div">
                        <input value={email} onChange={handleEmailChange} type="email" placeholder="email" />
                    </div>
                    <div>
                        <button type="submit" className="btn round-corner">Create Account</button>
                    </div>
                </form> 
        )
}

export default withRouter(SignUpForm)