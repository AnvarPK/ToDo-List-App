import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { APP_CONSTANTS } from '../../appconsts';
import ToDo from './todo';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const ToDoList = (props) => {
    const { viewType } = props;
    const isGridType = viewType === APP_CONSTANTS.VIEW_TYPES.GRID;
    const widths = isGridType ? { xs: 12, sm: 6, md: 4, lg:3} : { xs: 12 };
    return (
        <Grid container spacing={2}  >
            {heights.map((title, index) => (<Grid item key={index} {...widths}  ><ToDo title={title} isGridType={isGridType} date="September 14, 2016" /></Grid>))}
        </Grid>
    )
}

export default ToDoList

ToDoList.defaultProps = {
    viewType: APP_CONSTANTS.VIEW_TYPES.GRID
}

ToDoList.propTypes = {
    viewType: PropTypes.oneOf([APP_CONSTANTS.VIEW_TYPES.LIST, APP_CONSTANTS.VIEW_TYPES.GRID])
}
