

const HealthForm = () => {
    return (
        <div className="mt-4">
            <div>
                <strong>Health Insurance Selected </strong>

                <p>  You have selected Health insuance, please complete the folowing
                    details with regards to your Policy.</p>
            </div>

            {/* //age */}
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Age" >
                Age:
            </label>

            <input
                className="form-control input-sm"
                id="Age" type="Age" placeholder="18*" />


            {/* //weight */}
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Weight" >
                Weight Kg:
            </label>

            <input
                className="form-control input-sm"
                id="Weight" type="Weight" placeholder="70" />

            {/* //Health conditions */}
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Health" >
                Any existing Health conditions :
            </label>

            <input
                className="form-control input-sm"
                id="healthConditions" type="healthConditions" placeholder="type N/A if not applicable" />

        </div>
    )
}
export default HealthForm;