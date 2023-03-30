import React, { useContext, useState } from "react";
import {ColorModeContext} from "../../pages/_app";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";
import Switch from "@mui/material/Switch";


export default function Header(props) {
  const colorMode = useContext(ColorModeContext);
  const [checked, setChecked] = useState(false);
  const CustomizedHeader = styled(Container)`
      background: url("./assets/desktop/bg-pattern-header.svg") no-repeat 0% 0%;
      background-size: 100% 100%;
      height: 165px;
      padding: 0!important;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      `;
  const handleChange = function(e){
    colorMode.toggleColorMode();
    setChecked(!checked);
  }

      return (
      <CustomizedHeader maxWidth="false">
              <Container className="header">
              <Typography variant="h6">{"devJobs"}</Typography>
              <Switch checked={checked} onChange ={handleChange}/>
              </Container>
        </CustomizedHeader>
      )
  }