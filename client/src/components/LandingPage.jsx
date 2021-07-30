import React, { useEffect } from "react"
import Header from "./Header"
import axios from "axios"

function LandingPage(){

    // function getUsers(){
    //     axios.get("/users")
    //     .then(response => console.log(response.data))
    //     .catch(error => console.error("Error"+error));
    // }

    // useEffect(()=>{
    //     getUsers();
    // },[]);

    return(
        <div>
            <Header/>
        </div>
    )
}

export default LandingPage;