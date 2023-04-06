import React, {useState, useEffect, useContext} from "react";
import JobCard from "./JobCard";
import { Container, FormControl } from "@mui/material";
import Header from "./elements/Header";
import {ColorModeContext} from "../pages/_app";
import {DataContext} from "../pages/index";
import { useTheme } from '@mui/material/styles';
import JobsList from "./JobsList"; 
import SearchForm from "./SearchForm";

export default function Main() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const data = useContext(DataContext);
    const [searchQuery, setSearchQuery] = useState(data.map((job)=> {return job.id}));
    const [filterData, setFilterData] = useState(useContext(DataContext));
    const [isSearchQuery, setIsSearchQuery] = useState(false);
    
    useEffect (()=>
    {
      setFilterData(data.filter((job)=>{return searchQuery.indexOf(job.id)!="-1"}))
      searchQuery.length == data.length ? setIsSearchQuery(false) : setIsSearchQuery(true);
    },[searchQuery])

    return (<Container maxWidth="false" variant="body2" disableGutters={true}>  
    <Header/>
    <SearchForm setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
    <JobsList isSearchQuery={isSearchQuery}>
      {filterData.map((job)=>{
        return(
        <JobCard info={job} key={job.id}/>)})}
        </JobsList>
</Container> )
  }