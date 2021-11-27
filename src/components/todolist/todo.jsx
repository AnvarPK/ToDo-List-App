import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import { Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { APP_CONSTANTS } from '../../appconsts';
import { removeTodo } from '../../redux/actions/todos';
import Modal from '../ui/modal';
import { NavLink } from '../ui/navlink';
import { styles } from './style';

const ToDo = (props) => {
    const { todo, isGridType } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch()

    const handleClose = () => {
        setModalOpen(false)
    }
    const handleDelete = () => {
    }
    const handleTodoRemove = () => {
        console.log(todo.id)
        dispatch(removeTodo(todo.id))
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
                    {todo.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={styles.cardActions}>
                <NavLink to={`${APP_CONSTANTS.ROUTES.EDIT_TODO.replace(':id', 1)}`}>
                    <IconButton aria-label="edit" color="primary">
                        <EditIcon />
                    </IconButton>
                </NavLink>
                <IconButton aria-label="delete" color="error" onClick={handleTodoRemove}>
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
                title={todo.title}
                subheader={isGridType ? `Added ${formatDistance(todo.date,new Date(),{ addSuffix: true })}`: null}
            />
            {isGridType && renderCardItems()}
        </Card>
        {renderModal()}
    </>
    )
}

export default ToDo

ToDo.propTypes = {
    todo: PropTypes.object.isRequired,
    date: PropTypes.string,
    isGridType: PropTypes.bool,
}
