import React from "react"
import Header from "./Header";
import closeImg from "../images/close.png"
import { Link, withRouter } from "react-router-dom"



function Filter() {

    return (
        <div>
            <Header />
            <div className="focus-container filter-main">
                <div className="round-corner signup-box">
                    <div className="display-flex justify-space-between align-center">
                        <h1>Filters</h1>
                        <Link to="/"><img className="close-img" src={closeImg} alt="close" /></Link>
                    </div>
                    <div className="nav-container">
                        <ul className="nav flex-column">
                            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#sortBy">Sort By</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#cuisine">Cuisine</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#rating">Rating</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#costPerPerson">Cost per person</a></li>
                            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#moreFilters">More filters</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="sortBy">
                                <div className="row border g-0 rounded shadow-sm">
                                    <div className="row" >
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane " id="cuisine">
                                <div className="row border g-0 rounded shadow-sm">
                                    <div className="col p-4" >
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane " id="rating">
                                <div className="row border g-0 rounded shadow-sm">
                                    <div className="col p-4" >
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane " id="costPerPerson">
                                <div className="row border g-0 rounded shadow-sm">
                                    <div className="col p-4" >
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane " id="moreFilters">
                                <div className="row border g-0 rounded shadow-sm">
                                    <div className="col p-4" >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Filter);

