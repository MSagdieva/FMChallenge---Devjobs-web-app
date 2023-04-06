import React, {useState, useEffect, useContext} from "react";
import Card1 from "./JobCard";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function JobsList(props) {
    const [expanded, setExpanded] = useState("");
    const changeExpanded = ()=>{
        expanded=="" ? setExpanded("expanded"):setExpanded("");
    }

    return (
          <Container className="jobs-list-container" style={{margin: "0 auto", textAlign: "center"}}>
            <Container className={`jobs-container ${expanded}`}
                    style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr", gridRowGap: 20, margin: "0 auto" }}>
                    {props.children}
            </Container>
            {!props.isSearchQuery ? <Button variant="basic" onClick={changeExpanded}>{!expanded? "Load More":"Hide"}</Button>:<></>}
          </Container>
      )
  }