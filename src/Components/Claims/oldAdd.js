

const ClaimsNew = (props) => {
  
    
    return (
     
        <div className='container-md'>

       
        
            <div className="ammendForm">

                <form className=" md:bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="post">
                    <h2 className="text-xl pt-4"><strong> New Claim </strong> </h2>
                    <br />

                    <div class="row">
                        <div className="col-md-6 mb-4">
                            <label className="label" for="firstname">
                                First Name :
                            </label>
                            <input
                                className="form-control input-sm"
                                id="firstname" type="text" placeholder="First name" />
                        </div>



                        <div className="col-md-6 mb-4">
                            <label className="label" for="surname">
                                Surname :
                            </label>
                            <input
                                className="form-control input-sm"
                                id="surname" type="text" placeholder="Surname" />
                        </div>
                    </div>

                    <div class="row">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="surname">
                            Email address
                        </label>
                        <br />
                        <input className='form-control input-sm'
                            id="surname" type="text" placeholder="Email@example.com" />
                    </div>

                    </div>


                    <div class="row">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                        

                            <input
                                className="form-control "
                                id="password" type="password" placeholder="******************" />
                         
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Confirm Password
                            </label>
                      
                            <input
                                className="form-control input-sm"
                                id="password" type="password" placeholder="******************" />
                        </div>

                    </div >


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="EmailAddress">
                            Email address
                        </label>
                        <br />
                        <input
                            className="form-control input-sm"
                            id="EmailAddress" type="text" placeholder="Email@example.com" />
                    </div>
                    <br />

                    <div className="mb-4 inline-block relative w-64">
                        <label>Select Insurance type :</label>

                        <select className='form-select'>
                            <option className="font-bold">Insurance Type</option>
                            <option>Health</option>
                            <option>Car</option>
                            <option>Boat</option>
                            <option>Home</option>
                            <option>Contents</option>
                        </select>
                    </div>

                    if (option == Boat ?) {
                        <div className="mb-4 inline-block relative w-64">
                            <label>Boat Reg</label>
                        </div>

                    }

                    conditional rendering goes here 

                    <div className="mb-4 inline-block relative w-64">
                        <label></label>
                        <select
                            className="form-select">
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
                                    className="form-control input-lg" />

                            </div>
                            <br></br>
                            <div className="mb-3 pt-0">
                                <label for="AdditionalNotes" class="block text-gray-700 text-sm font-bold mb-2">Additional notes </label>
                                <textarea type="text" placeholder="Additional Notes"
                                    className="form-control" />
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br ></br>





                        <div className="flex items-center justify-between p-8">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Submit claim
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Existing User?
                            </a>
                        </div>
                    </div>
                </form>
             
            </div>



        </div>

    )
}
export default ClaimsNew;