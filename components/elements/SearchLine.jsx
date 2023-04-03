import React, { useContext } from "react";
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Image from 'next/image';

export default function SearchLine( props) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    function searchChangeHandle(e){
        let filterCountriesArray =  [];
        props.dataInf.map((countries) => {
          let strValue = e.target.value;
          for (let country of countries)
                { 
                  let inpValue=capitalizeFirstLetter(strValue);
                  if ((country?.name).startsWith(inpValue))
                  {filterCountriesArray.push(country);
                }
              }
          return filterCountriesArray;
        });
        props.setSearchData(getCardRowsData(filterCountriesArray));
  }
  function handleChange(e){
    console.log(e.target.value)
    props.data.map((job) => {
      console.log(job.id);
    });
  }
   
  return (<FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
            {props.label}
            </InputLabel>
            <Input onChange={handleChange}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Image
                priority
                height={12}
                width={12}
                src={props.pic}
                />
                </InputAdornment>
              }
            />
          </FormControl>)
  }