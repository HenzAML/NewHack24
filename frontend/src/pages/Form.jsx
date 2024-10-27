// Form.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, FormControl, Select, MenuItem, InputLabel, Box, Checkbox, FormControlLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Form() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL); // Set the image URL to preview
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
                paddingY: { xs: '2rem', sm: '4rem', md: '5rem' }, // Responsive padding for top and bottom
            }}
        >
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
                    backgroundColor: '#ffffff', // White background for form box
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: { xs: '2rem', sm: '3rem', md: '3.5rem' }, // Responsive padding inside box
                }}
            >
                <Box>
                    <Typography variant="h5" sx={{ mb: 2, color: '#333333', fontWeight: 'bold' }}>
                        Tell us about your <span style={{ color: '#14b8a6' }}>pet!</span>
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4, color: '#555555' }}>
                        Rest assured, this information is just between you and your trusted vet
                    </Typography>

                    {/* Name */}
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 3 }}
                    />

                    {/* Species */}
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel sx={{ color: '#333333' }}>Species</InputLabel>
                        <Select variant="outlined" label="Species">
                            <MenuItem value="Dog">Dog</MenuItem>
                            <MenuItem value="Cat">Cat</MenuItem>
                            <MenuItem value="Bird">Bird</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Breed */}
                    <TextField
                        label="Breed"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 3 }}
                    />

                    {/* Gender */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#333333', mb: 1 }}>
                            Gender
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormControlLabel control={<Checkbox />} label="Male" sx={{ color: '#333333' }} />
                            <FormControlLabel control={<Checkbox />} label="Female" sx={{ color: '#333333' }} />
                            <FormControlLabel control={<Checkbox />} label="Neutral" sx={{ color: '#333333' }} />
                        </Box>
                    </Box>

                    {/* Date of Birth */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#333333' }}>Day</InputLabel>
                            <Select label="Day">
                                {Array.from({ length: 31 }, (_, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#333333' }}>Month</InputLabel>
                            <Select label="Month">
                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, i) => (
                                    <MenuItem key={month} value={i + 1}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: '#333333' }}>Year</InputLabel>
                            <Select label="Year">
                                {Array.from({ length: 100 }, (_, i) => (
                                    <MenuItem key={2024 - i} value={2024 - i}>
                                        {2024 - i}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Additional Text Fields */}
                    {["Vaccination Records", "Allergies", "Medications", "Past Illnesses or Surgeries", "Feeding Instructions", "Behavioural Concerns"].map((field) => (
                        <TextField
                            key={field}
                            label={field}
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                    ))}

                    {/* Upload Pictures */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#333333', mb: 1 }}>
                            Upload Pictures
                        </Typography>
                        <label htmlFor="upload-image" style={{ cursor: 'pointer', display: 'block' }}>
                            <Box sx={{
                                border: '2px dashed',
                                borderColor: 'grey.300',
                                borderRadius: 2,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'grey.500',
                                overflow: 'hidden', // Ensures image fits within the box
                                width: '100%',
                                height: '200px', // Define a specific height for the box
                            }}>
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Uploaded preview"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                ) : (
                                    <>
                                        <Box sx={{ mb: 1, color: 'grey.500' }}>📷</Box>
                                        <Typography variant="body2" sx={{ color: '#888888' }}>Select images</Typography>
                                    </>
                                )}
                            </Box>
                        </label>
                        <input
                            type="file"
                            id="upload-image"
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Box>

                    {/* Save Button */}
                    <NavLink to="/petdetails" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#3D84A8', color: 'white' }}>
                        Save It
                    </Button>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    );
}

export default Form;