import React, {useState, useEffect, useContext} from "react";
import JobCard from "./JobCard";
import { Container } from "@mui/material";
import Header from "./elements/Header";
import Button from "@mui/material/Button";
import {ColorModeContext} from "../pages/_app";
import {DataContext} from "../pages/index";
import { useTheme } from '@mui/material/styles';
import JobsList from "./JobsList"; 
import SearchLine from "./elements/SearchLine";

export default function Main() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const data = useContext(DataContext);
    return (<Container maxWidth="false" variant="body2" disableGutters={true}>  
    <Header/>
    <SearchLine/>
    <SearchLine/>
    <JobsList>
      {data.map((job)=>{
        return(
        <JobCard info={job} key={job.id}/>)})}
        </JobsList>
</Container> )
  }