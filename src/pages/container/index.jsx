import { Container } from "@mui/material";
import { Box } from "@mui/system";
import AppBar from "../../components/appbar";
import Routes from "../../routes";

const AppContainer = () => {
    return (
        <>
            <AppBar />
            <Container maxWidth="xl">
                <Box mt={2}>
                    <Routes />
                </Box>
            </Container>
        </>
    )
}

export default AppContainer
