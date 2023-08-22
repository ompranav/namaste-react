import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant , setfilteredRestaurant] = useState([]);

  const [searchText , setsearchText]= useState("");

  console.log("body rendered ");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );

    const json = await data.json();
    console.log(json);
    setlistOfRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input
             type="text"
             className="search-box" 
             value = {searchText}
             onChange={(e)=> {
                setsearchText(e.target.value);
              }} 
            />
            <button 
              onClick={()=>{
                //fiter the res card and update UI 
                //search text
                console.log(searchText);

                const filteredRestaurant =listOfRestaurant.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setfilteredRestaurant(filteredRestaurant);

              }}
             >Search
            </button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.1
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
