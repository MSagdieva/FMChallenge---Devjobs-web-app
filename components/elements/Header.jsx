import React, { useContext } from "react";
import {ColorModeContext} from "../../pages/_app";
import Button from "@mui/material/Button";

export default function Header(props) {
  
  const colorMode = useContext(ColorModeContext);
      return (
        <header>
              {"devJobs"}
              <Button onClick={()=>{colorMode.toggleColorMode()}}>Change</Button>
        </header>
        //   <Container className={lightStyles.header_container}>
        //       <h3 className="header_heding"> Where in the World?</h3>
        //       <div>
        //       <span className={(theme==="dark"? darkStyles.light_moon_icon: lightStyles.light_moon_icon)}>
        //         <img src={(theme==="dark"? dark_moon: light_moon)} alt="moon pics"/>
        //         </span>
        //       <span className={lightStyles.theme_change_button} onClick={changeTheme}>{"Dark mode"}</span>
        //       </div>
        //  </Container>
      )
  }