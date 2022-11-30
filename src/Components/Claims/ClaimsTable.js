import ClaimsRow from "./ClaimsRow";
import './Transactions.css';
import { getAllPayments, getAllPaymentsAxiosVersion, getAllPaymentsFetchVersion, getAllPaymentsForCountry, getCountries } from "../../data/DataFunctions";
import { useEffect, useState } from "react";



const ClaimsTable = () => {




    return (<div>
        <table className="ClaimsTable">
            <thead>
            <tr>Id</tr>
         <tr>First_name</tr>
         <tr>Surname</tr>
         <tr>emailAddress</tr>
         <tr>insurnceType</tr>
         <tr>coverType</tr>
         <tr>Amount</tr>
         <tr>ClaimInfo</tr>
            </thead>
        </table>
    </div>)

  

}
export default ClaimsTable;