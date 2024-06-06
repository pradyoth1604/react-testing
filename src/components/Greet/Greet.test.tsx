import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test("Greet renders react",()=>{
    render(<Greet name="pradyoth"/>)
    const textElement = screen.getByText(/hello pradyoth/i);
    const text = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
    expect(text).toBeInTheDocument();
})