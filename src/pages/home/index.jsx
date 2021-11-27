import { Button, Grid, Link } from "@mui/material"
import { Box } from "@mui/system"
import { APP_CONSTANTS } from "../../appconsts";
import { styles } from "./style";
import { NavLink } from "../../components/ui/navlink";

const Home = () => {
    return (
        <>
            <Box display="flex" justifyContent="flex-end" sx={styles.addTodo}>
                <NavLink to={APP_CONSTANTS.ROUTES.CREATE_TODO} sx={{ ...styles.addTodo }} >
                    <Button color="primary" variant="contained" sx={{ ...styles.addTodo }} >Add ToDo</Button>
                </NavLink>
            </Box>
            <Grid container display >
                rt
            </Grid>
        </>
    )
}

export default Home
