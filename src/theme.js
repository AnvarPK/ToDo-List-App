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
                    paperDisabled: teal[50],
                },
                text: {
                    primary: teal[900],
                    secondary: teal[500],
                    input: grey[900],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: grey[900],
                },
                // divider: grey[700],
                background: {
                    default: grey[900],
                    paperDisabled: grey[300],
                },
                text: {
                    primary: grey[100],
                    secondary: grey[500],
                    input: grey[900],
                },
            }),
    },
});