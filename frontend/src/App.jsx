import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Form from './pages/Form';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default App;