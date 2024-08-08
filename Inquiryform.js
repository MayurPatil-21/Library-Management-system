// src/InquiryForm.js
import React, { useState } from 'react';
import'./Inquiryform.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    libraryCardNumber: '',
    inquiryType: '',
    description: '',
    dateTime: '',
    impactLevel: '',
    stepsTaken: '',
    attachments: null,
    contactMethod: '',
    contactTime: '',
    additionalComments: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      attachments: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or server
    console.log('Form submitted:', formData);
  };

  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <h1>Library Inquiry Form</h1>

      <label>
        Full Name:  
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>

      <label>
        Email Address:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>

      <label>
        Library Card Number (if applicable):
        <input type="text" name="libraryCardNumber" value={formData.libraryCardNumber} onChange={handleChange} />
      </label>

      <label>
        Inquiry Type:
        <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="general">General Inquiry</option>
          <option value="technical">Technical Issue</option>
          <option value="featureRequest">System Feature Request</option>
          <option value="accountIssue">Account Issue</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Description of Inquiry:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        Date and Time of Occurrence:
        <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
      </label>

      <label>
        Impact Level:
        <select name="impactLevel" value={formData.impactLevel} onChange={handleChange}>
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label>
        Steps Taken:
        <textarea name="stepsTaken" value={formData.stepsTaken} onChange={handleChange} />
      </label>

      <label>
        Attachments:
        <input type="file" name="attachments" onChange={handleFileChange} />
      </label>

      <label>
        Preferred Method of Contact:
        <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
          <option value="">Select</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="noPreference">No preference</option>
        </select>
      </label>

      <label>
        Preferred Contact Time:
        <select name="contactTime" value={formData.contactTime} onChange={handleChange}>
          <option value="">Select</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </label>

      <label>
        Additional Comments:
        <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
      </label>

      <label>
      Do you consent to the collection and use of your data as described in our privacy policy?
        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
      </label>

      <button type="submit">Submit Form</button>
    </form>
    </div>
  );
};

export default InquiryForm;
