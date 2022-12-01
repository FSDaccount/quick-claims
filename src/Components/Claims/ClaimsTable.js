import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims } from "./DataFunctions";

import { useEffect, useState } from "react";



const ClaimsTable = () => {

    const claimData = getAllClaims();

    const [claims,setClaims] = useState([]);

     useEffect(() => {
        loadClaim();
     }, []);

     const loadClaim  = () => {
     setClaims(claimData)
    };

    // setClaims(claimData)

    return (<div>
        <table  class="table table-bordered text-center table">
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
                        id= {claim.id}
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