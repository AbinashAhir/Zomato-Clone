import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderBtns from "./HeaderBtns";
import UserName from "./UserName";
import user from "../user";


function Header(){

    var isLoggedIn = false;
    if(user.email !== ""){
        isLoggedIn = true;
    }

    if(isLoggedIn){
        return(
            <div className="header-container">
                <Logo />
                <SearchBar />
                <UserName username={user.fullName} />
            </div>
        )
    }else{
        return(
            <div className="header-container">
                <Logo />
                <SearchBar />
                <HeaderBtns />
            </div>
        )
    }
}

export default Header;