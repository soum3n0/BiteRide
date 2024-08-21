import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// grouping using describe
describe("Contact us test cases", () => {
    test(" Should render", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    });

    //test or it
    it("Should Contains text", () => {
        render(<Contact />);
        const text = screen.getByText('Soumen');
        expect(text).toBeInTheDocument();
    });
});