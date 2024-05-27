import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5} p={3} boxShadow={3} bgcolor="background.paper">
                <Typography variant="h4" gutterBottom>
                    Forgot Password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Reset Password
                    </Button>
                </form>
                {message && <Typography mt={2}>{message}</Typography>}
            </Box>
        </Container>
    );
}

export default ForgotPassword;
