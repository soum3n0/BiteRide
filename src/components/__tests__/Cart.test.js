import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./MockData/MockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
})

test("Should render RestaurantMenu", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <Cart/>
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ));

    const addBtn = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtn[0]);
    const cart = screen.getByTestId("cart");
    expect(cart).toBeInTheDocument();
    fireEvent.click(cart);
    expect(screen.getByRole("button", { name: "ClearCart" })).toBeInTheDocument();
    expect(screen.getAllByTestId("menuItem").length).toBe(15);
})