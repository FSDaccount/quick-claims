import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ClaimsTableFull from "./ClaimsTableFull";


jest.mock('../../data/DataFunctions',  () => {
    return {
        getAllClaimsAxiosVersion : () => {
            return Promise.resolve({status: 200, data : ["a","b","c"]});
        },
    }
});


test("Claim status dropdown is displayed when the countries are loaded",async () => {
    render(
        <BrowserRouter>
            <ClaimsTableFull searchTerm="" />
        </BrowserRouter>)
    const claimChanger = await screen.findByRole("combobox",{},2000);
    expect(claimChanger).toBeInTheDocument();

})

