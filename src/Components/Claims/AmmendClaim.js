import './AddClaim.css';
import { useContext, useReducer, useState } from "react";
import {getClaimById, updateCLaim } from '../../data/DataFunctions';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AddClaim from './AddClaim';
import { UserContext } from '../../contexts/UserContext';
const AmmendClaim = (props) => {

    const params = useParams();
    const navigate = useNavigate();
    const [claim, setClaim] = useState();
    const context=useContext(UserContext);

    // const [tempClaim, setTempClaim] = useState();

    useEffect(() => {
        console.log("Params ", params.id);

        getClaimById(context.user.name,context.user.password,params.id).then((response) => {

            if (response.status === 200) {
                setClaim(response.data);
            }
        });
    }, []);

    return <>
        {claim != null && <AddClaim claim={claim} />}

    </>

}


export default AmmendClaim;