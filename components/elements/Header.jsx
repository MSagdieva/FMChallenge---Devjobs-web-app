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
    `;
  const CustomizedHeader = styled(Container)`
      background: url("/assets/desktop/bg-pattern-header.svg") no-repeat 0% 0%;
      background-size: 100% 100%;
      height: 165px;
      padding: 0!important;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      `;
  const CustomizedSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 30,
        height: 18,
        padding: 0,
        margin: 20,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 3,
          width: '28%',
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
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
          width: 20,
          height: 11,
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
    console.log(e.target.id);
    setChecked(!checked);
  }
  const handleChangeSun = function(e){
    if (checked == true) {
      colorMode.toggleColorMode();
      setChecked(false);
    }
  }

  const handleChangeMoon = function(e){
    if (checked == false) {
      colorMode.toggleColorMode();
       setChecked(true);
    }
  }

      return (
      <CustomizedHeader maxWidth="false">
          <header className="header">
            <Typography variant="h6">{"devJobs"}</Typography>
            <div sytle={{display: "flex", alignItems: "center"}}>
              <CustomImage onClick={handleChangeSun}
                id="sun"
                priority
                height={12}
                width={12}
                src="/assets/desktop/icon-sun.svg"
                />
              <CustomizedSwitch checked = {checked} onChange = {handleChange}/>
              <CustomImage onClick={handleChangeMoon}
                id="moon"
                priority
                height={12}
                width={12}
                src="/assets/desktop/icon-moon.svg"
                />
            </div>
           </header>
        </CustomizedHeader>
      )
  }

  export default Header