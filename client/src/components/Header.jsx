import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderBtns from "./HeaderBtns"

function Header(){
    return(
        <div className="header-container">
            <Logo />
            <SearchBar />
            <HeaderBtns />
        </div>
    )
}

export default Header;