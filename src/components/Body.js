import Cards from "./Cards";
// import { bannerList, resList } from "../utils/mockData";
import Banner from "./Banner";
import { useContext, useEffect, useState } from "react";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import MyContext from "../utils/MyContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [listOfBanners, setListOfBanners] = useState([]);
    const data = useContext(MyContext);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API, {
            headers: {
                'x-cors-api-key': 'temp_94232cce67beb712be1362cbfd52cc05'
            }
        });
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfBanners(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    };

    if (useOnlineStatus() === false) {
        return (
            <h1>Oops connection lost!! Please try agein</h1>
        )
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }

    console.log(filteredList);
    return (
        <div className="p-12 mx-8">
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">What's on your mind?</h1>
                    <a href="#" className="next round">&#8250;</a>
                </div>
                <div className="flex overflow-x-auto flex-nowrap mx-4">
                    {/* <a href="#">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" />
                    </a>
                    <a href="#">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png" />
                    </a> */}

                    {/* loops/maps and use keys for all food types */}

                    {/* {bannerList.map((banner) => (
                        <Banner key={banner.id} bannerData={banner} />
                    ))} */}

                    {listOfBanners.map((banner) => (
                        <Banner key={banner.id} bannerData={banner} />
                    ))}
                </div>
            </div>
            <div className="pt-12">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl">Restaurants with online food delivery</h1>
                    {/* <input placeholder="Change username.." className="px-4 py-2 rounded-full border-2 text-gray-700" onChange={(e)=> data.setUserName(e.target.value)}></input>
                    <span>username : {data.username}</span> */}
                </div>
                <div className="px-4">
                    <div className="py-4 flex gap-4 items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                            let filteredList = listOfRestaurants.filter((res) => (
                                res.info.avgRating > 4.2
                            ))
                            setFilteredList(filteredList);
                        }}>Top Rated Restaurants</button>

                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                            setFilteredList(listOfRestaurants);
                        }}>See all Restaurants</button>

                        <div>
                            <input type="text" id="search-text" className="pl-4 pr-10 py-2 rounded-full focus:outline-none border-2 text-gray-700 hover:border-black" placeholder="Search.." />
                            <button data-testid="searchBtn" className="ml-2 text-slate-400" onClick={() => {
                                let value = document.querySelector("#search-text").value;
                                const filteredRestaurants = listOfRestaurants.filter((res) => (
                                    res.info.name.toLowerCase().includes(value.toLowerCase())
                                ))
                                if (filteredRestaurants.length === 0) {
                                    alert("Not Found");
                                }
                                setFilteredList(filteredRestaurants);
                            }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-around">
                        {/* <Cards resData={resList.restaurants[0]}/>
                    <Cards resData={resList.restaurants[1]}/>
                    <Cards resData={resList.restaurants[2]}/>*/}

                        {/* loops/maps and use keys for all resturants */}

                        {filteredList.map((restaurant) => (
                            /* if restaurant is promoted then we use higher order componant - which take componentas input and gives component as output */
                            <Cards key={restaurant.info.id} resData={restaurant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Body;