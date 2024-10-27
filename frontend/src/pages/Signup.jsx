// SignUp.jsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Signup() {
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
        
        {/* First Name Input */}
        <TextField
          label="First Name"
          type="text"
          fullWidth
          margin="normal"
          required
        />

        {/* Last Name Input */}
        <TextField
          label="Last Name"
          type="text"
          fullWidth
          margin="normal"
          required
        />

        {/* Email Input */}
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />

        {/* Password Input */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
        />

        {/* Sign Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Sign Up
        </Button>
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