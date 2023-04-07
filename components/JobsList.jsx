import React, {useState, useEffect, useContext} from "react";
import Card1 from "./JobCard";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export default function JobsList(props) {
    const JobsContainer = styled(Container)
    `&{display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     grid-row-gap: 40px;
     grid-column-gap: 20px;
     margin: 0 auto;
     @media (max-width:780px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:475px){
        display:block;
        margin: 0 auto;
    }}
    `;
    const [expanded, setExpanded] = useState("");
    const changeExpanded = ()=>{
        expanded=="" ? setExpanded("expanded"):setExpanded("");
    }

    return (
          <Container className="jobs-list-container" style={{margin: "0 auto", textAlign: "center"}}>
            <JobsContainer className={`jobs-container ${expanded}`}>
                    {props.children}
            </JobsContainer>
            {!props.isSearchQuery ? <Button variant="basic" style={{margin:"56px 0 104px 0"}} onClick={changeExpanded}>{!expanded? "Load More":"Hide"}</Button>:<></>}
          </Container>
      )
  }