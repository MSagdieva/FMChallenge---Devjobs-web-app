import React, {useState, useMemo, createContext}  from "react";
import '../public/assets/styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const getDesignTokens = (mode) => ({
    typography: {
      fontFamily: `"KumbhSans-Regular", Arial`,
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary:
            {main:"#F2F2F2"},
            divider: amber[200],
            background: {
              default: "#FFF",
              paper:  "#FFF",
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            primary: 
            {main: "#FFF000"
          },
            divider: "#FFF000",
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  
const MyApp = ({ Component, pageProps }) => {
const [mode, setMode] = useState('light');
const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
    </ColorModeContext.Provider>)
  }
  export default MyApp