// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Home = () => {
  return (
    <>
    <div style={{ textAlign: 'center', color:'#fff' ,background: 'transparent',margin:'9%',border: '2px solid',  }}>
      <h1>Welcome to the Library Zone</h1>
      <p>Manage your library efficiently and effectively.</p>
      <div>
        <Link to="/books" style={{ margin: '0 10px', color:'blue' }}>View Books</Link>
        <Link to="/members" style={{ margin: '0 10px',color:'blue' }}>View Members</Link>
      </div>
    </div>
    <footer className="footer">
    <div className="contain">
      <div>
         <h1>Lab</h1>
         <p>Contact :-</p>
         <p>Mobile No :- 9876543210 <br/>
         Email :- clglab321@gmail.com </p>
            <ul className="nav-list">
              <li className="nav-item"><Link to="/Home">Security</Link></li>
              <li className="nav-item"><Link to="/AboutUs">Service</Link></li>
              <li className="nav-item"><Link to="/">Issue</Link></li>
              <li className="nav-item"><Link to="/">Conditions</Link></li>

            </ul>
            
      </div>
      
      <div className='last'>
        <p></p>
        <p>
        &copy;Collage Lab. All rights reserved.<a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
  </>
  );
};

export default Home;