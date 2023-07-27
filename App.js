import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id:"heading" }, "Namaste React");
const jsxHeading =<h1 id="heading"> Namaste React using JSX </h1>

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://www.designevo.com/res/templates/thumb_small/quick-takeaway-icon.webp" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard =() => {
    return (
        <div className="res-card">
            <img className ="res-logo" src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv" />
            <h3>Meghana Foods</h3>
           
            <h4>4.4 Star</h4>
            <h4>15 minutes</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        < div className = "app" >
            <Header />
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);