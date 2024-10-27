import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Form from './pages/Form';
import UserDash from './pages/UserDash';
import VetDash from './pages/VetDash';
import PetDetails from './pages/PetDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/form" element={<Form />} />
      <Route path="/userdash" element={<UserDash />} />
      <Route path="/vetdash" element={<VetDash />} />
      <Route path="/petdetails" element={<PetDetails />} />
    </Routes>
  );
};

export default App;