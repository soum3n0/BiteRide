import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurantData",
    initialState: {
        restaurants: [],
        banners: []
    },
    reducers: {
        updateRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
        updateBanners: (state, action) => {
            state.banners = action.payload;
        }
    }
});

export const { updateRestaurants, updateBanners } = restaurantSlice.actions;
export default restaurantSlice.reducer;
