import React, {useState, useMemo, createContext}  from "react";
import '../public/assets/styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const getDesignTokens = (mode) => ({
    typography: {
      fontFamily: `"KumbhSans-Regular", Arial`
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
          padding: 0,
          margin: 0,
          backgroundColor: mode === "light"? "#FFF": "#000",}}
      },
      MuiTypography: {
        styleOverrides: {
          root: {
          padding: 0}}
      },
      MuiButton: {
        styleOverrides: {
          root: {
          backgroundColor:"#5964E0",
          color: "#FFF"}
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root:{
            position: "relative",
            top: -40,
            zIndex:2,
            borderRadius: 20},
          img: {
            objectFit: "contain",
            height: "initial",
          }}
        },
      MuiFormControlLabel: {
      styleOverrides: {
        root: {
        color: mode === "light"? "#000": "#FFF",}
      }
    }},
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary:
            {main:"#5964E0"},
            divider: "#5964E0",
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
            {main: "#5964E0",
          },
            divider: "5964E0",
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
      }
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
    <Component {...pageProps} style={{backgroundColor: mode === "light"? "#FFF": "#000"}}/>
    </ThemeProvider>
    </ColorModeContext.Provider>)
  }
  export default MyApp