import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./signup.css"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();

  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('User Registered Successfully');
    navigate("/login")
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Signup</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="profession" className="form-label">Profession</label>
              <select className="form-select" id="profession" name="profession" onChange={handleChange} required>
                <option value="">Select Profession</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
