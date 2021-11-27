import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { APP_CONSTANTS } from "../../appconsts";
import ToDoList from "../../components/todolist";
import { NavLink } from "../../components/ui/navlink";
import { styles } from "./style";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Home = () => {
    return (
        <>
            <Box display="flex" justifyContent="flex-end" >
                <NavLink to={APP_CONSTANTS.ROUTES.DELETED_TODOS} sx={{...styles.addTodo, ...styles.deletedToDoLink }}>
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
                        <ToDoList items={heights} />
                    </Grid>
                </Grid>
                <Grid container item xs={4} sx={styles.deletedList}>
                    <Grid item xs={12}>
                        <Typography variant="h6" >Deleted To-Dos</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ToDoList viewType={APP_CONSTANTS.VIEW_TYPES.LIST} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
