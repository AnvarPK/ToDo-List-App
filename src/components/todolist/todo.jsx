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
import { completeTodo, deleteTodo, removeTodo, restoreTodo } from '../../redux/actions/todos';
import Modal from '../ui/modal';
import { NavLink } from '../ui/navlink';
import { styles } from './style';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { grey } from '@mui/material/colors';

const ToDo = (props) => {
    const { todo, isGridType } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const textDecoration = todo.isCompleted ? 'line-through' : 'unset';
    const dispatch = useDispatch()

    const handleClose = () => {
        setModalOpen(false)
    }
    const handleTodoDelete = () => {
        dispatch(deleteTodo(todo.id))
    }
    const handleTodoRemove = () => {
        dispatch(removeTodo(todo.id))

    }
    const handleTodoRestore = () => {
        dispatch(restoreTodo(todo.id))
    }
    const handleTodoComplete = () => {
        dispatch(completeTodo(todo.id))
    }

    const renderCardHeaderAction = () => {
        const isDeletedActions = (
            <>
                <Tooltip title="Restore Todo" placement="left">
                    <IconButton aria-label="restore-todo" color="success" onClick={handleTodoRestore}>
                        <RestoreFromTrashIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete forever" placement="left">
                    <IconButton aria-label="delete-forever" color="error" onClick={() => setModalOpen(true)}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Tooltip>
            </>);

        const isActive = todo.isCompleted ?
            (<IconButton aria-label="edit" color="default" onClick={handleTodoComplete}>
                <ToggleOnIcon />
            </IconButton>) :
            (<IconButton aria-label="edit" color="success" onClick={handleTodoComplete}>
                <ToggleOffIcon />
            </IconButton>);
        return todo.isDeleted ? isDeletedActions : isActive;
    }

    const renderCardItems = () => (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ textDecoration }}>
                    {todo.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={styles.cardActions}>
                <NavLink to={`${APP_CONSTANTS.ROUTES.EDIT_TODO.replace(':id', todo.id)}`} disabled sx={{ pointerEvents: todo.isCompleted ? 'none' : 'auto' }}>
                    <IconButton aria-label="edit" color={todo.isCompleted ? "default" : "primary"}>
                        <EditIcon />
                    </IconButton>
                </NavLink>
                <IconButton aria-label="delete" color="error" onClick={handleTodoDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </>
    )

    const renderModal = () => {
        return (
            <Modal open={modalOpen} handleClose={handleClose} handleDelete={handleTodoRemove} />
        )
    }

    return (<>
        <Card xs={2} sx={{ ...styles.card, background: todo.isCompleted ? grey[100] : 'transparent' }}>
            <CardHeader
                action={renderCardHeaderAction()}
                title={todo.title}
                sx={{ textDecoration }}
                subheader={isGridType ? `Added ${formatDistance(todo.date, new Date(), { addSuffix: true })}` : null}
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
