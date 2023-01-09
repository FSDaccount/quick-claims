

const HomeForm = () => {
    return (
        <div className="mt-4">
            <div>
                <strong>Car Insurance Selected </strong>
                <br />
                You have selected car insuance,  please complete the folowing
                details with regards to your Policy.
            </div>

            <label class="block text-gray-700 text-sm font-bold mb-2" for="homeAddressLine1" >
                Home address line 1
            </label>

            <input
                className="form-control input-sm"
                id="homeAddressLine1" type="homeAddressLine1" placeholder="1 church street*" />

            <label class="block text-gray-700 text-sm font-bold mb-2" for="homeAddressLine1" >
                Home address line 2
            </label>

            <input
                className="form-control input-sm"
                id="homeAddressLine2" type="homeAddressLine2" placeholder="1 church street*" />



            <input
                className="form-control input-sm"
                id="homeAddressLine1" type="homeAddressLine1" placeholder="1 church street*" />


            <label class="block text-gray-700 text-sm font-bold mb-2" for="homeAddressLine1" >
                City
            </label>

            <input
                className="form-control input-sm"
                id="City" type="City" placeholder="Belfast" />
        </div>


    )
}
export default HomeForm;