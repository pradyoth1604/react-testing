import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe("Greet",()=>{
    test("renders Correctly",()=>{
        render(<Greet/>);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })
    
    test("renders name",()=>{
        render(<Greet name="Pradyoth"/>)
        const textElement = screen.getByText(/hello pradyoth/i);
        expect(textElement).toBeInTheDocument();
    })
})