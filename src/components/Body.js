import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"


const Body = () => {

    // Local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState('')
    // console.log("Body rendering");
    

    useEffect(() => {
      fetchData();
      // console.log("useEffect will reflect");
    }, []);

 const fetchData = async () => {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

  const json = await data.json();

  console.log(json);

  setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  
 }
  

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">

              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />

                <button onClick={() => {
                  // console.log(searchText)
                  const filteredRestaurant = listOfRestaurants.filter((res) => 
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>

              </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
                    // console.log(listOfRestaurants);
                    setListOfRestaurants(filteredList)
                }}>Top rated restaurants</button>
            </div>

            <div className="res-container">
                {filteredRestaurant.map((res) => <RestaurantCard key={res.info.id} resData={res} />)}


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