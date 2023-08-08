import React, { useState } from 'react';
import axios from 'axios';
import './loginpage.css';
import SecurityDetailsTable from '../SecurityPage/SecurityDetailsTable'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userRole: '',
  });
  const [loginResult, setLoginResult] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('Login data:', formData);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Login data:', formData);

    try {
      const response = await axios.post('http://localhost:9010/bonds/login', formData);
      if (response.data == true) {
        alert("Login Successful")
        setLoginResult(response.data);
      }
      else {
        alert("Invalid User")
      }
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  return (
    <div className="App">
      {loginResult === null ? (
      <div className="login-container">
        <h2>Welcome!</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="userName">Username : </label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userRole">Role:</label>
            <input
              type="text"
              name="userRole"
              value={formData.userRole}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className='loginbutton' type="submit">Login</button>
        </form>
      </div>
      ):(
        <SecurityDetailsTable result={loginResult} />
      )}
    </div>
  );
};

export default LoginPage;
