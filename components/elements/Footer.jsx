import React, { useContext, useState } from "react";
import {ColorModeContext} from "../../pages/_app";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import Image from 'next/image';

const Footer = (props) => {
  const ColMode = useContext(ColorModeContext);
  const CustomContainer = styled(Container)
    `&{display: flex;
     align-items: center;
     justify-content: space-between;
     background-color:transparent;
    @media (max-width:475px){
      justify-content: center;
    }}
    `;
  const CustomizedFooter= styled(Container)`
      background-color: ${ColMode.themeMode == "light"? "#FFF": "#212121"};
      color: ${ColMode.themeMode == "light"? "#000": "#FFF"};
      height: 96px;
      padding: 0!important;
      margin: 30px auto 0 auto;
      display: flex;
      align-items:center;
      justify-content:center;
      @media (max-width:475px){
      }
      `;
  

      return (
      <CustomizedFooter maxWidth="false">
            <CustomContainer maxWidth="md">
              {props.children}
            </CustomContainer>
        </CustomizedFooter>
      )
  }

  export default Footer