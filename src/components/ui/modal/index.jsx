import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const Modal = (props) => {
    const { open, handleClose, handleDelete } = props
    const deletehandler = () => {
        handleDelete();
        handleClose();
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to permanently delete?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={deletehandler} autoFocus>
                    Delete Forever
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
