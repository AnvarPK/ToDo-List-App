import { deepOrange, grey } from "@mui/material/colors";
import { createContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                background: {
                    default: deepOrange[100],
                    paper: deepOrange[100],
                },
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});