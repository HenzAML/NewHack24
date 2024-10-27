// SignIn.jsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function SignIn() {
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
          Sign In
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, color: 'primary.contrastText' }} // Explicitly set text color
        >
          Sign In
        </Button>
        <NavLink to="/signup" style={{ textDecoration: 'none' }}>
          <Button variant="text" color="secondary" fullWidth sx={{ mt: 1 }}>
            Create an Account
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default SignIn;