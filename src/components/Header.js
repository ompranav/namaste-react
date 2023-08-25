import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState , useEffect } from "react";


const Header = () => {
    const [btnName, setbtnName] = useState("Login"); 
    useEffect(()=> {

    } ,[btnName]);
    return(
        <div className="header">
            <div className="logo-container">
                <img src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li>
                       <Link to = "/cart">Cart</Link> 
                    </li>
                    <button className="login"
                        onClick={()=>{
                            btnName=="Login"
                            ?setbtnName("Logout")
                            :setbtnName("Login") 
                        }}

                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;