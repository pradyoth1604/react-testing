import { logRoles, render,screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter",()=>{
    test("renders correctly",() => {
        const view = render(<Counter/>);
        logRoles(view.container)
    })
})