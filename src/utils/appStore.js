import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantReducer from "./restaurantSlice";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        restaurantData: restaurantReducer,
    }
});

export default appStore;