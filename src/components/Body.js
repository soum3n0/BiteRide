import Cards from "./Cards";
// import { bannerList, resList } from "../utils/mockData";
import Banner from "./Banner";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import MyContext from "../utils/MyContext";
import HorizontalCards from "./HorizontalCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [listOfBanners, setListOfBanners] = useState([]);
    const [slide, setSlide] = useState(0);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    // const data = useContext(MyContext);
    useEffect(() => {
        fetchData();
        const checkScreenSize = () => {
            setIsMediumScreen(window.innerWidth >= 768); // Tailwind's md breakpoint is 768px
        };

        // Check screen size on initial render
        checkScreenSize();

        // Add event listener to update screen size on resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    const translateValue = isMediumScreen ? slide * 55 : slide * 70;

    const nextSlide = () => {
        if (
            (slide === -7 && !isMediumScreen) ||
            (slide === -2 && isMediumScreen)
        ) {
            return; // Do nothing if at the end of slides
        } else {
            setSlide(slide - 1);
        }
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        if (slide === 0) return; // Do nothing if at the start of slides
        setSlide(slide + 1);
    };

    const fetchData = async () => {
        const data = await fetch(API, {
            headers: {
                "x-cors-api-key": "temp_94232cce67beb712be1362cbfd52cc05",
            },
        });
        const json = await data.json();
        console.log(json);
        const restaurant =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];
        const banner =
            json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
                ?.info || [];
        setListOfRestaurants(restaurant);
        setFilteredList(restaurant);
        setListOfBanners(banner);
    };

    if (useOnlineStatus() === false) {
        return <h1>Oops connection lost!! Please try agein</h1>;
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    // console.log(listOfRestaurants);
    return (
        <div className="p-12 mx-8">
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">What's on your mind?</h1>
                </div>
                <div className="flex overflow-x-auto flex-nowrap mx-4">
                    {listOfBanners.map((banner) => (
                        <Banner key={banner.id} bannerData={banner} />
                    ))}
                </div>
            </div>
            <div className="pt-12">
                <div className="h-[2px]  bg-gray-200 m-auto mb-10"></div>
                <div className="m-auto my-6">
                    <div className="flex my-4 items-center justify-between w-full">
                        <div className="md:text-2xl text-xl font-bold ml-4">
                            Top restaurant chains
                        </div>
                        <div className="flex gap-2">
                            <div
                                onClick={prevSlide}
                                className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
                            >
                                <FaArrowLeft />
                            </div>

                            <div
                                onClick={nextSlide}
                                className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
                            >
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="relative w-11/12 mx-auto overflow-hidden">
                        <div
                            style={{
                                transform: `translateX(${translateValue}%)`,
                            }}
                            className="flex  transition-transform duration-500"
                        >
                            {listOfRestaurants.map((res) => (
                                <Link
                                    key={res.info.id}
                                    to={"restaurant/" + res.info.id}
                                >
                                    <HorizontalCards resData={res} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-[2px] bg-gray-200 m-auto mb-10"></div>

                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-2xl ml-4">
                        Restaurants with online food delivery
                    </h1>
                </div>

                <div>
                    <div className="py-4 flex gap-4 items-center justify-center">
                        <button
                            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
                            onClick={() => {
                                let filteredList = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4.2
                                );
                                setFilteredList(filteredList);
                            }}
                        >
                            Ratings 4.2+
                        </button>
                        <button
                            onClick={() => {
                                // Filter restaurants with discounts
                                const filteredList = listOfRestaurants.filter(
                                    (res) => {
                                        const aggregatedDiscountInfo =
                                            res?.info?.aggregatedDiscountInfoV3;
                                        if (
                                            aggregatedDiscountInfo &&
                                            (aggregatedDiscountInfo.header ||
                                                aggregatedDiscountInfo.subHeader)
                                        ) {
                                            const tag =
                                                (aggregatedDiscountInfo.header ||
                                                    "") +
                                                (aggregatedDiscountInfo.subHeader ||
                                                    "");
                                            return tag;
                                        }
                                        return false;
                                    }
                                );
                                setFilteredList(filteredList);
                            }}
                            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
                        >
                            Fast Delivery
                        </button>

                        <button
                            onClick={() => {
                                // Filter restaurants that are pure veg
                                const filteredList = listOfRestaurants.filter(
                                    (res) => {
                                        const badges =
                                            res?.info?.badges?.imageBadges;
                                        if (badges && badges.length > 0) {
                                            const description =
                                                badges[0]?.description;
                                            return description === "pureveg";
                                        }
                                        return false;
                                    }
                                );
                                setFilteredList(filteredList);
                            }}
                            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
                        >
                            Pure Veg
                        </button>

                        <button
                            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
                            onClick={() => {
                                setFilteredList(listOfRestaurants);
                            }}
                        >
                            See all Restaurants
                        </button>

                        <div>
                            <input
                                type="text"
                                id="search-text"
                                className="pl-4 pr-10 py-2 rounded-full focus:outline-none border-2 text-gray-700 hover:border-black"
                                placeholder="Search.."
                            />
                            <button
                                data-testid="searchBtn"
                                className="ml-2 text-slate-400"
                                onClick={() => {
                                    let value =
                                        document.querySelector(
                                            "#search-text"
                                        ).value;
                                    const filteredRestaurants =
                                        listOfRestaurants.filter((res) =>
                                            res.info.name
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                        );
                                    if (filteredRestaurants.length === 0) {
                                        alert("Not Found");
                                    }
                                    setFilteredList(filteredRestaurants);
                                }}
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 place-items-center w-11/12 m-auto">
                        {(filteredList || []).map((restaurant) => (
                            /* if restaurant is promoted then we use higher order componant - which take componentas input and gives component as output */
                            <Link
                                to={"/restaurant/" + restaurant.info.id}
                                key={restaurant.info.id}
                            >
                                <Cards resData={restaurant} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
