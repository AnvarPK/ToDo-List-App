import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './style';

const ToDo = (props) => {
    const { title, date, isGridType } = props;

    const renderCardHeaderAction = () => {
        return isGridType ? (
            <IconButton aria-label="edit">
                <DoneIcon />
            </IconButton>) : (
            <Tooltip title="Delete forever" placement="left">
                <IconButton aria-label="delete-forever">
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
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </>
    )
    return (
        <Card xs={2} sx={{ ...styles.card }}>
            <CardHeader
                action={renderCardHeaderAction()}
                title={title}
                subheader={isGridType ? date : ''}
            />
            {isGridType && renderCardItems()}
        </Card>
    )
}

export default ToDo

ToDo.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    isGridType: PropTypes.bool,
}
