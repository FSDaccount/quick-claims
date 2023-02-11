import { useNavigate } from "react-router-dom";

const ClaimsRow = (props) => {
    
const navigate = useNavigate();
    return (
        <tr className="container">
            <td>{props.id}</td>
            <td>{props.policyNumber}</td>
            <td>{props.fullName}</td>
            <td>{props.insuranceType}</td>
            <td>{props.amount}</td>
            <td>{props.claimReason}</td>
            <td>{props.claimInfo}</td>
            <td>{props.claimStatus}</td>
            <td>{props.claimDate}</td>      
            <td><button className="btn btn-secondary" onClick={() => {navigate(`/claims/${props.id}`)
            }}>View</button></td>
        </tr>

    )
}

export default ClaimsRow;