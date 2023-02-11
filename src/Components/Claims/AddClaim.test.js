import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddClaim from "./AddClaim";
import userEvent from "@testing-library/user-event";

jest.mock('../../data/DataFunctions',  () => {
    return {
        addNewClaim : (a,b,c) => {
            return Promise.resolve({status: 200, data : ["a","b","c"]});
        },

        updateClaim : (a,b,c) => {
            return Promise.resolve({status: 200, data : ["a","b","c"]});
        }

        
    }

    
});

test("Message appears when claim is saved",async () => {
    render(
        <BrowserRouter>
            <AddClaim />
        </BrowserRouter>)

        const submitButton = screen.getByRole("button");
        userEvent.click(submitButton);
        const message = await screen.findByText("New Claim Added", {}, 2000);
    expect(message).toBeInTheDocument();

})