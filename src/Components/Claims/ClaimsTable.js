import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims, getAllClaimsAxiosVersion, getClaimById, searchClaimsAxiosVesrion } from "../../data/DataFunctions";

import { useSearchParams } from "react-router-dom";
import Search from "../Header/Search";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";


const ClaimsTable = (props) => {

    const [claims, setClaims] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();
    const context = useContext(UserContext);

    useEffect(() => {
        const searchTerm = searchParams.get("search");
        console.log(searchTerm);
        if (searchTerm === null) {
            getAllClaimsAxiosVersion(context.user.name, context.user.password).then((response) => {
                console.log("response", response);
                setClaims(response.data);
                loadClaim(searchTerm);
            });
        }
        else
            searchClaimsAxiosVesrion(context.user.name, context.user.password, searchTerm).then((response) => {
                console.log("response", response);
                setClaims(response.data);
            });
    }, [searchParams]);



    const loadClaim = (searchTerm) => {
        const claim = claims.filter((claim) => {
            return (
                claim.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }); setClaims(claim)
    }



    // setClaims(claimData)

    return (<div className="container">
        <table className="table table-bordered text-center table">
            <thead>
                <tr>
                <th>Id</th>
                <th>policy Number:</th>
                <th>Full Name:</th>
                <th>Insurance Type:</th>
                <th>Claim Amount:</th>
                <th>Claim Reason:</th>
                <th>Claim Info:</th>
                <th>Claim Status:</th>
                <th>Claim Date:</th>
                <th>View Details:</th>
                </tr>
            </thead>
            <tbody>
                {claims.map((claim, index) => {
                    return (
                        //if country is selected, display only that country else display all countries
                        <ClaimsRow
                            key={index}
                            id={claim.id}
                            policyNumber={claim.policyNumber}
                            fullName={claim.fullName}
                            insuranceType={claim.insuranceType}
                            amount={claim.amount}
                            claimReason={claim.claimReason}
                            claimInfo={claim.claimInfo}
                            claimStatus={claim.claimStatus}
                            claimDate={claim.claimDate}
                        />
                    );
                })}
            </tbody>
        </table>
    </div>)



}
export default ClaimsTable;