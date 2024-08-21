import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Cards = (props) => {
    // const {name,rating} = props;
    const {resData} = props;
    const {name, avgRating, cuisines, id, sla, cloudinaryImageId, costForTwo} = resData.info;
    return (
        <Link data-testid="resCard" to={"/restaurant/"+ id} className="h-80 w-64 my-4 p-3 bg-slate-200 rounded-xl hover:border hover:border-black hover:p-4 flex flex-col justify-around">
            <img className="w-full h-3/5 rounded-xl" src={CDN_URL + cloudinaryImageId}/>
            <h1 className="font-bold">{name}</h1>
            <div className="flex justify-around">
                <span className="p-0.5 rounded bg-green-600">
                    <span className="pr-0.5">{avgRating}</span>
                    <i className="fa-solid fa-star"></i>
                </span>
                <span className="font-medium">{"- "+sla.deliveryTime + " mins -"}</span>
                <span className="font-medium">{costForTwo}</span>
            </div>
            <h6 className="font-light">{cuisines.join(", ")}</h6>
        </Link>
    )
};

export default Cards;