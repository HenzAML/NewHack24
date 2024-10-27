import React, { useState } from 'react';
import { Typography, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CryptoJS from 'crypto-js';

function Demo() {
    const [formData, setFormData] = useState({
        name: "",
        species: "",
        breed: "",
        gender: "",
        dateOfBirth: { day: "", month: "", year: "" },
        vaccinationRecords: "",
        allergies: "",
        medications: "",
        pastIllnesses: "",
        feedingInstructions: "",
        behaviouralConcerns: ""
    });
    
    const [encryptedData, setEncryptedData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEncrypt = () => {
        const encrypted = {};
        Object.keys(formData).forEach((key) => {
            const value = typeof formData[key] === 'object' 
                ? JSON.stringify(formData[key]) 
                : formData[key];
            encrypted[key] = CryptoJS.AES.encrypt(value, 'secret_key').toString();
        });
        setEncryptedData(encrypted);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f3f4f6',
                paddingY: { xs: '2rem', sm: '4rem', md: '5rem' },
                gap: 4,
            }}
        >
            {/* Form Box */}
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "grey.300",
                    width: { xs: "90%", sm: "70%", md: "50%" },
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "2rem", sm: "3rem", md: "3.5rem" }
                }}
            >
                <Typography variant="h5" sx={{ mb: 2, color: "#333333", fontWeight: "bold" }}>
                    Tell us about your <span style={{ color: "#14b8a6" }}>pet!</span>
                </Typography>

                <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 3 }} name="name" onChange={handleChange} />

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Species</InputLabel>
                    <Select name="species" variant="outlined" onChange={handleChange} label="Species">
                        <MenuItem value="Dog">Dog</MenuItem>
                        <MenuItem value="Cat">Cat</MenuItem>
                        <MenuItem value="Bird">Bird</MenuItem>
                    </Select>
                </FormControl>

                <TextField label="Breed" variant="outlined" fullWidth sx={{ mb: 3 }} name="breed" onChange={handleChange} />

                <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" sx={{ fontWeight: "medium", color: "#333333", mb: 1 }}>
                        Gender
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <FormControlLabel control={<Checkbox />} label="Male" sx={{ color: "#333333" }} onChange={() => setFormData({ ...formData, gender: "Male" })} />
                        <FormControlLabel control={<Checkbox />} label="Female" sx={{ color: "#333333" }} onChange={() => setFormData({ ...formData, gender: "Female" })} />
                        <FormControlLabel control={<Checkbox />} label="Neutral" sx={{ color: "#333333" }} onChange={() => setFormData({ ...formData, gender: "Neutral" })} />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel>Day</InputLabel>
                        <Select name="dateOfBirth.day" label="Day" onChange={(e) => setFormData({ ...formData, dateOfBirth: { ...formData.dateOfBirth, day: e.target.value } })}>
                            {Array.from({ length: 31 }, (_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Month</InputLabel>
                        <Select name="dateOfBirth.month" label="Month" onChange={(e) => setFormData({ ...formData, dateOfBirth: { ...formData.dateOfBirth, month: e.target.value } })}>
                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                                .map((month, i) => (
                                    <MenuItem key={month} value={month}>
                                        {month}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Year</InputLabel>
                        <Select name="dateOfBirth.year" label="Year" onChange={(e) => setFormData({ ...formData, dateOfBirth: { ...formData.dateOfBirth, year: e.target.value } })}>
                            {Array.from({ length: 100 }, (_, i) => (
                                <MenuItem key={2024 - i} value={2024 - i}>
                                    {2024 - i}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {["Vaccination Records", "Allergies", "Medications", "Past Illnesses or Surgeries", "Feeding Instructions", "Behavioural Concerns"].map(
                    (field) => (
                        <TextField key={field} label={field} variant="outlined" fullWidth sx={{ mb: 3 }} name={field.replace(/ /g, "").toLowerCase()} onChange={handleChange} />
                    )
                )}

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleEncrypt}>
                    Encrypt Details
                </Button>
            </Box>

            {/* Display Encrypted Data */}
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
                <Typography variant="h5" sx={{ mb: 2, color: '#333333', fontWeight: 'bold' }}>
                    Encrypted Pet Details
                </Typography>
                <Box sx={{ width: '100%' }}>
                    {Object.entries(encryptedData).map(([key, value]) => (
                        <Typography key={key} variant="body1" sx={{ color: '#333333', mb: 2 }}>
                            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
                        </Typography>
                    ))}
                </Box>

                <NavLink to="/form" style={{ textDecoration: 'none' }}>
                </NavLink>
            </Box>
        </Box>
    );
}

export default Demo;