import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ResetPassword() {
    const { resetToken } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/reset-password', { resetToken, newPassword });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5} p={3} boxShadow={3} bgcolor="background.paper">
                <Typography variant="h4" gutterBottom>
                    Reset Password
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="New Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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

export default ResetPassword;
