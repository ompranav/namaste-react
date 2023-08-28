import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("child UserClass constructor() called ")
        //creating local state variables in class component 
        this.state = {
            count : 0 ,
            userInfo : {
                name :"Random" ,
                location :"dummy"
            }
      
        };
    }
    
    async componentDidMount(){
        console.log("child UserClass componentDidMount() Called ")
        const data = await fetch("https://api.github.com/users/ompranav");
        const json = await data.json();
        this.setState({
            userInfo :json
        });

        console.log(json);
    }
    

    render() {
        console.log("child UserClass render() called ");
        const{name, location ,avatar_url ,login} = this.state.userInfo;
        const {count } = this.state;
        return(
            <div className="user-card-class">
                
                <img src = {avatar_url} />

                
              
                <h2>Name:{name}</h2>
                <h3>Gihub user name : {login}</h3>
                <h3>Location: {location}</h3>
                <h5>The above data is fetched from github api in class based component  </h5>

            </div>
        );
    };
};

export default UserClass;
