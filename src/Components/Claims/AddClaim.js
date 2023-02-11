import './AddClaim.css';
import { useContext, useReducer, useState } from "react";
import { addNewClaim, updateClaim } from '../../data/DataFunctions';
import { UserContext } from '../../contexts/UserContext';
const AddClaim = (props) => {

    const initialNewClaimState = {
        policyNumber: "1", fullName: "default", insuranceType: "Motor", coverType: "Third Party", amount: 0, claimInfo: "...", claimStatus: "New", claimDate: new Date().toISOString().slice(0, 10), address: "pending", make: "na", model: "na", yearOfManufacture: 1997, typeOfAnimal: "na", breedAnimal: "na", claimNotes: "none"
    };
    const context = useContext(UserContext);

    const [message, setMessage] = useState("");

    const formReducer = (state, data) => {
        return {
            ...state,
            [data.field]: data.value
        };
    }
    const [newClaim, dispatch] = useReducer(formReducer, props.claim != null ? props.claim : initialNewClaimState);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("saving");
        console.log(newClaim);
        const response = props.claim != null ? updateClaim(context.user.name, context.user.password, newClaim) : addNewClaim(context.user.name, context.user.password, newClaim);
        response.then(
            result => {
                if (result.status === 200 && props.claim == null) {
                    console.log(result);
                    setMessage("New Claim Added");
                }
                else if (result.status === 200 && props.claim != null) {
                    console.log(result);
                    setMessage("Claim Updated");
                }
                else {
                    setMessage("something went wrong - error code was " + result.status);
                }
            }
        )
            .catch(error => console.log("something went wrong ", error));
    }

    const handleChange = (event) => {
        dispatch({ field: event.target.id, value: event.target.value });
    }

    const { policyNumber, fullName, insuranceType, coverType, amount, claimInfo, claimStatus, claimDate, address, make, model, yearOfManufacture,
        typeOfAnimal, breedAnimal, claimNotes } = newClaim;


    const [insurnaceSelector, setinsurnaceSelector] = useState(null);

    const getInsuranceTypeDiv = () => {
        switch (insurnaceSelector) {
            case "0":
                return <div>No Insurance Type selected</div>;
            case "1":
                return <div>  <div className="row">
                    <div className="mb-3 pt-0">
                        <label htmlFor="make" className="block  text-sm font-bold mb-2">make: </label>
                        <input
                            className="form-control input-sm"
                            id="make" type="text" placeholder="make"
                            value={make} onChange={handleChange} />
                    </div>
                </div>

                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="model" className="block  text-sm font-bold mb-2">model: </label>
                            <input
                                className="form-control input-sm"
                                id="model" type="text" placeholder="model"
                                value={model} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="yearOfManufacture" className="block  text-sm font-bold mb-2">Year Of Manufacture: </label>
                            <input
                                className="form-control input-sm"
                                id="yearOfManufacture" type="text" placeholder="yearOfManufacture"
                                value={yearOfManufacture} onChange={handleChange} />
                        </div>
                    </div>

                </div>;
            case "2":
                return <div>  <div className="row">
                    <div className="">
                        <label htmlFor="address" className="block  text-sm font-bold mb-2">Address: </label>
                        <textarea type="text" placeholder="Please enter the details of your claim here:"
                            className="form-control input-lg" id="address" value={address} onChange={handleChange} />
                    </div>



                </div>
                </div>;
            case "3":
                return <div>

                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="typeOfAnimal" className="block  text-sm font-bold mb-2">Type Of Animal: </label>
                            <input
                                className="form-control input-sm"
                                id="typeOfAnimal" type="text" placeholder="typeOfAnimal"
                                value={typeOfAnimal} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 pt-0">
                            <label htmlFor="breedAnimal" className="block  text-sm font-bold mb-2">Breed Animal: </label>
                            <input
                                className="form-control input-sm"
                                id="breedAnimal" type="text" placeholder="BreedAnimal"
                                value={breedAnimal} onChange={handleChange} />
                        </div>
                    </div>
                </div>;
            case "4":
                return <div>Other option</div>;
            default:
                return null;
        }
    }


    return (
        <div className="container">
        <form className="addClaimsForm" onSubmit={handleSubmit}>
            <h2 className="text-xl pt-4">

                {props.claim != null ?
                    <strong> EDIT CLAIM </strong> : <strong> ADD NEW CLAIM </strong>} </h2>
            <br />


            <div className="row">
                <div className="col-md-6 mb-4">
                    <label className="label" htmlFor="policyNumber">
                        policy Number:
                    </label>
                    <input
                        className="form-control input-sm"
                        id="policyNumber" type="text" placeholder="Policy Number"
                        value={policyNumber} onChange={handleChange} />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="label" htmlFor="fullName">
                        full Name:
                    </label>
                    <input
                        className="form-control input-sm"
                        id="fullName" type="text" placeholder="Full Name"
                        value={fullName} onChange={handleChange} />
                </div>
            </div>

            <div>
                <label htmlFor="tipoId" className="col-md-6">
                    Select insurance Type:
                </label>
                <select className="form-select" id="insuranceType" value={insuranceType} onChange={handleChange}
                    onClick={(event) => {
                        // here set target value to state which is 0, 1, 2, 3
                        setinsurnaceSelector(event.target.value);
                    }}>
                    <option value="1">Motor:</option>
                    <option value="2">Home:</option>
                    <option value="3">Pet:</option>
                </select>
            </div>
            {getInsuranceTypeDiv()}







            <div className="row">
                <label>Cover type :</label>
                <select className='form-select' id="coverType" value={coverType} onChange={handleChange}>
                    <option value="selectCoverType" className="font-bold">Cover Type:</option>
                    <option value="1">Third Party</option>
                    <option value="2">Third party, fire and theft </option>
                    <option value="3">Comprehensive</option>
                </select>
            </div>



            <div className="row">
                <div className="col-md-6 mb-4">
                    <label className="label" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="form-control input-sm"
                        id="amount" type="text" placeholder="amount"
                        value={amount} onChange={handleChange} />
                </div>
            </div>


            <div className="row">
                <div className="mb-3 pt-0">
                    <label htmlFor="claimInfo" className="block  text-sm font-bold mb-2">claimInfo </label>
                    <textarea type="text" placeholder="Please enter the details of your claim here:"
                        className="form-control input-lg" id="claimInfo" value={claimInfo} onChange={handleChange} />

                </div>
            </div>


            <div className="row">
                <label></label>
                <select className="form-select" id='coverType' value={claimStatus} onChange={handleChange}>
                    <option className="font-bold">Claim Status</option>
                    <option>Open</option>
                    <option>Pending </option>
                    <option>Closed</option>
                    <option>Accepted</option>
                    <option>Rejected</option>
                </select>
            </div>

            <div className="row">
                <div className="mb-3 pt-0">
                    <label htmlFor="claimDate" className="block  text-sm font-bold mb-2">claimDate </label>
                    <input
                        className="form-control input-sm"
                        id="claimDate" type="text" placeholder="claimDate"
                        value={claimDate} onChange={handleChange} />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 pt-0">
                    <label htmlFor="claimNotes" className="block  text-sm font-bold mb-2">claimNotes </label>
                    <input
                        className="form-control input-lg"
                        id="claimNotes" type="text" placeholder="claimNotes"
                        value={claimNotes} onChange={handleChange} />
                </div>
            </div>
            {console.log("claimStatus", claimStatus)}
            

            {claimStatus === "Accepted" ? (
                <h3>Claim Accepted</h3>
            ) : claimStatus === "Rejected" ? (
                <h3>Claim Rejected</h3>
            ) : (
                <button
                    className="btn btn-primary"
                    type="submit"
                    name='submit'
                    onClick={handleSubmit}
                >
                    Submit claim
                </button>
               
            )}
              <div name="Message" className="addTransactionMessage">{message}</div>
        </form>
        </div>
    );


}


export default AddClaim;