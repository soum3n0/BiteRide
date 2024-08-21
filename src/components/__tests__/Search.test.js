import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./MockData/MockRestaurantAPI.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

test("Should render body component using search button", async () => {
    await act(async () => {
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>);
    });

    const searchBtn = screen.getByTestId("searchBtn");
    expect(searchBtn).toBeInTheDocument();
});

test("Should render body component with search", async () => {
    await act(async () => {
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>);
    });

    const searchInput = screen.getByPlaceholderText(/search/i);
    const searchBtn = screen.getByTestId("searchBtn");
    fireEvent.change(searchInput, {target : { value: "momo"}});
    fireEvent.click(searchBtn);

    const filteredRes = screen.getAllByTestId("resCard");
    expect(filteredRes.length).toBeGreaterThan(0); 
})