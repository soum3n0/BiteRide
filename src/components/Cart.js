import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useMemo, useCallback } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const clearCartHandle = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const removeItemHandle = useCallback((itemId) => {
        dispatch(removeItem(itemId));
    }, [dispatch]);

    const totalPrice = useMemo(() => 
        cartItems.reduce((acc, item) => acc + (item?.data?.card?.info?.price || item?.data?.card?.info?.defaultPrice || 0), 0) / 100,
        [cartItems]
    );

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center">Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-center">Your cart is empty.</p>
            ) : (
                <>
                    <button onClick={clearCartHandle} className="bg-red-500 px-4 py-2 rounded-md text-white mt-3">
                        Clear Cart
                    </button>
                    <div className="px-10 py-4">
                        {cartItems.map((menu, index) => (
                            <div key={index} className="relative">
                                <Menu data={menu?.data} />
                                <button onClick={() => removeItemHandle(menu.data.card.info.id)} 
                                    className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-xl font-bold mt-4">
                        Total: ₹{totalPrice}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
