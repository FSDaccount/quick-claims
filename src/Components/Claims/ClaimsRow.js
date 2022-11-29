const ClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.SurName}</td>
            <td>{props.emailAddress}</td>
            <td>{props.InsurnceType}</td>
            <td>{props.CoverType}</td>
            <td>{props.amount}</td>
            <td>{props.ClaimInfo}</td>
        </tr>
    )
}

export default TransactionsRow;