import React, { useState } from 'react'
import {  useNavigate, Link } from "react-router-dom";

function Signup() {
  let navigate = useNavigate()
  const [credentials , setcredentials] = useState({               // state variables to hold credentials
    username: "",
    email: "",
    password: "",
    org: "",
  })

  const handleSubmit = async (e)=>{                              // function to handle form submission and to send data to backend using fetch api
    e.preventDefault();                                    // prevents default/empty submission of the form
    const respone = await fetch("http://localhost:5000/api/createuser",{
      method: 'POST',
      headers: {                                              // headers of the http body sent to server
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,                             // body of the request containing credentials
        email: credentials.email,
        password: credentials.password,
        org: credentials.org
       })
    });
    try {if (!respone.ok) {
      throw new Error(`HTTP error! Status: ${respone.status}`);
    }                                                     // data sent to backend
    const data = await respone.json();
    console.log("Response data:", data);                  // awaiting reponse from server
    if(data.success){
      navigate("/login")
    }
    }
     catch (error) {
    console.error("Error:", error);
    alert("Failed to Sign-Up try again");                      // Checks if credentials are valid based on server reply
    }

  }

  const onChange = (event)=> {                                   // react function to handle user input
    setcredentials({...credentials, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <div className="containerlogin">
        <h1 className="title">Aesthetic Alchemy</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>                      {/* Main form that takes user input and submits */}
            <input className="input1" type="text" id="Username" name='username' value={credentials.username} onChange={onChange} placeholder="Username" />                       {/* Input for username */}
            <input className="input1" type="email" id="Email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="E-mail" />          {/* Input for email */}
            <input className="input1" type="password" id="Password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />         {/* Input for password */}
            <input className="input1" type="text" id="Org" name='org' value={credentials.org} onChange={onChange} placeholder="Organisation Name" />                 {/* Input for organisation name */}
            <div className="buttons">
              <button type="submit" className="login-button">Register</button>        {/* Submit button */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;