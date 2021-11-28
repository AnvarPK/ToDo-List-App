import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from '../../appconsts';

const ToDoForm = (props) => {
    const { todo, buttonLabel, handleSubmit } = props;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: todo?.title,
        description: todo?.description,
    })
    const [errors, setErrors] = useState({
        title: false,
    });
    const onSubmit = e => {
        e.preventDefault();
        if (formData.title.trim()) {
            setErrors(prev => ({
                ...prev, title: false
            }));
            handleSubmit(formData);
            navigate(APP_CONSTANTS.ROUTES.HOME);
        } else {
            setErrors(prev => ({
                ...prev, title: true
            }));
        }
    };
    return (
        <Box sx={{ maxWidth: 'sm' }} component="form" onSubmit={onSubmit}>
            <FormGroup >
                <FormControl fullWidth >
                    <TextField
                        value={formData.title}
                        error={errors.title}
                        id="title"
                        label="Title"
                        variant="standard"
                        fullWidth
                        helperText={errors.title ? "Title Cannot be Empty" : null}
                        onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <TextField
                        value={formData.description}
                        id="description"
                        label="Description"
                        variant="standard"
                        multiline
                        fullWidth
                        onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />
                </FormControl>
                <FormControl sx={{ marginTop: 2 }}>
                    <Button type="submit" variant="contained" color="primary" >{buttonLabel}</Button>
                </FormControl>
            </FormGroup >
        </Box>
    )
}

export default ToDoForm

ToDoForm.defaultProps = {
    buttonLabel: 'Add'
}

ToDoForm.propTypes = {
    buttonLabel: PropTypes.string
}