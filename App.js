import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';


function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        User Authentication System
                    </Typography>
                    <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
