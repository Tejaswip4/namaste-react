import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";


const Body = () => {

    // Local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    // Normal JS variable
    let listOfRestaurantsJS = [
        {
            "info": {
            "id": "698364",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/118d064e-20b1-4385-bd1d-efa291e1fe49_698364.jpg",
            "locality": "Perumbakkam",
            "areaName": "Sekaran Mall",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 3.8,
          },
        },
        {
            "info": {
            "id": "612571",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/16ce627a-d16b-440d-998f-2e3cc829db06_612571.JPG",
            "locality": "Perumbakkam",
            "areaName": "Sekaran Mall",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.1,
          },
        },
        {
            "info": {
            "id": "104680",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/1575ad27-b88a-4918-aeae-8192ab238a34_104680.jpg",
            "locality": "Perumbakkam",
            "areaName": "Sekaran Mall",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.5
          },
        },
   ]

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4)
                    // console.log(listOfRestaurants);
                    setListOfRestaurants(filteredList)
                }}>Top rated restaurants</button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((res) => <RestaurantCard key={res.info.id} resData={res} />)}


                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
                <RestaurantCard resData={resList[10]} /> */}
                {/* <RestaurantCard resName="KFC" cuisine="Burger, hot dogs"/> */}


            </div>
        </div>
    )
}

export default Body