import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

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
                <Button onClick={handleClose} autoFocus variant="contained" color="primary" >Cancel</Button>
                <Button onClick={deletehandler} variant="contained" color="error" >
                    Delete Forever
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
