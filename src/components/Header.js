import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
    const [login, setLogin] = useState("Login");

    // Subscribing to the stoe using selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between items-center sticky top-0 w-full shadow-md px-8 bg-white z-10">
            <a className="logo">
                <img className="w-12" src={LOGO_URL} />
            </a>

            {/* Search */}

            <ul className="flex items-center">
                <li className="m-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="m-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="m-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="m-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
               
                <Link to="/cart" data-testid="cart">
                    <li className=" flex gap-x-2  ">
                        <div className="relative">
                            <BsCartPlusFill className="w-5 h-5" />
                            {(cartItems.length != 0) && <div
                                className="absolute bottom-4 left-3 flex items-center justify-center
               w-4 h-4 bg-red-600 text-white text-xs rounded-full "
                            >
                                {cartItems.length}
                            </div>}
                        </div>
                        Cart
                    </li>
                </Link>
                <li className="m-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            login === "Login"
                                ? setLogin("Logout")
                                : setLogin("Login");
                        }}
                    >
                        {login}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
