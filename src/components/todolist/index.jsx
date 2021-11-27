import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { APP_CONSTANTS } from '../../appconsts';
import ToDo from './todo';



const ToDoList = (props) => {
    const { items, viewType } = props;
    const isGridType = viewType === APP_CONSTANTS.VIEW_TYPES.GRID;
    const widths = isGridType ? { xs: 12, sm: 6, md: 4, lg:3} : { xs: 12 };
    return (
        <Grid container spacing={2}  >
            {items.map(todo => (<Grid item key={todo.id} {...widths}  ><ToDo todo={todo} isGridType={isGridType} date="September 14, 2016" /></Grid>))}
        </Grid>
    )
}

export default ToDoList

ToDoList.defaultProps = {
    items: [],
    viewType: APP_CONSTANTS.VIEW_TYPES.GRID
}

ToDoList.propTypes = {
    items: PropTypes.array,
    viewType: PropTypes.oneOf([APP_CONSTANTS.VIEW_TYPES.LIST, APP_CONSTANTS.VIEW_TYPES.GRID])
}
