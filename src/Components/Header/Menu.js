import './WebHeader.css';
import Search from './Search';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
const Menu = () => {


  const currentUser = useContext(UserContext);
  const logout = () => {
    currentUser.setUser({name:"", role:""});
}

  return (<div className='container'>

    <nav className="navbar navbar-expand-lg navbar-light bg-light " >
       <div className="container-fluid">
   
      <img src="./Logo1.jpg" className="logo" alt="Responsive image" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " >
          <li className="nav-item active">
          {currentUser.user.name !== "" && <a className="btn btn-primary m-2" href="/"> Home</a>}
          </li>
          <li className="nav-item active">

          {currentUser.user.name === "" && <h4 className='m-2'>Please login to access content</h4>}
          </li>
          <li className="nav-item active">
            {/* <div className="navbar-nav"> */}
            {currentUser.user.name !== "" && <Link className="btn btn-primary m-2" to="/addclaim">New Claim</Link>}
          </li>
          <li className="nav-item active">
          {currentUser.user.name !== "" && <Link className="btn btn-primary m-2" to="/claimstablefull">View Claims </Link>}
          </li>
          <li className="nav-item active">
          {currentUser.user.name !== "" && <div className="nav-a"><Search /></div>}
          </li>
           </ul>
      </div>
      <div className="nav-item active">
          <ul style={{listStyleType: "none"}}>
          {currentUser.user.name === "" && <li><Link className="btn btn-primary m-2" to="/login">Log in</Link></li>}
            {currentUser.user.name !== "" && <li><button  className="btn btn-outline-primary m-2" onClick={logout} >Log out</button></li>}
    
        {currentUser.user.name !== "" && <p>Current user : {currentUser.user.name}</p>}
        </ul>
     
        </div>

       </div>
    </nav>
    
  </div>
  )
}
export default Menu;