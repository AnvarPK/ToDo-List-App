import { Grid, Typography } from "@mui/material"
import { APP_CONSTANTS } from "../../appconsts";
import ToDoList from "../../components/todolist"
import ToDoListButton from "../../components/todolist/todolistbutton";

const items = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const DeletedToDos = () => {
    return (<>
        <ToDoListButton />
        <Grid container  >
            <Grid item xs={12}>
                <Typography variant="h6" >To-Dos</Typography>
            </Grid>
            <Grid item xs={12}>
                <ToDoList items={items} viewType={APP_CONSTANTS.VIEW_TYPES.LIST} />
            </Grid>
        </Grid>
    </>)
}

export default DeletedToDos
