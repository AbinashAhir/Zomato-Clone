import React from "react"
import LocationSelector from "./LocationSelector";
import line from "../images/line.png"
import searchBtn from "../images/search_icon.png";

function SearchBar(){
    return(
        <div className=" search-container search-div display-flex justify-space-between align-center">
    
      <LocationSelector/>

      <div style={{ padding: "7px" }}>
        <img style={{ width: "65%" }} src={line} alt="|" />
      </div>

        {/* SEARCH BAR */}
      <div className="search-box align-center display-flex">
        <img className="search-btn" src={searchBtn} alt="" />
        <label htmlFor="searchBox"></label>
        <div className="dropdown">
          <input type="text" name="product" placeholder="Search for cuisine" id="searchBox" />
        </div>
      </div>
      
    </div>
    )
}

export default SearchBar;