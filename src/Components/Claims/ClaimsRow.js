const ClaimsRow = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.surname}</td>
            <td>{props.emailAddress}</td>
            <td>{props.insurnceType}</td>
            <td>{props.coverType}</td>
            <td>{props.amount}</td>
            <td>{props.claimInfo}</td>
        </tr>
    )
}

export default TransactionsRow;