import React, { useEffect } from "react";

class UserClass extends React.Component {
    constructor(props) {
        // Called first
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log(this.props.name + " Child Constructor");
    }

    componentDidMount() {
        // used for API call like useEffect hook
        // Execute at the end, after all instances, in a batch
        console.log(this.props.name+ " Child componentDidMount");
    }

    render() {
        // execute after constructor
        console.log(this.props.name + " Child Render");
        return (
            <div className="user-container">
                <div>Count: {this.state.count}</div>
                <div>Count2: {this.state.count2}</div>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>Increment</button>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count - 1,
                        count2: this.state.count2 - 1,
                    })
                }}>Decrement</button>
                <div>Name : {this.props.name}</div>
                <div>Location : {this.props.location}</div>
            </div>
        )
    }
}

export default UserClass;