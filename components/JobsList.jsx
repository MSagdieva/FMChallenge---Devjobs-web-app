import React, {useState, useEffect, useContext} from "react";
import Card1 from "../components/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function JobsList(props) {
    const [expanded, setExpanded] = useState("");
    const changeExpanded = ()=>{
        expanded=="" ? setExpanded("expanded"):setExpanded("");
    }

    return (
          <div className="jobs-list-container">
            <div className={`container ${expanded}`}
                    style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr", gridRowGap: 20 }}>
                    {props.children}
            </div>
            <Button style={{backgroundColor:"#5964E0"}} onClick={changeExpanded}>{!expanded? "Load More":"Hide"}</Button>
          </div>
      )
  }