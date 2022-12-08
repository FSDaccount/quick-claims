import ClaimsRow from "./ClaimsRow";
import './Claims.css';
import { getAllClaims } from "./DataFunctions";

import { useEffect, useState } from "react";



const ClaimsTable = (props) => {

    const [claims,setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        loadClaim();
     }, []);



     useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaims(props.searchTerm)
                .then( response => {
                        setClaims(response.data);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong", error);
                })
        }

    }, [props.searchTerm]  );



    const claimData = getAllClaims();
    const allclaimStatus = claimData.map(claim => claim.claimStatus);
    const uniqueClaimStatus = allclaimStatus.filter(
        (claimStatus,index) => allclaimStatus.indexOf(claimStatus) ===index); 
    console.log(uniqueClaimStatus);

    
    //selective variable 
    const [selectedClaimStatus,setselectedClaimStatus] = useState(uniqueClaimStatus[0])

    const changeClaimStatus = (event) => {
       const option=  event.target.options.selectedIndex;
       setselectedClaimStatus(uniqueClaimStatus[option]);    
    }



     const loadClaim  = () => {
     setClaims(claimData)
    };

    // setClaims(claimData)

    return (<div>
      
        <div  className="ClaimStatusSelector">
        Select claim Status : 
        <select onChange={changeClaimStatus}>

        {uniqueClaimStatus.map (claimStatus => <option key={claimStatus} value={claimStatus}>{claimStatus}</option>)}
        </select>
        </div>

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
                      return claim.claimStatus === selectedClaimStatus && (
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