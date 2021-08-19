import React, { useEffect } from "react"
import Header from "./Header"
import axios from "axios"
import TabList from "./TabList"
import MultiItemCarousel from "./MultiItemCarousel"
import Carousel from "./Carousel"



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
            <TabList />
            <MultiItemCarousel/>
            <Carousel/>
            

        </div>
    )
}

export default LandingPage;
