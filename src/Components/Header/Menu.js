import './WebHeader.css';
import Search from './Search';
import React from "react";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (<div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      {/* <div className="container-fluid">
   */}
      <img src="./Logo1.jpg" className="logo" alt="Responsive image" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link active" href="/"> Home</a>
          </li>
          <li className="nav-item active">
            {/* <div className="navbar-nav"> */}
            <Link className="nav-link active" to="/addclaim">New Claim</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link active" href="/claim">Search Claim</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link active" href="/claimsview">Amend Claim</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link active" href="/claimstablefull">All Claims </Link>
          </li>
          {/* </div> */}
        </ul>
     
      </div>
      <div class="topnav-right">
        <div className="nav-a"><Search /></div>
        </div>
      {/* </div> */}
    </nav>
  </div>
  )
}
export default Menu;