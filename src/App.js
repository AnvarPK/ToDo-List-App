import { createTheme, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from "./pages/container";
import configStore from './redux/confStore';
import { ColorModeContext, getDesignTokens } from './theme';

const store = configStore();

function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <>
      <Router>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Provider store={store} >
              <AppContainer />
            </Provider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Router>
    </>
  );
}

export default App;
