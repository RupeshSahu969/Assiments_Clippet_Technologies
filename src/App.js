import React from 'react';
import { Route,Routes ,Link } from 'react-router-dom';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Movie from './Component/Movie/Movie';
import CompanyInfo from './Component/CompanyInfo/CompanyInfo';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
   <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/company-info" element={<CompanyInfo/>} />
      </Routes>
    </div>
  );
}

export default App