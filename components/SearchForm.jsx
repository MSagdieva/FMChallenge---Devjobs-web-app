import React, {useState, useEffect, useContext} from "react";
import SearchLine from "./elements/SearchLine";
import { Checkbox, FormControlLabel, Button, Container } from "@mui/material";
import {DataContext} from "../pages/index";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function SearchForm(props) {
  const data = useContext(DataContext);
  const [searchData, setSearchData] = useState(createDataForSearch());
    const defaultArray = data.map((job)=>{return job.id});


  useEffect (()=>
  { 
  },[])

  function createDataForSearch(){
    let searchData = {"countries":{},"titles":{},"companies":{}, "expertices":{}, "contract":{}};
    let setInfo = new Set;
    data.map((job) => {
          {
            addDataObject(setInfo, job.position, searchData.titles, job.id);
            addDataObject(setInfo, job.company, searchData.companies, job.id);
            addDataObject(setInfo, job.location, searchData.countries, job.id);
            addDataObject(setInfo, job.contract, searchData.contract, job.id);
            job.expertice.map(exp=>{addDataObject(setInfo, exp, searchData.expertices, job.id);
              setInfo.add(exp)});
            setInfo.add(job.position).add(job.company).add(job.location).add(job.contract);
            // console.log(searchData);
        }
    });
   return searchData;
  }

  function addDataObject(setInfo, propName, objKey, id){
    if (!setInfo.has(propName))
            {            Object.defineProperty(objKey, propName, {
              value: [id],
              writable: true
            });
            }
            else{
              objKey[propName].push(id);
            }
  }
  function changeSearchData(){
    if (!document.getElementById("fulltime").checked&&document.getElementById("locationSearch").value==""&&document.getElementById("basicSearch").value=="")
    {props.setSearchQuery(defaultArray);
  }
    else {
    let arToChange = defaultArray;
    if (document.getElementById("fulltime").checked)
      {
        arToChange = arToChange.filter((number)=>(searchData.contract["Full Time"]).indexOf(number)!="-1");
      }
    if(document.getElementById("locationSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.countries).indexOf(document.getElementById("locationSearch").value)!="-1"){
        arToChange = arToChange.filter((number)=>(searchData.countries[document.getElementById("locationSearch").value]).indexOf(number)!="-1");
      }
    }
    if(document.getElementById("basicSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.companies).indexOf(document.getElementById("basicSearch").value)!="-1"){
        arToChange = arToChange.filter((number)=>(searchData.companies[document.getElementById("basicSearch").value]).indexOf(number)!="-1");
      }
    }
    if(document.getElementById("basicSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.titles).indexOf(document.getElementById("basicSearch").value)!="-1"){
        arToChange = arToChange.filter((number)=>(searchData.titles[document.getElementById("basicSearch").value]).indexOf(number)!="-1");
      }
    }
    props.setSearchQuery(arToChange);
    }
  }
  return(
<Container maxWidth="false" style={{margin: "0 auto", display: "flex", justifyContent: "center"}}>
  <Container maxWidth="md" style={{display: "flex", justifyContent: "space-between", alignItems:"center", position: "relative", top:"-50px", borderRadius: "4px"}}>
  <SearchLine id="basicSearch" type="basic" label="Filter by title, companies, expertise..." pic="/assets/desktop/icon-search.svg" searchData={searchData} data={data} setSearchQuery={props.searchQuery}/>
  <SearchLine id="locationSearch" type= "location" label="Filter by location..." pic="/assets/desktop/icon-location.svg" searchData={searchData} data={data} setSearchQuery={props.searchQuery}/>
  <FormControlLabel
          control={
            <Checkbox name="fulltime" id="fulltime"/>
          }
          label="Full time only"
        />
  <Button variant="basic" onClick={changeSearchData}>Search</Button>
  </Container>
</Container>)
}