import React, { useState } from 'react';
import '../Assets/PasswordChange.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
      }
      // Handle password change logic here
      console.log('Current Password:', currentPassword);
      console.log('New Password:', newPassword);

      axios.post('http://52.86.101.164:8000/api/process/', {
        "currentPassword": currentPassword,
        "newPassword": newPassword
      }).then(response => {
        console.log(response);
        alert("Password changed Successfully")
        navigate('/');
      })
  };

  return (
    <div className="password-change-container">
      <form className="password-change-form" onSubmit={handleSubmit}>
        <h2 className="password-change-title">Change Password</h2>
          <div className="input-group">
            <label htmlFor="current-password">Current Password</label>
            <input 
              type="password" 
              id="current-password" 
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="new-password">New Password</label>
            <input 
              type="password" 
              id="new-password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="password-change-button">Change Password</button>
      </form>
    </div>
  );
};

export default PasswordChange;
