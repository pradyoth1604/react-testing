import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("renders",()=>{
    let skills = ["html", "Css", "JavaScript"];
    test("renders correctly",()=>{
        // screen.debug();
        render(<Skills skills={skills} />)
        const skillsElement = screen.getByRole("list");
        expect(skillsElement).toBeInTheDocument();

        const skillsElements = screen.getAllByRole("listitem");
        expect(skillsElements).toHaveLength(skills.length);
        // screen.debug();
    });
    
    test("renders Login Button",()=>{
        render(<Skills skills={skills}/>);
        const logInButtonElement = screen.getByRole("button",
        {name:"LogIn"});
        expect(logInButtonElement).toBeInTheDocument();
    });
    test("renders StartLearning Button",()=>{
        render(<Skills skills={skills}/>);
        const startLearningButton = screen.queryByRole("button",{
            name : "StartLearning"
        })
        expect(startLearningButton).not.toBeInTheDocument();
    });
    test('toggles login state on button click', () => {
        const skills = ['HTML', 'CSS', 'JavaScript'];
        render(<Skills skills={skills} />);
      
        // Initial state should show "Log In" button
        const loginButton = screen.getByText('LogIn');
        expect(loginButton).toBeInTheDocument();
      
        // Click the "Log In" button
        fireEvent.click(loginButton);
      
        // After clicking, it should show "Start Learning" button
        const startLearningButton = screen.getByText('StartLearning');
        expect(startLearningButton).toBeInTheDocument();
      });

    test("StartLearning Button eventually displayed", async ()=>{
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        const startLearningButtonEle = await screen.findByRole("button",{name:"StartLearning"},{timeout:2000});
        expect(startLearningButtonEle).toBeInTheDocument();
    })
})