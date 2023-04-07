import React, { useContext, useState } from "react";
import {ColorModeContext} from "../../pages/_app";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import Image from 'next/image';

const Footer = (props) => {
  const ColMode = useContext(ColorModeContext);
  const CustomImage = styled(Image)
    `&:hover{
      cursor: pointer;
    }
    @media (max-width:780px){
    }
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
      @media (max-width:420px){
      }
      `;
  

      return (
      <CustomizedFooter maxWidth="false">
            <Container maxWidth="md" style={{display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor:"transparent"}}>
              {props.children}
            </Container>
        </CustomizedFooter>
      )
  }

  export default Footer