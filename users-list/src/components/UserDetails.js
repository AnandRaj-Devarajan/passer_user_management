import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import EditUser from './EditUser';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const params = useParams()
    const navigate = useNavigate();
    const users = useSelector(state => state.user.users);
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        role: 'user'
    });
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false)

    useEffect(() => {
        if (params.id && users.length > 0) {
            const user = users.find(user => user.id === Number(params.id));
            if (user) {
                setUserData(user);
            }
        }
    }, [users, params.id])


    const handleEditUser = () => {
        setOpen(true)
    };
    const handleBack = () => {
        navigate('/');
    };
    return (
        <Container>
            <Typography variant="h4" gutterBottom textAlign={'center'} mt={2}>User Details</Typography>
            <Paper elevation={6} sx={{ mt: 2, p: 2 }}>
                <Typography variant="subtitle1">ID:{userData.id} </Typography>
                <Typography variant="subtitle1">Name: {userData.name}</Typography>
                <Typography variant="subtitle1">Email:{userData.email} </Typography>
                <Typography variant="subtitle1">Role: {userData.role}</Typography>
            </Paper>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handleBack}>Back</Button>
                <Button variant="contained" onClick={handleEditUser}>Edit</Button>
            </Box>
            <EditUser
                open={open}
                handleClose={handleClose}
                id={params?.id}
            />
        </Container>
    )
}

export default UserDetails