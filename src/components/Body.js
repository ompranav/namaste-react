import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {

  const [listOfRestaurant,setlistOfRestaurant] = useState ([]);
  useEffect (()=>{
    fetchData();
  } , []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999");

    const json = await data.json();
    console.log(json);
    setlistOfRestaurant (json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

  }

 

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=> 
                                {   const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.1 );
                                    setlistOfRestaurant(filteredList);
                                    
                                }
                            }>
                    Top Rated Restaurants
                    
                </button>
            </div>
            <div className="res-container">
              {listOfRestaurant.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData ={restaurant}/>))};
               

            </div>
        </div>
    );
};

export default Body;