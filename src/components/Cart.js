import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import {clearCart} from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearCartHandle = ()=>{
        dispatch(clearCart());
    }

    return (
        <div>
            <button onClick={clearCartHandle} className="bg-blue-500 m-3 px-4 rounded-md text-white">ClearCart</button>
            <div className="px-20 pb-2 mx-28">
                {cartItems.map((menu, index) => (
                    <Menu key={index} data={menu?.data} />
                ))}
            </div>
        </div>
    )
}

export default Cart;