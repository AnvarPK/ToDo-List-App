import { AppBar as MuiAppBar, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ThemeSwich from "../themeswitch";

const AppBar = () => {
    return (
        <MuiAppBar position="static" >
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2 }}
                        >
                            ToDo List App
                        </Typography>
                    </Toolbar>
                    <ThemeSwich />
                </Box>
            </Container>
        </MuiAppBar>
    )
}

export default AppBar
