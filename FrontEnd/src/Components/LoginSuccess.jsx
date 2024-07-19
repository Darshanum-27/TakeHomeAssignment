import React from 'react';
import '../Assets/LoginSuccess.css';
import { Link } from "react-router-dom";

const LoginSuccess = () => {
  return (
    <div className="login-success-container">
      <div className="login-success-card">
        <h1>Success!</h1>
        <p>You have successfully logged in.</p>
        <p>Click to go back to login page </p>
        <Link to="/" style={{textDecoration: "none", color:"green" }}>
            Click Me!!!</Link>
        
      </div>
    </div>
  );
}

export default LoginSuccess;