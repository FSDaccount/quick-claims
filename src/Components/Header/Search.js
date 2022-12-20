import './WebHeader.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ClaimsTable from '../Claims/ClaimsTable';
const Search = (props) => {

    const [searchInput, setSearchInput] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
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
        <div className="searchBox">
             <form className='search' onSubmit={handleSubmit}>
               <input id="search" type="text" placeholder="search here"
                style ={{ border: valid ? "1px solid #000" : "2px solid #f00" }} />
                <button type="submit" >Search</button> 
             </form> 
        </div>
    );
}

export default Search