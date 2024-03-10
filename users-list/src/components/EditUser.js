import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../action/userAction';

const EditUser = ({ id, open, handleClose, }) => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);
    const [userData, setUserData] = useState({
        id: '',
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

    useEffect(() => {
        setUserData({
            id: id,
            name: users[id !== 0 ? id - 1 : id].name,
            email: users[id !== 0 ? id - 1 : id].email,
            role: users[id !== 0 ? id - 1 : id].role !== 'user' || 'role' ? 'user' : users[id].role
        })
    }, [id])

    const handleSubmit = () => {
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
            dispatch(editUser(userData.id, userData))
            if (!loading) {
                handleClose()
            }

        }
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditUser;