import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test("Greet renders Correctly",()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})

test("Greet renders react",()=>{
    render(<Greet name="pradyoth"/>)
    const textElement = screen.getByText(/hello pradyoth/i);
    expect(textElement).toBeInTheDocument();
})