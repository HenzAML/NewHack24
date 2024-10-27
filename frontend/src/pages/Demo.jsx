import React from 'react'

import { Typography, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Demo() {
    const petData = {
        name: "Buddy",
        species: "Dog",
        breed: "Golden Retriever",
        gender: "Male",
        dateOfBirth: {
            day: "15",
            month: "July",
            year: "2020"
        },
        vaccinationRecords: "Up to date",
        allergies: "None",
        medications: "Heartworm medication",
        pastIllnesses: "None",
        feedingInstructions: "2 cups of dry food twice a day",
        behaviouralConcerns: "Friendly but anxious around strangers",
        image: "https://placekitten.com/300/200" // Placeholder image URL
    };

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f3f4f6',
                paddingY: { xs: '2rem', sm: '4rem', md: '5rem' },
            }}
        >
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    width: { xs: '90%', sm: '70%', md: '50%' },
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                }}
            >
                {/* Heading */}
                <Typography variant="h5" sx={{ mb: 2, color: '#333333', fontWeight: 'bold' }}>
                    Pet Details
                </Typography>

                {/* Pet Image */}
                <Box sx={{ width: '60%', height: '16rem', mb: 3, borderRadius: '8px', backgroundColor: "black" }}>
                <img
                    src={petData.image || "https://via.placeholder.com/300"}
                    alt="Pet"
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        marginBottom: '20px'
                    }}
                />
                </Box>

                {/* Pet Details */}
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{ color: '#333333', fontWeight: 'bold', mb: 1 }}>
                        {petData.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Species:</strong> {petData.species}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Breed:</strong> {petData.breed}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Gender:</strong> {petData.gender}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Date of Birth:</strong> {`${petData.dateOfBirth.day} ${petData.dateOfBirth.month} ${petData.dateOfBirth.year}`}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Vaccination Records:</strong> {petData.vaccinationRecords}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Allergies:</strong> {petData.allergies}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Medications:</strong> {petData.medications}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Past Illnesses or Surgeries:</strong> {petData.pastIllnesses}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Feeding Instructions:</strong> {petData.feedingInstructions}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 4 }}>
                        <strong>Behavioural Concerns:</strong> {petData.behaviouralConcerns}
                    </Typography>
                </Box>

                {/* Edit Details Button */}
                <NavLink to="/form" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#3D84A8', color: 'white' }}>
                    Edit Details
                </Button>
                </NavLink>
            </Box>

            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    width: { xs: '90%', sm: '70%', md: '50%' },
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: { xs: '2rem', sm: '3rem', md: '3.5rem' },
                }}
            >
                {/* Heading */}
                <Typography variant="h5" sx={{ mb: 2, color: '#333333', fontWeight: 'bold' }}>
                    Pet Details
                </Typography>

                {/* Pet Image */}
                <Box sx={{ width: '60%', height: '16rem', mb: 3, borderRadius: '8px', backgroundColor: "black" }}>
                <img
                    src={petData.image || "https://via.placeholder.com/300"}
                    alt="Pet"
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        marginBottom: '20px'
                    }}
                />
                </Box>

                {/* Pet Details */}
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{ color: '#333333', fontWeight: 'bold', mb: 1 }}>
                        {petData.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Species:</strong> {petData.species}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Breed:</strong> {petData.breed}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Gender:</strong> {petData.gender}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Date of Birth:</strong> {`${petData.dateOfBirth.day} ${petData.dateOfBirth.month} ${petData.dateOfBirth.year}`}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Vaccination Records:</strong> {petData.vaccinationRecords}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Allergies:</strong> {petData.allergies}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Medications:</strong> {petData.medications}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Past Illnesses or Surgeries:</strong> {petData.pastIllnesses}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 2 }}>
                        <strong>Feeding Instructions:</strong> {petData.feedingInstructions}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333', mb: 4 }}>
                        <strong>Behavioural Concerns:</strong> {petData.behaviouralConcerns}
                    </Typography>
                </Box>

                {/* Edit Details Button */}
                <NavLink to="/form" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#3D84A8', color: 'white' }}>
                    Edit Details
                </Button>
                </NavLink>
            </Box>
        </Box>
    );
}


export default Demo;
