import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {
    useParams
} from "react-router-dom";
import ToDoForm from "../../components/todo-form";
import ToDoListButton from "../../components/todolist/todolistbutton";
import { updateTodo } from "../../redux/actions/todos";

const EditToDo = (props) => {
    const { id } = useParams();
    const todos = useSelector(state => state.todos)
    const todo = todos.filter(todo => todo.id == id)[0];
    const dispatch = useDispatch();
    const handleSubmit = data => {
        dispatch(updateTodo({ ...todo, ...data }));
    }
    return (
        <>
            <ToDoListButton />
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" >Edit To Do</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ToDoForm todo={todo} buttonLabel="Update" handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </>
    )
}

export default EditToDo
