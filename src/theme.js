import { blueGrey, deepOrange, grey, purple, teal } from "@mui/material/colors";
import { createContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: teal[900],
                },
                background: {
                    default: teal[900],
                    paper: teal[100],
                },
                text: {
                    primary: teal[900],
                    secondary: teal[500],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: blueGrey[900],
                },
                divider: blueGrey[700],
                background: {
                    default: blueGrey[900],
                    paper: blueGrey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});