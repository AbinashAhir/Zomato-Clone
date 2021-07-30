import React,{useEffect, useState} from "react"
import LocationSelector from "./LocationSelector";
import line from "../images/line.png"
import searchBtn from "../images/search_icon.png";
import DropdownItem from "./DropdownItem";
import dropdown from "../dropdown"
import axios from "axios";

function SearchBar(){
  const [cuisine, setcuisine] = useState("")
  const [foods, setfoods] = useState([])
  const [foodsList, setfoodsList] = useState([])

  useEffect(()=>{
    axios.get("/food")
    .then(response=>{setfoods(response.data);setfoodsList(response.data)})
    .catch(error=>console.log(error))
  },[])

    function handleOnChange(event){
      setcuisine(event.target.value)
      updateDropdown()
    }

    function updateDropdown(){
      dropdown()
      var newList = foodsList.filter(food=>food.foodName.search(cuisine)!== -1)
      setfoods(newList)
    }

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

          <input autoComplete="off" type="text" onChange={handleOnChange} value={cuisine} placeholder="Search for cuisine" id="searchBox" />

          <div id="dropdown-products" className="search-products dropdown-content">
            <DropdownItem items={foods}/> 
          </div>

        </div>
      </div>
      
    </div>
    )
}

export default SearchBar;