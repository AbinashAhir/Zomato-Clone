import React, {useState} from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
import user from "../user"


function LoginForm(props){
    const [email, setemail] = useState("")

    function handleEmailChange(event){
        setemail(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();

        fetchData()
    }

    function fetchData(){
        axios.get("/users")
        .then(response => {verifyUser(response.data)})
        .catch(error => console.log(error));
    }

    function verifyUser(data){
        data.forEach(member=>{
            if(email === member.email){
                user.email = member.email;
                user.fullName = member.fullName;
                props.history.push("/")
            }
        });
    }

        return(
                <form id="form" onSubmit={handleSubmit}>
                    <div className="input-div">
                        <input value={email} onChange={handleEmailChange} type="email" placeholder="email" />
                    </div>
                    <div>
                        <button type="submit" className="btn round-corner">Login</button>
                    </div>
                </form> 
        )
}

export default withRouter(LoginForm)