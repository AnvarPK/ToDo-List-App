import { Box, Button } from '@mui/material'
import React from 'react'
import { APP_CONSTANTS } from '../../appconsts'
import { NavLink } from '../ui/navlink'
import { styles } from './style'

const ToDoListButton = () => {
    return (
        <Box display="flex" justifyContent="flex-end" >
            <NavLink to={APP_CONSTANTS.ROUTES.HOME} sx={styles.addTodo}>
                <Button color="primary" variant="contained" >ToDo List</Button>
            </NavLink>
        </Box>
    )
}

export default ToDoListButton
