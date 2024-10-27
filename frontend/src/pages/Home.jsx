// Home.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Home() {
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
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
                    Welcome to PetGuards
                </Typography>

                {/* Pet Owner Button */}
                <NavLink to="/signup-owner" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        I'm a Pet Owner
                    </Button>
                </NavLink>

                {/* Vet Button */}
                <NavLink to="/signup-vet" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        I'm a Vet
                    </Button>
                </NavLink>
            </Box>
        </Box>
    );
}

export default Home;