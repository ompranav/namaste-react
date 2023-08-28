import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//commenting functional component and creating class base component 
// const About = () => {
//     return (
        
//         <div>
          
//             <h1>About Us</h1> 
//             <h2>This  is a food deliery app build using API of swiggy </h2>
//            {/* // <User name ={"Om Pranav (functional)" } location = {"Bangalore (functional)"} /> */}
//             <UserClass name= {"Om Pranav (class)"}  location = {"Bangalore (class)"}/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent About  constructor() called  ");
    }

    async componentDidMount() {
        console.log("parent About componentDidMount() called ");
        
    }

    render (){

        console.log("parent About render() called ");
        return(
        <div>
            <UserClass name={"Om Pranav (class)"} location={"Bangalore (class)"} />
            
        </div>
        
        )
    }

}

export default About;