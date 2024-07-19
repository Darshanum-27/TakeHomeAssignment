import React, { useState } from 'react';
import '../Assets/LoginPage.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    let emailCheck = ""
    let passwordCheck = ""
    axios.get('http://52.86.101.164:8000/api/data/')
    .then(response => {
      emailCheck = response.data.email
      passwordCheck = response.data.password
      console.log(passwordCheck)
      if((email === emailCheck)&&(password === passwordCheck)){
        navigate('next');
      } else{
       /*alert("Wrong Credentials")*/
       setWrongPassword("Invalid Credentials")
      }
    })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <h4 style={{color:"red"}}>{wrongPassword}</h4>
        </div>
        <button type="submit" className="login-button" >Login</button>
        <button type="submit" className="login-button1">
          <Link to="/change" style={{textDecoration: "none", color:"white" }}>Password Reset</Link>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
