const ClaimsRow = (props) => {

    return (
        <tr>
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