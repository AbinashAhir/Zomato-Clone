import React from "react"
import FilterSection from "./FilterSection";


function TabList() {
    return (
        <div>
            <div className="container">
                <ul className="nav nav-tabs display-flex justify-space-between">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#delivery">
                            <img className="circular-square" src="https://img.icons8.com/ios-filled/50/000000/motorcycle-delivery-single-box.png" width="30" height="30" />
                            Delivery
                        </a>
                    </li>

                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#diningout" ><img src="https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" width="30" height="30" />Dining Out</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#nightlife"><img src="https://img.icons8.com/wired/64/000000/bar.png" width="30" height="30" />Nightlife</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#nutrition"><img src="https://img.icons8.com/wired/64/000000/vegetarian-food.png" width="30" height="30" />Nutrition</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="delivery">
                        <div className="row border g-0 rounded shadow-sm">
                            <div className="col p-4" >
                                <FilterSection />
                                <p>
                                    Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. An order is typically made either through a restaurant or grocer's website or mobile app, or through a food ordering company. The delivered items can include entrees, sides, drinks, desserts, or grocery items and are typically delivered in boxes or bags.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane " id="diningout">
                        <div className="row border g-0 rounded shadow-sm">
                            <div className="col p-4" >
                                <p>
                                    Eating out can be a very pleasurable experience. Having dinner with a friend, eating a romantic meal while on a date or celebrating some special event with a party at a restaurant are all things we enjoy doing.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane " id="nightlife">
                        <div className="row border g-0 rounded shadow-sm">
                            <div className="col p-4" >
                                <p>
                                    Nightlife is a collective term for entertainment that is available and generally more popular from the late evening into the early hours of the morning.It includes pubs, bars, nightclubs, parties, live music, concerts, cabarets, theatre, cinemas, and shows. These venues often require a cover charge for admission. Nightlife entertainment is often more adult-oriented than daytime entertainment.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane " id="nutrition">
                        <div className="row border g-0 rounded shadow-sm">
                            <div className="col p-4" >
                                <p>
                                    Nutrition is defined as the processes by which an animal or plant takes in and utilises food substances. Essential nutrients include protein, carbohydrate, fat, vitamins, minerals and electrolytes. Normally, 85% of daily energy use is from fat and carbohydrates and 15% from protein. In humans, nutrition is mainly achieved through the process of putting foods into our mouths, chewing and swallowing it.                         </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabList;
