import React, { useContext, useState } from "react";
import {ColorModeContext} from "../../pages/_app";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";
import Image from 'next/image';

const Header = (props) => {
  const colorMode = useContext(ColorModeContext);
  const [checked, setChecked] = useState(false);
  const CustomImage = styled(Image)
    `&:hover{
      cursor: pointer;
    }
    @media (max-width:780px){
    }
    `;
  const CustomizedHeader = styled(Container)`
      background: url("/assets/desktop/bg-pattern-header.svg") no-repeat 0% 0%;
      background-size: 100% 100%;
      height: 165px;
      padding: 0!important;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      @media (max-width:780px){
        height: 140px;
        background: url("/assets/tablet/bg-pattern-header.svg") no-repeat 0% 0%;
        background-size: 100% 100%;
      }
      @media (max-width:475px){
        height: 130px;
        background: url("/assets/mobile/bg-pattern-header.svg") no-repeat 0% 0%;
        background-size: 100% 100%;
      }
      `;
  const CustomizedSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 48,
        height: 24,
        padding: 0,
        margin: 20,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 3,
          top: 1,
          width: '28%',
          transitionDuration: '300ms',
          '& .MuiSwitch-input':{
            width: "100%",
            left: 0,
          },
          '&.Mui-checked': {
            transform: 'translateX(28px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              border: 0,
              backgroundColor: theme.palette.grey[100]
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: "#5964E0"
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 14,
          height: 14,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
  const handleChange = function(e){
    colorMode.toggleColorMode();
    colorMode.themeMode === 'light' ? 'dark' : 'light',
    setChecked(!checked);
  }
  const handleChangeSun = function(e){
    if (checked == true) {
      colorMode.toggleColorMode();
      colorMode.themeMode === 'light' ? 'dark' : 'light',
      setChecked(false);
    }
  }
  const handleChangeMoon = function(e){
    if (checked == false) {
      colorMode.toggleColorMode();
      colorMode.themeMode === 'light' ? 'dark' : 'light',
       setChecked(true);
    }
  }

      return (
      <CustomizedHeader maxWidth="false">
          <header className="header">
            <Typography variant="h5">{"devJobs"}</Typography>
            <div style={{display: "flex", alignItems: "center", width: 112, justifyContent: "space-between"}}>
              <CustomImage onClick={handleChangeSun}
                id="sun"
                priority
                height={150}
                width={180}
                src="/assets/desktop/icon-sun.svg"
                />
              <CustomizedSwitch checked = {checked} onChange = {handleChange}/>
              <CustomImage onClick={handleChangeMoon}
                id="moon"
                priority
                height={100}
                width={100}
                src="/assets/desktop/icon-moon.svg"
                />
            </div>
           </header>
        </CustomizedHeader>
      )
  }

  export default Header