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



const RestaurantCard =(props) => {
    const {resData} = props;
    return (
        <div className="res-card">
            <img className ="res-logo" src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{ props.resData.info.name}</h3>
           
            <h4>{props.resData.info.cuisines.join(" , ")}</h4>
            <h4>{props.resData.info.avgRating}</h4>

        </div>
    )
}

const resObj = {
    "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "5934",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=7635746~p=1~eid=00000189-ac47-2c0c-0082-d9d80086016d~srvts=1690812492812~45995",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-01 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=5934",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    } ;


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard  
                resData = {resObj}
                />
               
                
                
                
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