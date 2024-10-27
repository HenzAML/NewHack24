// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/auth/signup', formData, {
        withCredentials: true,
      });
      console.log('User signed up successfully:', response.data);
      // Optionally redirect the user or show a success message
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
      }}
    >
      <Box
        sx={{
          width: '50%',
          maxWidth: 500,
          padding: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#000000' }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="first_name"
            type="text"
            fullWidth
            margin="normal"
            required
            value={formData.first_name}
            onChange={handleChange}
          />

          <TextField
            label="Last Name"
            name="last_name"
            type="text"
            fullWidth
            margin="normal"
            required
            value={formData.last_name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </form>
        <NavLink to="/signin" style={{ textDecoration: 'none' }}>
          <Button variant="text" color="secondary" fullWidth sx={{ mt: 1 }}>
            I'm already a member
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default Signup;