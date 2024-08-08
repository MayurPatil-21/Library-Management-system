import React, { useState} from 'react'; 
import RoutingPath from "./RoutingPath";
import './Signup.css';


function Siup()
{
    const [action,setAction] = useState("Sign Up");
    const element=
    <>
      <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            
            <input type="text" placeholder='Enter First Name :'/>
        </div>}
        {action==="Login"?<div></div>:<div className="input">
            
            <input type="text" placeholder='Enter Last Name :'/>
        </div>}
        
        <div className="input">
            
            <input type="email" placeholder='Enter email :'/>
        </div>
        <div className="input">
            
            <input type="password" placeholder='Enter Password :'/>
        </div>
        {action==="Login"?<div></div>:<div className="input">
            
            <input type="text" placeholder='Enter Mobile No :'/>
        </div>}
        
        {action==="Login"?<div></div>:<div className="input">
           
           <input type="text" placeholder='Enter Clg Name :'/>
       </div>}
        {action==="Login"?<div></div>:<div className="input">
           
           <input type="text" placeholder='Enter Your Stream :'/>
       </div>}
        
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot">Lost Password? <span>Click Here!</span></div>}
     
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        
        </div>
      </div>
    </>

    return element;
}

export default Siup;