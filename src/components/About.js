import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="px-8 m-8">
                <div className="md:w-6/12 flex flex-col md:gap-2 gap-4">
                    <h1 className="font-extrabold word-tight text-3xl">
                        BiteRide
                    </h1>
                    <h4 className="w-full font-bold text-lg text-[#676a6d]">
                        Explore food from the famous food brands.
                    </h4>
                    <p className="w-full text-[#676a6d] ">
                        Exploring the culinary treasures from renowned food
                        brands near you is like embarking on a delightful
                        gastronomic adventure. Discover the top brands offering
                        a wide array of delicious options that cater to various
                        tastes and preferences. From classic comfort foods to
                        gourmet indulgences, you can savour the flavours that
                        have captured the hearts of countless food enthusiasts.{" "}
                        <br />
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
