import { useParams } from "react-router-dom";

// import Menu from "./Menu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCatagory from "./MenuCatagory";
import MenuShimmer from "./MenuShimmer";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showMenuIndex, setShowMenuIndex] = useState(0);
    const { resId } = useParams();
    // const [resInfo, setResInfo] = useState(null);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(RES_MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json?.data);
    // }

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <MenuShimmer/>;

    const { name, avgRating, totalRatingsString, areaName, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    // const menuList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const menuCatagories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>
        res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(menuCatagories);
    return (
        <div className="mx-24 my-14">
            <div>
                <h1 className="font-bold text-2xl">{name}</h1>
                <div className="border border-black border-solid rounded-xl my-5 p-3 flex flex-col gap-3">
                    <div>
                        <span className="p-0.5 rounded bg-green-600 mr-2">
                            <span className="pr-0.5">{avgRating}</span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="font-bold">{"(" + totalRatingsString + ")"} - {costForTwoMessage}</span>
                    </div>
                    <div className="font-bold text-orange-500">{cuisines.join(", ")}</div>
                    <div>
                        <span className="font-bold pr-2">Outlet</span>
                        <span>{areaName}</span>
                    </div>
                </div>
            </div>


            {/* Controlled component */}
            {menuCatagories.map((catagory, index)=>(
                <MenuCatagory key={index} data={catagory} value={showMenuIndex === index} setShowMenuIndex={() => {
                    // If already open, then close, if not then open that catagory and close other
                    (index===showMenuIndex) ? setShowMenuIndex(-1) : setShowMenuIndex(index);
                }}/>
            ))}


        </div>
    )
}

export default RestaurantMenu;