import { useState } from "react";

const User = (Props) => {
    const [count , setcount] = useState(0);
    const[count2,setcount2]  = useState(2);

    return(
        <div className="user-card">
        <h2>Name:{Props.name}</h2>
        <h3>Count : {count}</h3>
        <h3>Count2 : {count2}</h3>

        <h3>Location: {Props.location}</h3>
        <h4>Contact:@ompranav </h4>


        </div>
    );
};

export default User;