import './Search.css';

const Search = () => {

    return (
        <div className="searchBox">
           
            <label className='' htmlFor="orderId">Find a Claim </label>
            <input id="orderId" type="text" />
            <button>Search</button>
            
        </div>
    );
}

export default Search