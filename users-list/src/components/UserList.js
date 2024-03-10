import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, Button } from '@mui/material';
import { fetchUsers } from '../action/userAction';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from './EnhanceTable';

const headCells = [

    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: 'Id'
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'User Name'
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: ' Email'
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role'
    }
];


function UserList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers());
        } else {
            setUsersList(users);
        }
    }, [dispatch, users]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box p={2}>
                {usersList?.length ?
                    <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Button variant="contained" onClick={() => navigate('/user/create-user')}>
                            Add User
                        </Button>
                    </Stack> : ''}
                <EnhancedTable
                    users={usersList}
                    headCells={headCells}
                    loading={loading}
                />
            </Box>
        </Box>
    )
}

export default UserList