import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const heading = React.createElement("h1", {id:"heading" }, "Namaste React");
const jsxHeading =<h1 id="heading"> Namaste React using JSX </h1>










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