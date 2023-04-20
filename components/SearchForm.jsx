import React, {useState, useEffect, useContext} from "react";
import SearchLine from "./elements/SearchLine";
import { Checkbox, FormControlLabel, Button, Container } from "@mui/material";
import {DataContext} from "../pages/index";
import { styled } from '@mui/material/styles';
import {ColorModeContext} from "../pages/_app";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function SearchForm(props) {
  const ColMode = useContext(ColorModeContext);
  const SearchWrapContainer = styled(Container)
  `&{display: flex;
   justify-content: center;
   margin: 0 auto;
   @media (max-width:780px){

  }
  @media (max-width:475px){
  }}
  `;
  const SearchInnerContainer = styled(Container)
  `&{display: flex;
   justify-content: space-between;
   alignItems: center;
   background-color: ${ColMode.themeMode == "light"? "#FFF": "#212121"};
   color: ${ColMode.themeMode == "light"? "#000": "#FFF"};
   position:relative;
   top:-50px;
   border-radius: 6px;
   margin: 0 auto;
   padding: 20px;
   @media (max-width:780px){

  }
  @media (max-width:475px){
   flex-direction: column;
   justify-content: center;
   align-items: center
  }}
  `;
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
    {
      props.setSearchQuery(defaultArray);
    }
    else {
    let arToChange = defaultArray;
    let tryToFindPosition = Object.getOwnPropertyNames(searchData.titles).map(function(element, index){
      if(element.includes(document.getElementById("basicSearch").value)) return index+1}).filter((elem)=> {return elem != undefined});
    if (document.getElementById("fulltime").checked)
      {
        arToChange = arToChange.filter((number)=>(searchData.contract["Full Time"]).indexOf(number)!="-1");
      }
    if(document.getElementById("locationSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.countries).includes(capitalizeFirstLetter(document.getElementById("locationSearch").value))){
        arToChange = arToChange.filter((number)=>(searchData.countries[capitalizeFirstLetter(document.getElementById("locationSearch").value)].indexOf(number)!="-1"));
      }
    }
    if(document.getElementById("basicSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.companies).includes(document.getElementById("basicSearch").value)){
        arToChange = arToChange.filter((number)=>(searchData.companies[document.getElementById("basicSearch").value].indexOf(number)!="-1"));
      }
    }
    if(document.getElementById("basicSearch").value!=""){
      if (tryToFindPosition.length!=0)
        {
          arToChange = arToChange.filter((number)=>(tryToFindPosition.indexOf(number)!="-1"));
        }
    }
    if(document.getElementById("basicSearch").value!=""){
      if (Object.getOwnPropertyNames(searchData.expertices).includes(document.getElementById("basicSearch").value)){
        arToChange = arToChange.filter((number)=>(searchData.expertices[document.getElementById("basicSearch").value]).indexOf(number)!="-1");
      }
    }
    props.setSearchQuery(arToChange);
    }
  }
  return(
<SearchWrapContainer maxWidth="false">
  <SearchInnerContainer maxWidth="md">
  <SearchLine id="basicSearch" type="basic" label="Filter by title, companies, expertise..." pic="/assets/desktop/icon-search.svg" searchData={searchData} data={data} setSearchQuery={props.searchQuery}/>
  <SearchLine id="locationSearch" type= "location" label="Filter by location..." pic="/assets/desktop/icon-location.svg" searchData={searchData} data={data} setSearchQuery={props.searchQuery}/>
  <FormControlLabel
          control={
            <Checkbox name="fulltime" id="fulltime"/>
          }
          label="Full time only"
        />
  <Button variant="basic" onClick={changeSearchData}>Search</Button>
  </SearchInnerContainer>
</SearchWrapContainer>)
}