import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { APP_CONSTANTS } from "../../appconsts";
import ToDoList from "../../components/todolist";
import ToDoListButton from "../../components/todolist/todolistbutton";

const DeletedTodos = createSelector(
    (state) => state.todos,
    (todos) => todos.filter((todo) => todo.isDeleted)
)
const DeletedToDos = () => {

    const deletedTodos = useSelector(DeletedTodos)

    return (<>
        <ToDoListButton />
        <Grid container  >
            <Grid item xs={12}>
                <Typography variant="h6" >Deleted To-Dos</Typography>
            </Grid>
            <Grid item xs={12}>
                <ToDoList items={deletedTodos} viewType={APP_CONSTANTS.VIEW_TYPES.LIST} />
            </Grid>
        </Grid>
    </>)
}

export default DeletedToDos
