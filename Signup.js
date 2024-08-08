import React, { useState} from 'react'; 

import './Signup.css';
import { Link } from 'react-router-dom';
import './Head.css';




const Signup=()=>{
    const [action,setAction] = useState("Sign Up");
    
    return(
    <div>  
       <header className="head">
         <div className="contain">
           <h1 className="logo">Library</h1>
            <nav>
                <ul className="nav-list">
                   <li className="nav-item"><Link as={Link} to="/Home">Home</Link></li>
                   <li className="nav-item"><Link as={Link} to="/AboutUs">Aboutus</Link></li>
                   <li className="nav-item"><Link as={Link} to="/">Book Issue</Link></li>
                   <li className="nav-item"><Link as={Link} to="/Siup">Login</Link></li>
                   <li className="nav-item"><Link as={Link} to="/Inquiryform">Inquiry</Link></li>
                   <li><form className="search-bar" >
                   <input type='text' placeholder="Search..."/>
                   <button type="submit">Search</button>
               </form></li>
                </ul>
                
           </nav>
         </div>
       </header>
       
       
        
     
      

    </div> 
    
    )
}

export default Signup;