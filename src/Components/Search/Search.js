import './Search.css';

const Search = () => {

    return (
        <div className="Search">
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" />
            <button>Search</button>
        </div>
    );
}

export default Search