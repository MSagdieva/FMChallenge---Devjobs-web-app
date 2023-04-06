import React, {useState, useMemo, createContext}  from "react";
import '../public/assets/styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const ColorModeContext = createContext({ toggleColorMode: () => {}, themeMode: "" });

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
          backgroundColor: mode === "light"? "#F4F6F8":"#121721",}}
      },
      MuiTypography: {
        styleOverrides: {
          root: {
          padding: 0},
          h6:{
            fontFamily: "'KumbhSans-Bold', sans-serif",
            marginTop:20,
          },
          h5:{
            fontFamily: "'KumbhSans-Bold', sans-serif",
            color: "#FFF",
          }
        }
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'basic' },
            style: {
              backgroundColor:"#5964E0",
              color: "#FFF",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "20px",
              textTransform: "capitalize",
              width:"147px",
              padding:16,
            },
          },
          {
            props: { variant: 'grey'},
            style: {
              backgroundColor:"#C9C9C9",
              color: "#5964E0",
              textTransform: "capitalize",
              fontSize: "16px",
              lineHeight: "20px",
              width:"141px",
              padding:16,
            },
          },
        ],
      },
      MuiAvatar: {
        styleOverrides: {
          root:{
            position: "relative",
            top: -20,
            left: 20,
            zIndex: 2,
            borderRadius: 15},
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
    },
    MuiListItemIcon:{
      styleOverrides: {
        root: {
          color: "#5964E0",
          fontFamily: "'KumbhSans-Bold', sans-serif",
          minWidth: 25,
        },
    }
  },
  MuiListItem:{
    styleOverrides: {
      root: {
       paddingLeft: 0,
       alignItems: "flex-start",
      },
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
const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
      themeMode: mode
    }),
    [mode],
  );
  

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
    <Component {...pageProps} style={{backgroundColor: mode === "light"? "#FFF": "#000"}}/>
    </ThemeProvider>
    </ColorModeContext.Provider>)
  }
  export default MyApp