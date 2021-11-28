import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { APP_CONSTANTS } from "../../appconsts";
import ToDoList from "../../components/todolist";
import { NavLink } from "../../components/ui/navlink";
import { styles } from "./style";

const ToDos = createSelector(
    (state) => state.todos,
    (todos) => todos.filter((todo) => !todo.isDeleted)
)

const DeletedTodos = createSelector(
    (state) => state.todos,
    (todos) => todos.filter((todo) => todo.isDeleted)
)


const Home = () => {

    const todos = useSelector(ToDos)
    const deletedTodos = useSelector(DeletedTodos)

    return (
        <>
            <Box display="flex" justifyContent="flex-end" >
                <NavLink to={APP_CONSTANTS.ROUTES.DELETED_TODOS} sx={{ ...styles.addTodo, ...styles.deletedToDoLink }}>
                    <Button color="error" variant="contained" >Deleted ToDos</Button>
                </NavLink>
                <NavLink to={APP_CONSTANTS.ROUTES.CREATE_TODO} sx={styles.addTodo}>
                    <Button color="primary" variant="contained" >Add ToDo</Button>
                </NavLink>
            </Box>

            <Grid container spacing={2} alignItems="flex-start">
                <Grid container item xs={12} md={8} >
                    <Grid item xs={12}>
                        <Typography variant="h6" >To-Dos</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ToDoList items={todos} />
                    </Grid>
                </Grid>
                <Grid container item xs={4} sx={styles.deletedList}>
                    <Grid item xs={12}>
                        <Typography variant="h6" >Deleted To-Dos</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ToDoList viewType={APP_CONSTANTS.VIEW_TYPES.LIST} items={deletedTodos} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
