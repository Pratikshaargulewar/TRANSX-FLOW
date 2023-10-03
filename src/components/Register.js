// src/components/Register.js
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here (e.g., API request)
    console.log('Registration data:', formData);
  };

  return (
    <div className="register-container">
      <div className='register-box'>

   
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
};

export default Register;
