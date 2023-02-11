import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims } from "../../data/DataFunctions";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "../Header/Search";


const ClaimsTable = () => {

    const claimData = getAllClaims();

    const [claims, setClaims] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();

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
                <th>policy_Number</th>
                <th>Full_name</th>
                <th>insurnceType</th>
                <th>coverType</th>
                <th>amount</th>
                <th>ClaimReason</th>
                <th>ClaimInfo</th>
                <th>ClaimStatus</th>
                <th>ClaimDate</th>
                <th>Address</th>
                <th>CarMake</th>
                <th>CarModel</th>
                <th>YearOfManufacture</th>
                <th>TypeOfAnimal</th>
                <th>BreedAnimal</th>
                <th>View details</th>
            </thead>
            <tbody>
                {claims.map((claim, index) => {
                    return (
                        //if country is selected, display only that country else display all countries
                        <ClaimsRow
                            key={index}
                            PolicyNumber={claim.PolicyNumber}
                            fullName={claim.fullName}
                            insuranceType={claim.insuranceType}
                            coverType={claim.coverType}
                            amount={claim.amount}
                            claimReason={claim.claimReason}
                            claimInfo={claim.claimInfo}
                            claimStatus={claim.claimStatus}
                            claimDate={claim.claimDate}
                            address={claim.address}
                            carMake={claim.carMake}
                            carModel={claim.carModel}
                            yearOfManufacture={claim.yearOfManufacture}
                            typeOfAnimal={claim.typeOfAnimal}
                            breedAnimal={claim.breedAnimal}
                        />
                    );
                })}
            </tbody>
        </table>
    </div>)



}
export default ClaimsTable;