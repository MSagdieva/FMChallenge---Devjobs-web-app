import React, {useState, useEffect, useContext} from "react";
import JobCard from "../components/JobCard";
import Container from "@mui/material/Container";
import Header from "../components/elements/Header";
import Button from "@mui/material/Button";
import {ColorModeContext} from "./_app";
import { useTheme } from '@mui/material/styles';
import JobsList from "../components/JobsList";

export default function Main({allJobsData}) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (<Container maxWidth="false" variant="body2" disableGutters={true}>
        <Header />
        <JobsList>{allJobsData.map((job)=>{
            return <JobCard info={job} key={job.id}/>})}</JobsList>
    </Container>)
  }

  export async function getServerSideProps(){
    const res = await fetch('/data.json');
    const allJobsData = await res.json();
    return {
      props: {
        allJobsData,
      },
    };
  }