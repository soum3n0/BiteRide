import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../utils/MyContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [login, setLogin] = useState("Login");
    // const data = useContext(MyContext);

    // Subscribing to the stoe using selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between items-center sticky top-0 w-full shadow-md px-8 my-8 bg-white z-10">
            <a className="logo">
                <img className="w-12" src={LOGO_URL} />
            </a>

            {/* Search */}

            <ul className="flex items-center">
                {/* <li className="m-4">username : {data.username}</li> */}
                <li className="m-4"><Link to="/">Home</Link></li>
                <li className="m-4"><Link to="/grocery">Grocery</Link></li>
                <li className="m-4"><Link to="/about">About Us</Link></li>
                <li className="m-4"><Link to="/contact">Contact Us</Link></li>
                <li className="m-4">
                    <Link to="/cart" data-testid="cart">Cart [{cartItems.length}] <i className="fa-solid fa-cart-shopping"></i></Link>
                </li>
                <li className="m-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
                        (login === "Login") ?
                            setLogin("Logout") : setLogin("Login");
                    }}>{login}</button>
                </li>
            </ul>
        </div>
    )
};

export default Header;