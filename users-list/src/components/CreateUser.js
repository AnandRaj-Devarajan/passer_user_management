import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Paper, TextField, MenuItem, Snackbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../action/userAction';

const CreateUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        role: 'user'
    });
    const [error, setError] = useState({
        name: '',
        email: ''
    });


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        if (!userData.name) {
            setError((prevState) => ({ ...prevState, name: 'Name is required' }));
            hasError = true;
        }
        if (!userData.email) {
            setError((prevState) => ({ ...prevState, email: 'Email is required' }));
            hasError = true;
        } else if (!isValidEmail(userData.email)) {
            setError((prevState) => ({ ...prevState, email: 'Invalid email address' }));
            hasError = true;
        }

        if (!hasError) {
            const newUser = { avatar: '', creationAt: '', email: userData.email, id: users.length + 1, name: userData.name, password: '', role: userData.role, updatedAt: '' }
            dispatch(addUser(newUser));
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    return (
        < Container sx={{ p: 2, display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <Paper elevation={3} sx={{ padding: '20px', width: '50%' }}>
                <Typography variant='h5' align='center'>Add New User</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={Boolean(error.name)}
                        helperText={error.name}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={userData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={Boolean(error.email)}
                        helperText={error.email}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        select
                        label="Role"
                        name="role"
                        value={userData.role}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mt: 2 }}
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </TextField>
                </form>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                    <Button component={Link} to="/" variant="outlined">
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Box>
            </Paper>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                message="User added successfully"
            />
        </Container >
    )
}

export default CreateUser