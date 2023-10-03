import React from "react";
import './Login.css'

function Login() {

    return(
        <>
<div className="login-section">
             <div className="containers">
                <div className="header">
                        <h1>Login</h1>
                   <div className="inputs">
                      <input type="text" placeholder="Login-Id"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Password"></input>
                   </div>

                    <button className="btn1">Submit</button>
                </div>
               
             </div>

             </div>
        </>
    )
    
}
export default Login