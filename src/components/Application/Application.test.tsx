import { Application } from "./Application";
import { render,screen } from "@testing-library/react";

describe("Renders Correctly",()=>{
    test("renders Input Box",()=>{
        render(<Application/>);

        const headingElement = screen.getByRole("heading",{
            level:1
        });
        expect(headingElement).toBeInTheDocument();

        const sectionElement = screen.getByRole("heading",{
            level:2
        });
        expect(sectionElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})