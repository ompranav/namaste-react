import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo , setresInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    useEffect( () =>{
        fetchMenu();
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API +resId);
        
        const json = await data.json();
        
        setresInfo(json);
    };

    if(resInfo===null) return <Shimmer/>
    const{name,cuisines,avgRating} =resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);





    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h2>{"Ratings : " +avgRating }</h2>
            <h2>Menu </h2>
            <ul>
                {itemCards.map((item) =>(
                  <li key = {item.card.info.id}>
                     {item.card.info.name}-  {"Rs "}
                     { item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>))}
                
            </ul>
        </div>

        
    );
};

export default RestaurantMenu;