import { screen,render } from "@testing-library/react";
import { Home } from "./Home";

describe("render Home.jsx",()=>{
    
    test("check for Welcome to PickupBiz p tag",()=>{
        render(<Home />)
        const ptag1=screen.getByText(/Welcome to PickupBiz/i);
        expect(ptag1).toBeInTheDocument();
    })
    test("check for I am Indian p tag",()=>{
        render(<Home />)
        const ptag2 = screen.getByText(/I am Indian/i)
        expect(ptag2).toBeInTheDocument();
    })
    test("check for Maharashtra",()=>{
        render(<Home />);
        const head1 = screen.getByText(/Maharashtra/i)
        expect(head1).toBeInTheDocument();
    })
})