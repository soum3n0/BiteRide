import React from "react";
import Cards from "./Cards";

const HorizontalCards = ({ resData }) => {
    // Destructure aggregated discount info from resData
    const { aggregatedDiscountInfoV3 } = resData;

    console.log(resData);
    return (
        <div className="relative">
            {/* Render the RestaurantCard component with the provided resData */}
            <Cards resData={resData} />

            {/* Overlay displaying discount information */}
            <div
                className="content-end ml-4 mt-4 image-overlay font-extrabold
      h-[182px] w-[273px] absolute top-0 rounded-2xl text-xl word-tight
      py-2 px-4 text-gray-100"
            >
                {/* Display the header and subHeader of the aggregated discount info */}
                {aggregatedDiscountInfoV3?.header
                    ? aggregatedDiscountInfoV3.header
                    : ""}
                {aggregatedDiscountInfoV3?.subHeader}
            </div>
        </div>
    );
};

export default HorizontalCards;
