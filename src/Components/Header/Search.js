import './WebHeader.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Search = (props) => {

    const [valid, setValid] = useState(true);
    const navigate = useNavigate()

    // const handleChange  = (event) => {
    //     event.preventDefault();
    //     setSearchInput(event.target.value);
    // };
    // if (searchInput.length > 0) {
    //     ClaimsTable.filter((claim) => {
    //     return claim.name.match(searchInput);
    // });
    // }
        



    const handleSubmit = (event) => {
        event.preventDefault();
        let params = event.target.search.value;
         console.log("Params ", params);
        navigate("/claims?search=" + params);
      };
    //     // setSearchParams({search:params});
    //     console.log("Params ", params);
    //     navigate("/claims?search=" + params);
    //      console.log("Search Params " , params);
    //   };

    return (
      <form className='search m-2' onSubmit={handleSubmit}>
      <div className='d-flex'>
        <div style={{marginRight : "10px"}}>
          <input id="search" type="text" placeholder="Search for a claim here" className="form-control m-2" style={{ border: valid ? "1px solid #000" : "2px solid #f00" }} />
        </div>
        <div>
          <button className="btn btn-outline-success m-2" type="submit">Search</button>
        </div>
      </div>
    </form>
    );
}

export default Search