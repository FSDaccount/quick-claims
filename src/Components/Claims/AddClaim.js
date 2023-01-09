import './AddClaim.css';
import { useReducer, useState, useEffect } from "react";
import CarForm from '../Forms/CarForm';
import HealthForm from '../Forms/HealthForm';
const AddClaim = () => {
    const initialNewClaimState = { id: 1, First_name: "default", surname: "na", emailAddress: "default@exaple.org", insuranceType: "none", coverType: "...", amount: "£00.00", claimInfo: "na", claimStatus: "pending" }
        ;
    const [message, setMessage] = useState("");





    const[coverSelection, setCoverSelection] = useState("selectCovertype");

    const[boatContentVisible, setboatContentVisible]= useState(false);
    const[carContentVisable, setcarContentVisable] = useState(false);
    const[HomeContentVisable, setHomeContentVisable] = useState(false);
    const[healthContentVisable, sethealthContentVisable] = useState(false);
    const[ContentsContentVisable, setContentsContentVisable] = useState(false);
    
    useEffect(() => {
        coverSelection === "Car" ? setcarContentVisable(true):setcarContentVisable(false);
        coverSelection === "Boat" ? setboatContentVisible(true):setboatContentVisible(false);
        coverSelection === "Health" ? sethealthContentVisable(true):sethealthContentVisable(false);

    }, [coverSelection]);

    const handleOnChange = (e) => {
        setCoverSelection(e.target.value);
      };


    const formReducer = (state, data) => {
        return { ...StaticRange, [data.field]: data.value }
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

    const handleChange = (event) => {
        dispatch({ field: event.target.id, value: event.target.value });
    }

    const RenderResult = () => {
        let result;
        coverSelection === "selectCoverType"
        ? (result = "select your insuance type ")
        : (result = coverSelection);
        console.log(coverSelection + " was selected");
        return result;
    }

    return (
        <div className='container-md'>
            <div className="ammendForm">

                <form className=" md:bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="post">
                    <h2 className="text-xl pt-4"><strong> ADD NEW CLAIM </strong> </h2>
                    <br />

                    <div class="row">
                        <div className="col-md-6 mb-4">
                            <label className="label" for="firstname">
                                First Name :
                            </label>
                            <input
                                className="form-control input-sm"
                                id="firstname" type="text" placeholder="First name"
                                value={newClaim.First_name} onChange={handleChange} />
                        </div>



                        <div className="col-md-6 mb-4">
                            <label className="label" for="surname">
                                Surname :
                            </label>
                            <input
                                className="form-control input-sm"
                                id="surname" type="text" placeholder="Surname" value={newClaim.surname} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="row">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="emailAddress">
                                Email address
                            </label>
                            <br />
                            <input className='form-control input-sm'
                                id="emailAddress" type="text" placeholder="Email@example.com" value={newClaim.emailAddress} onChange={handleChange} />
                        </div>

                    </div>


                    <div class="row">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>


                            <input
                                className="form-control "
                                id="confirmPassword" type="confirmPassword" placeholder="******************" />

                            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword" >
                                Confirm Password
                            </label>

                            <input
                                className="form-control input-sm"
                                id="confirmPassword" type="confirmPassword" placeholder="******************" value={newClaim.confirmPassword} onChange={handleChange} />
                        </div>

                    </div >



                    <br />

                    <div className="mb-4 inline-block relative w-64">
                        <label>Select Insurance type :</label>

                        <select className='form-select'value={coverSelection} onChange={handleOnChange}>
                            <option value="selectCoverType" className="font-bold">Insurance Type</option>
                            <option value="Health">Health</option>
                            <option value="Car">Car</option>
                            <option value="Boat">Boat</option>
                            <option value="Home">Home</option>
                            <option value="Contents">Contents</option>
                        </select>
                    </div>

                    {/* //conditional forms for insuance type */}
                   {carContentVisable &&  <CarForm/> }
                   {healthContentVisable &&  <HealthForm/> }
                    
                    
                 
        
                    






                    <div className="mb-4 inline-block relative w-64">
                        <label></label>
                        <select className="form-select" id='coverType' value={newClaim.coverType} onChange={handleChange}>
                            <option className="font-bold">Cover Type</option>
                            <option>Third Party</option>
                            <option>Third party, fire and theft </option>
                            <option>Comprehensive</option>
                        </select>
                    </div>
                    <div>
                        <label for="customRange1" class="form-label"> Item value</label>
                        <input type="range" class="form-range" min="0" max="5" id="customRange2" />

                        <div className="w-full flex justify-between text-xs px-2">
                            <span>£100</span>
                            <span>£500</span>
                            <span>£1000</span>
                            <span>£1500</span>
                            <span>£2000+</span>
                        </div>

                        <div className="pb-8">
                            <div className="mb-3 pt-0">
                                <label for="incidentReport" className="block  text-sm font-bold mb-2">Incident Report </label>
                                <textarea type="text" placeholder="Please enter the details of your claim here:"
                                    className="form-control input-lg" value={newClaim.claimInfo} onChange={handleChange} />

                            </div>
                            <br></br>
                            <div className="mb-3 pt-0">
                                <label for="AdditionalNotes" class="block text-gray-700 text-sm font-bold mb-2">Additional notes </label>
                                <textarea type="text" placeholder="Additional Notes"
                                    className="form-control" />
                            </div>

                            <div className="mb-4 inline-block relative w-64">
                                <label></label>
                                <select className="form-select" id='coverType' value={newClaim.claimStatus} onChange={handleChange}>
                                    <option className="font-bold">Claim Status</option>
                                    <option>Open</option>
                                    <option>Pending </option>
                                    <option>Closed</option>
                                </select>
                            </div>



                        </div>
                        <br></br>
                        <br></br>
                        <br ></br>





                        <div className="flex items-center justify-between p-8">
                            <button
                                className="primary"
                                type="button">
                                Submit claim
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Existing User?
                            </a>
                        </div>
                    </div>
                    <div className="addClaimMessage">{message}</div>
                </form>

            </div>

        </div>
    )

}

export default AddClaim;