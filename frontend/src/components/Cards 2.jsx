import React from 'react';
import { Box, Typography } from '@mui/material';

function PetCard() {
    return (
        <Box
            sx={{
                width: 300,
                padding: 2,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'left',
                margin: 'auto'
            }}
        >
            {/* Placeholder Image */}
            <Box
                component="img"
                src="https://via.placeholder.com/150"
                alt="Placeholder for pet"
                sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    objectFit: 'cover',
                    mb: 2
                }}
            />

            {/* Pet Name */}
            <Typography variant="h6" sx={{ color: '#46CDCF', fontWeight: 'bold', mb: 1, fontSize: '1.5rem' }}>
                Buddy
            </Typography>

            {/* Pet Details */}
            <Box sx={{ width: '100%', pl: 1, color: '#48466D' }}>
                <Typography variant="body1" component="div" sx={{fontWeight: 'bold' }}>
                    Species <span style={{ fontWeight: 'normal' }}>: Dog</span>
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                    Breed <span style={{ fontWeight: 'normal' }}>: German Shepherd</span>
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                    Age <span style={{ fontWeight: 'normal' }}>: 2 years</span>
                </Typography>
            </Box>
        </Box>
    );
}

export default PetCard;