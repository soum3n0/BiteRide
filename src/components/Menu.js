import { MENU_IMG_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Menu = (props) => {
    const { name, defaultPrice, price, description, imageId, ratings } = props?.data?.card?.info;
    const { rating, ratingCountV2 } = ratings?.aggregatedRating;
    const dispatch = useDispatch();
    const handleAddItems = ()=>{
        dispatch(addItem(props)); 
    }

    return (
        <div data-testid="menuItem" className="grid grid-cols-4 gap-4 shadow-md p-4 py-6 my-4 rounded-2xl">
            <div className="flex flex-col gap-3 col-span-3">
                <div>
                    <h1 className="font-bold text-gray-800">{name}</h1>
                    <div className="font-bold text-gray-800">{"₹ " + (defaultPrice || price) / 100}</div>
                </div>
                {ratingCountV2 && <div>
                    <i className="fa-solid fa-star mr-1 text-gray-700"></i>
                    <span className="mr-2 font-bold text-gray-700">{rating}</span>
                     <span className="font-bold text-gray-700">({ratingCountV2})</span> 
                </div>}
                <div className="text-gray-500">{description}</div>
            </div>
            <div className=" flex justify-center items-center relative">
                <button className="bg-white text-green-600 font-bold text-xl absolute px-6 py-1 rounded-lg -bottom-2 shadow-md" 
                onClick={handleAddItems}>ADD</button>
                {imageId ? <img src={MENU_IMG_LINK + imageId} alt="Not Available" className="w-36 h-32 rounded-lg object-cover" />:<div></div>}
            </div>
        </div>
    )

};

export default Menu;