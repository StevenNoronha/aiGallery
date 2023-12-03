import React from "react";
import logo from "../logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  const handleClick = ()=> {                                  // clears the local storage, helps in determining whether user is logged in or not           
    localStorage.removeItem("userEmail");
  }

  return (
    
    <div>
      <nav>
        <div className="container">
            <div className="container" >
          <img
            src={logo}
            alt="Logo"
            width="55"
          />
          <p class="logo">Aesthetic Alchemy</p>
          </div>
          <div className="container navText" >
          {!localStorage.getItem("userEmail") ?                   // Checks whether user is logged in or not based of localstorage variables, and displays login/logout button respectively
          <Link to='/login' style={{textDecoration: "none"}}><button className="button-64" ><span class="text">Login</span></button></Link>
          :
          <Link to='/login' style={{textDecoration: "none"}}><button className="button-64" onClick={handleClick} ><span class="text">Logout</span></button></Link>
          }
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
