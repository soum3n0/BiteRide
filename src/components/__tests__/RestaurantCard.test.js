const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Cards from "../Cards";
import MOCK_DATA from "./MockData/MockRestaurantCardData.json";
import "@testing-library/jest-dom";

test("should render restaurant card with props data", () => {
    render(
        <BrowserRouter>
            <Cards resData={MOCK_DATA} />
        </BrowserRouter>
    );

    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
})