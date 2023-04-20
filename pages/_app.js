import React, {useState, useMemo, createContext}  from "react";
import '../public/assets/styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Head from 'next/head';

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
              transition: "all .3s",
              '&:hover':{background:"#939BF4"}
            },
          },
          {
            props: { variant: 'grey'},
            style: {
              color: mode === "light"? "#5964E0":"#FFF",
              boxSizing: "border-box",
              backgroundColor: "transparent",
              textTransform: "capitalize",
              fontFamily: "KumbhSans-Bold",
              fontSize: "16px",
              lineHeight: "20px",
              width:"141px",
              padding:16,
              height:52,
              "&:before":{
                content:'""',
                position:"absolute",
                width:"100%",
                height:"100%",
                opacity: 0.1,
                backgroundColor:  mode === "light"? "#5964E0":"#FFF",
                borderRadius:4,
                transition: "all .3s",
              },
              "&:hover":{
                "&:before":{opacity: 0.35,},
              },
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
            width: "70%"
          }}
        },
      MuiFormControlLabel: {
      styleOverrides: {
        root: {
        color: mode === "light"? "#000": "#FFF",}
      },
      MuiFormLabel:{
        styleOverrides: {
          root: {
            fontSize: 16,
            lineHeight: 20,
            color:"#f2e2e2"
          }
        }
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
        <Head>
          <link rel="shortcut icon" href="assets/favicon-32x32.png" />
        </Head>
      <Component {...pageProps} style={{backgroundColor: mode === "light"? "#FFF": "#000"}}/>
    </ThemeProvider>
    </ColorModeContext.Provider>)
  }
  export default MyApp