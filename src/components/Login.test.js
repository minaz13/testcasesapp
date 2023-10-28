import { render,screen } from "@testing-library/react";
import { Login } from "./Login";

describe("rendor the login components",()=>{
    test('render the email',()=>{
        render(<Login />)
        const email = screen.getByPlaceholderText("Enter Email");
        expect(email).toBeInTheDocument();
    });
    test("render the password",()=>{
        render(<Login />)
        const password = screen.getByPlaceholderText("Enter Password");
        expect(password).toBeInTheDocument();
    });
    test('render the submit',()=>{
        render(<Login />)
        const submit = screen.getByText("Submit");
        expect(submit).toBeInTheDocument();
    });
    test('render the reset',()=>{
        render(<Login />)
        const reset = screen.getByText("Reset");
        expect(reset).toBeInTheDocument();
    }); 
    test("render 2 buttons on the login components",async ()=>{
        render(<Login/>)
        const btns =await screen.findAllByRole("button");
        expect(btns).toHaveLength(2)

    })
})