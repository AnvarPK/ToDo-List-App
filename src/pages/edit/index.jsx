import { Grid, Typography } from "@mui/material"
import ToDoForm from "../../components/todo-form"
import ToDoListButton from "../../components/todolist/todolistbutton"

const EditToDo = () => {
    const handleSubmit = data => {
        console.log(data)
    }
    return (
        <>
            <ToDoListButton />
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6" >Edit To Do</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ToDoForm handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </>
    )
}

export default EditToDo
