import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.status === 200) {
                setMessage('Login successful');
            }
        } catch (error) {
            setMessage('Login failed. Please check your username and password.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5} p={3} boxShadow={3} bgcolor="background.paper">
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
                    Login
                </Button>
                {message && <Typography mt={2}>{message}</Typography>}
            </Box>
        </Container>
    );
}

export default Login;
