const ClaimsRow = (props) => {


    // const navigate = useNavigate();

    // const navigateToIndividualClaim = (props) => {
    //     let CLaimNumber = props.id;
    //     console.log("CLaim Number", Claim);
    //     navigate("/claim-view?policy=")
    // }
    return (
        <tr 
        className="bg-image hover-overlay ripple shadow-1-strong rounded"
        data-mdb-ripple-color="light" >
            {/* onClick={() => navigateToIndividualClaim(props)} */}

            <td>{props.id}</td>
            <td>{props.First_name}</td>
            <td>{props.surname}</td>
            <td>{props.emailAddress}</td>
            <td>{props.insuranceType}</td>
            <td>{props.coverType}</td>
            <td>{props.amount}</td>
            <td>{props.claimInfo}</td>
            <td>{props.claimStatus}</td>
        </tr>
    )
}

export default ClaimsRow;