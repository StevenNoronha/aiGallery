import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" })   // state variables to hold credentials
  const navigate = useNavigate()
  const handleSubmit = async (e) => {                     // function to handle form submission and to send data to backend using fetch api
    e.preventDefault();                                 // prevents default/empty submission of the form
    const respone = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },            // headers of the http body sent to server
      body: JSON.stringify({ email: credentials.email, password: credentials.password })      // body of the request containing credentials
    });                                                       // data sent to backend
    const json = await respone.json()                       // awaiting reponse from server
    console.log(json)

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if (json.success) {                                                     // Checks if credentials are valid based on server reply, logins succesfully if credentials are correct
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
    
  }

  const onChange = (event) => {                                         // react function to handle user input
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <div className="containerlogin">
        <h1 className="title">Aesthetic Alchemy</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>                        {/* Main form that takes user input and submits */}
            <input className="input1" type="text" id="Email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} placeholder="E-mail" />          {/* Input for email */}
            <input className="input1" type="password" id="Password" name='password' value={credentials.password} onChange={onChange} placeholder="Password" />                {/*  Input for password*/}
            <div className="buttons">
              <Link to="/signup" className="register-link">Register</Link>            {/* Re-direction link to signup page  */}
              <button type="submit" className="login-button">Login</button>                 {/* Submit button */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
