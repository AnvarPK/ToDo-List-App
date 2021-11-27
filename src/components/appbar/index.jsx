import { AppBar as MuiAppBar, Container, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
    return (
        <MuiAppBar position="static" >
            <Container maxWidth="xl">
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
            </Container>
        </MuiAppBar>
    )
}

export default AppBar
