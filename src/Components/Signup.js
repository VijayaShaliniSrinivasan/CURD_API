import React from "react";
import './Login.css'

function Signup() {

    return(
        <>
<div className="signup-section">
             <div className="containers">
                <div className="header">
                        <h1>SignUp</h1>
                   <div className="inputs">
                      <input type="text" placeholder="Name"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Email-Id"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Password"></input>
                   </div>
                   <div className="inputs">
                      <input type="text" placeholder="Confirm-Password"></input>
                   </div>
                    <button className="btn1">Submit</button>
                </div>
               
             </div>

             </div>
        </>
    )
    
}
export default Signup