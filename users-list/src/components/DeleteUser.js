import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteUser } from "../action/userAction";


export default function DeleteUserToolbar(props) {

    const { numSelected, selected } = props;

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
                {numSelected > 0 ? (
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        Users List
                    </Typography>
                )}

                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton onClick={() => setOpen(true)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : ''
                }

            </Toolbar>
            <DeleteModal
                open={open}
                handleClose={handleClose}
                items={!Array.isArray(selected) ? [selected] : selected}
            />
        </div>
    );
}

const DeleteModal = ({ open, handleClose, items }) => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteUser(items));
        handleClose()
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle align='center'>Delete User</DialogTitle>
            <DialogContent>
                {`Are you sure you want to this ${items.length > 1 ? 'Users?' : 'User?'}`}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={deleteItem}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}