import React, { useState } from 'react';
import './RegistrationForm.css'; // Import your CSS file

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    birthdate: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = () => {
    console.log('Registration Form Data:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Gender:', formData.gender);
    console.log('Birth Date:', formData.birthdate);
    console.log('City:', formData.city);
    console.log('Country:', formData.country);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      gender: 'male',
      birthdate: '',
    city:'',
    country:''
      
    });
  };

  

  return (
    <div className="form-container">
      <div className='registration-for'>
    
        <div className='form-image'>
        <div className='logo'><span><span className='highlight'>Photo</span>graphy</span>
          <label class="menu-btn" for="menu-toggle">&#9776;</label>
        </div>
        
      <h2>Photography</h2>
        <p>Props for Your Shoot</p>
    </div>
    <div className="registration-form">
      <h1>Registration</h1>
      <p>Pro for Your Shoot</p>
      
      <form>
        <div class="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
        <div class="form-group"> 
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
        <label htmlFor="gender">
          Gender:
          </label>
          <label htmlFor="male">
            
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label htmlFor="female">
            
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
         
        </label>
        </div>
        <div class="form-group">
        <label htmlFor="birthdate">Birth Date:</label>
        <input
          type="text"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />
        </div>
        <div class="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        </div>
        <div class="form-group">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit" onClick={handleConfirm}>Confirm</button>
        </div>
      </form>
      </div>
      </div>
      </div>
   
  );
};
export default RegistrationForm;
