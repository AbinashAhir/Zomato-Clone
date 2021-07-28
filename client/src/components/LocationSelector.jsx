import React from "react"
import locationTag from "../images/location_tag.png";
import dropdownBtn from "../images/dropdown_btn.png"

function LocationSelector(){
    return(
        <div className="location-selector">
            <img className="location-tag" src={locationTag} alt="Location" />
            <div className="location-input">
                <input type="text" placeholder="Bhubneswar" />
            </div>
            <img className="dropdown-btn" src={dropdownBtn} alt="dropdown button" />
        </div>
    )
}

export default LocationSelector;