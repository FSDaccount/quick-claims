import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims, getAllClaimsAxiosVersion, getAllClaimsFetchVersion } from "../../data/DataFunctions";
import { claimData } from "../../data/DataFunctions";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Button } from "bootstrap";


const ClaimsTableFull = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [uniqueClaimStatus, setUniqueClaimStatus] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getAllClaimsAxiosVersion().then((response) => {
            setClaims(response.data);
            console.log(response.data);
            const allclaimStatus = response.data.map(claim => claim.claimStatus);
            setUniqueClaimStatus(allclaimStatus.filter(
                (claimStatus, index) => allclaimStatus.indexOf(claimStatus) === index));
            //         setselectedClaimStatus(uniqueClaimStatus[0]);
            console.log(uniqueClaimStatus);
        })
    }, []);

    useEffect(() => {
        setselectedClaimStatus(uniqueClaimStatus[0]);

    }, [uniqueClaimStatus]);





    //selective variable 
    const [selectedClaimStatus, setselectedClaimStatus] = useState("")
    console.log(selectedClaimStatus);

    const changeClaimStatus = (event) => {
        const option = event.target.options.selectedIndex;
        setselectedClaimStatus(uniqueClaimStatus[option]);
    }


    return (<div className="container">

        <div className="ClaimStatusSelector">
            Select claim Status :
            <select className="claimChanger" onChange={changeClaimStatus}>

                {uniqueClaimStatus.map(claimStatus => <option key={claimStatus} value={claimStatus}>{claimStatus}</option>)}
            </select>
        </div>

        <table className="table table-bordered text-center table">
            <thead>
                <tr>
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
                </tr>
            </thead>
            <tbody>
                {claims.map((claim, index) => {
                    return claim.claimStatus === selectedClaimStatus && (
                        //if country is selected, display only that country else display all countries
                        <ClaimsRow
                            key={index}
                            id={claim.id}
                            policyNumber={claim.policyNumber}
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
                }, <Button>View</Button>)}
            </tbody>
        </table>
    </div>)



}
export default ClaimsTableFull;