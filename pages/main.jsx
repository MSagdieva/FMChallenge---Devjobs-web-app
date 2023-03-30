import React, {useState, useEffect, useContext} from "react";
import Card1 from "../components/Card";
import Container from "@mui/material/Container";
import Header from "../components/elements/Header";
import Button from "@mui/material/Button";
import {ColorModeContext} from "./_app";
import { useTheme } from '@mui/material/styles';
import JobsList from "../components/JobsList";
  
export async function getInfo() {
    const res = await fetch('/data.json')
    const jobs = await res.json()
    return jobs;
  }
  function setData(data){
    const list = [];
     data.map((job)=>{
          list.push(
              <Card1 info={job} key={job.id}/>);
          })
      return list;
    }
export default function Main() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [jobs, setJobs] = useState([]);
    const [searchData, setSearchData] = useState(null);
    useEffect(()=>{
        getInfo().then((result)=>{
        setJobs(result);
        })},[])
    useEffect(()=>{
        setSearchData(setData(jobs)
        );
            }, [jobs])

    return (<Container maxWidth="false" variant="body2" disableGutters={true}>
        <Header />
        <JobsList>{searchData}</JobsList>
    </Container>)
  }