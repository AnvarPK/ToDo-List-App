import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import ToDoForm from "../../components/todo-form";
import ToDoListButton from "../../components/todolist/todolistbutton";
import { addTodo } from "../../redux/actions/todos";

const CreateToDo = () => {
    const dispatch = useDispatch()

    const handleSubmit = data => {
        dispatch(addTodo(data))
    }
    return (
        <>
            <ToDoListButton />
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary"  >Create To Do</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ToDoForm handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </>
    )
}

export default CreateToDo
