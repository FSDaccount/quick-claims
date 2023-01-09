

const BoatForm = () => {
    return (
        <div className="mt-4">
            <div>
                <strong>Boat Insurance Selected </strong>
                <br/>
                You have selected Boat insuance,  please complete the folowing
                    details with regards to your Policy.
            </div>

            <label class="block text-gray-700 text-sm font-bold mb-2" for="CarReg" >
                Boat Reg
            </label>

            <input
                className="form-control input-sm"
                id="CarReg" type="CarReg" placeholder="Db65zyx*" />
        </div>
    )
}
export default BoatForm;