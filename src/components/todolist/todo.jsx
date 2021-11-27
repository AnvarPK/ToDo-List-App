import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../ui/modal';
import { styles } from './style';

const ToDo = (props) => {
    const { title, date, isGridType } = props;
    const [modalOpen, setModalOpen] = useState(false)

    const handleClose = () => {
        setModalOpen(false)
    }
    const handleDelete = () => {
    }


    const renderCardHeaderAction = () => {
        return isGridType ? (
            <IconButton aria-label="edit" color="success">
                <DoneIcon />
            </IconButton>) : (
            <Tooltip title="Delete forever" placement="left">
                <IconButton aria-label="delete-forever" color="error" onClick={() => setModalOpen(true)}>
                    <DeleteForeverIcon />
                </IconButton>
            </Tooltip>)
    }

    const renderCardItems = () => (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Description
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={styles.cardActions}>
                <IconButton aria-label="edit"  color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </>
    )

    const renderModal = () => {
        return (
            <Modal open={modalOpen} handleClose={handleClose} handleDelete={handleDelete} />
        )
    }

    return (<>
        <Card xs={2} sx={{ ...styles.card }}>
            <CardHeader
                action={renderCardHeaderAction()}
                title={title}
                subheader={isGridType ? date : ''}
            />
            {isGridType && renderCardItems()}
        </Card>
        {renderModal()}
    </>
    )
}

export default ToDo

ToDo.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    isGridType: PropTypes.bool,
}
