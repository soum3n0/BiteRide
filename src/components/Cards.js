import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const Cards = (props) => {
    // const {name,rating} = props;
    const { resData } = props;
    return (
        <div className="p-4">
            <div className="h-[182px] w-[273px] rounded-lg overflow-hidden relative">
                <img
                    className="object-cover h-full w-full rounded-2xl  "
                    src={CDN_URL + resData?.info?.cloudinaryImageId}
                    alt="image"
                />
                <div
                    className="content-end image-overlay font-extrabold
      h-[182px] w-[273px] absolute top-0 rounded-2xl text-xl word-tight
       py-2 px-4 text-gray-100"
                >
                    {resData?.info?.aggregatedDiscountInfoV3?.header
                        ? resData?.info?.aggregatedDiscountInfoV3?.header
                        : ""}
                    {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
                </div>
            </div>
            <div className="p-4">
                <div className="font-semibold text-slate-800">
                    {resData?.info?.name?.slice(0, 25)}...
                </div>
                <div className="flex  items-center">
                    <MdStars size={20} color="red" />
                    <span className="ml-1 ">{resData?.info?.avgRatingString}</span>
                    <span className="bg-black rounded-full w-[5px] h-[5px] content-center mx-1"></span>
                    <span className="font-semibold text-slate-800">
                        {resData?.info?.sla?.slaString}
                    </span>
                </div>
                <div className="text-zinc-500 font-medium ">
                    {resData?.info?.cuisines.join(", ").slice(0, 24)}...
                </div>
                <div className="text-zinc-500 font-medium ">{resData?.info?.areaName}</div>
            </div>
        </div>
    );
};

export default Cards;
