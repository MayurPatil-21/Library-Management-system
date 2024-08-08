import React from 'react';
import './AboutUs.css'; // Optional: for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p style={{fontWeight:'bold'}}>Welcome to the Library Zone...!</p>
      <p>
        Our mission is to provide an efficient and user-friendly platform to manage library resources. 
        We aim to streamline the process of book management, member tracking, and loan handling, 
        making it easier for libraries to operate smoothly and effectively.
      </p>
      <h3>Our Vision</h3>
      <p>
        We envision a world where libraries can focus on their core mission of spreading knowledge 
        without being bogged down by administrative tasks. Our system is designed to be intuitive, 
        adaptable, and scalable to meet the needs of libraries of all sizes.
      </p>
      <h3>Our Team</h3>
      <p>
        Our team is composed of experienced developers, designers, and library professionals who 
        are passionate about technology and education. Together, we strive to create a product that 
        truly enhances the library experience.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions, feedback, or need support, feel free to reach out to us at 
        <a href="mailto:support@librarymanagement.com">clglab321@gmail.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;

