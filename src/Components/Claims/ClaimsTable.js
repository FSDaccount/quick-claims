import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims } from "./DataFunctions";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "../Header/Search";


const ClaimsTable = () => {

    const claimData = getAllClaims();
    
    const [claims, setClaims] = useState([]);

    let[searchParams,setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get("search");
    console.log(searchTerm);

    useEffect(() => {
        loadClaim(searchTerm);
    }, [searchParams]);

    const loadClaim = (searchTerm) => {
        const claim = claimData.filter((claim) => {
            return (
                claim.First_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }); setClaims(claim)
    }



    // setClaims(claimData)

    return (<div>
        <table className="table table-bordered text-center table">
            <thead>
                <th>Id</th>
                <th>First_name</th>
                <th>Surname</th>
                <th>emailAddress</th>
                <th>insuranceType</th>
                <th>coverType</th>
                <th>Amount</th>
                <th>ClaimInfo</th>
                <th>Claim Status </th>
            </thead>
            <tbody>
                {claims.map((claim, index) => {
                    return (
                        //if country is selected, display only that country else display all countries
                        <ClaimsRow
                            key={index}
                            id={claim.id}
                            First_name={claim.First_name}
                            surname={claim.surname}
                            emailAddress={claim.emailAddress}
                            insuranceType={claim.insuranceType}
                            coverType={claim.coverType}
                            amount={claim.amount}
                            claimInfo={claim.claimInfo}
                            claimStatus={claim.claimStatus}
                        />
                    );
                })}
            </tbody>
        </table>
    </div>)



}
export default ClaimsTable;