import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import {getAllClaimsAxiosVersion } from "../../data/DataFunctions";

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { Button } from "bootstrap";
import { UserContext } from "../../contexts/UserContext";


const ClaimsTableFull = (props) => {

    const [claims, setClaims] = useState([]);
    const [uniqueClaimStatus, setUniqueClaimStatus] = useState([]);
    const context = useContext(UserContext);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        getAllClaimsAxiosVersion(context.user.name,context.user.password).then((response) => {
            console.log("response",response);
            setClaims(response.data);
          
            const allclaimStatus = response.data.map(claim => claim.claimStatus);
            setUniqueClaimStatus(allclaimStatus.filter(
                (claimStatus, index) => allclaimStatus.indexOf(claimStatus) === index));
            //         setselectedClaimStatus(uniqueClaimStatus[0]);
            console.log(uniqueClaimStatus);
        })
        .catch((error) => {
            console.log(error, "error");
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
                    return claim.claimStatus === selectedClaimStatus && (
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
                        
                            claimNotes={claim.claimNotes}
                        />
                    );
                   
                },
                 <Button>View</Button>
                 )}
            </tbody>
        </table>
    </div>)



}
export default ClaimsTableFull;