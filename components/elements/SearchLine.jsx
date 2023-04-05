import React, { useContext } from "react";
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

export default function SearchLine( props) {
  function handleChange(e){
    (props.type!="basic")? document.getElementById("locationSearch").value = e.target.value : document.getElementById("basicSearch").value = e.target.value;
  }
  function handleChangeInput(e){
    (props.type!="basic")? document.getElementById("locationSearch").value = e.target.value : document.getElementById("basicSearch").value = e.target.value;
  }
   
   
  return (<FormControl variant="standard">
            <InputLabel htmlFor={props.id}>
            {props.label}
            </InputLabel>
            <Input 
            onChange={handleChangeInput}
              id={props.id}
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
            <TextField id={`${props.id}-select`} select 
            onChange={handleChange}
            >
              {(props.type=="basic")?Object.getOwnPropertyNames(props.searchData.companies).map((comp) => {
              if (comp!=undefined){return <MenuItem value={comp} key={comp}>{comp}</MenuItem>}
              }):Object.getOwnPropertyNames(props.searchData.countries).map((loc) => {
                if (loc!=undefined){return <MenuItem value={loc} key={loc}>{loc}</MenuItem>}
                  })}
          </TextField>
          </FormControl>)
  }