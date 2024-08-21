import UserClass from "./UserClass";
import { Component } from "react";
import MyContext from "../utils/MyContext";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount (){
        console.log("Parent componentDidMount")
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="px-8 m-8">
                <h1>Foodiee : Online Food ordering website</h1>
                <MyContext.Consumer>{(data)=>
                    <div>Username : {data.username}</div>
                }</MyContext.Consumer>
                <UserClass name={"Soumen"} location={"Amral"} />
                <UserClass name={"Kousik"} location={"Amral"} />
            </div>
        )
    }
}

export default About;