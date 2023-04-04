import React, {useState, useEffect, useContext} from "react";
import SearchLine from "./elements/SearchLine";
import { Checkbox, FormControlLabel, Button, Container } from "@mui/material";
import {DataContext} from "../pages/index";

export default function SearchForm(props) {
  const data = useContext(DataContext);
  const searchData = createDataForSearch();
  const defaultArray = data.map((job)=>{return job.id});
  function createDataForSearch(){
    let searchData = {"countries":{},"titles":{},"companies":{}, "expertices":{}, "contract":{}};
    let setInfo = new Set;
    data.map((job) => {
          {
            if (!setInfo.has(job.position))
            {            Object.defineProperty(searchData.titles, job.position, {
              value: [job.id],
              writable: true
            });
            }
            else{
              searchData.titles[job.position].push(job.id);
            }
            
            if (!setInfo.has(job.company))
            {            Object.defineProperty(searchData.companies, job.company, {
              value: [job.id],
              writable: true
            });
            }
            else{
              searchData.companies[job.company].push(job.id);
            }
            if (!setInfo.has(job.location))
            {            Object.defineProperty(searchData.countries, job.location, {
              value: [job.id],
              writable: true
            });
            }
            else{
              searchData.countries[job.location].push(job.id);
            }
            if (!setInfo.has(job.contract))
            {            Object.defineProperty(searchData.contract, job.contract, {
              value: [job.id],
              writable: true
            });
            }
            else{
              searchData.contract[job.contract].push(job.id);
            }
            job.expertice.map(item=>{if (!setInfo.has(item))
            {            Object.defineProperty(searchData.expertices, item, {
              value: [job.id],
              writable: true
            });
            }
            else{
              searchData.expertices[item].push(job.id);
            }});
            
            setInfo.add(job.position);
            setInfo.add(job.company);
            job.expertice.map(item=>{setInfo.add(item)});
            setInfo.add(job.location);
            setInfo.add(job.contract);
           // console.log(searchData);
        }
    });
   return searchData;
  }
  function changeSearchData(){
    if (document.getElementById("fulltime").checked)
    {props.setSearchQuery(searchData.contract["Full Time"]);}
    else props.setSearchQuery(defaultArray);
  }
  return(
<Container>
<SearchLine type="basic" label="Filter by title, companies, expertise..." pic="/assets/desktop/icon-search.svg" searcData={searchData} data={data} setSearchQuery={props.searchQuery}/>
<SearchLine type= "location" label="Filter by location..." pic="/assets/desktop/icon-location.svg" searcData={searchData} data={data} setSearchQuery={props.searchQuery}/>
<FormControlLabel
        control={
          <Checkbox name="fulltime" id="fulltime"/>
        }
        label="Full time only"
      />
<Button onClick={changeSearchData}>Search</Button>
</Container>)
}