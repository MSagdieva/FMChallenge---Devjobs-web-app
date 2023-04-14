import React, { useContext } from "react";
import {Input,FormControl,Box, TextField}  from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

export default function SearchLine( props) {
  function handleChangeInput(e){
    if(props.type!="basic")
     { document.getElementById("locationSearch").value = e.target.value;} 
     else
     {document.getElementById("basicSearch").value = e.target.value;};
  }
   
   
  return (<FormControl variant="standard">
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Image
                priority
                height={24}
                width={props.id=="locationSearch" ? 17 : 24}
                src={props.pic}
                />
        <TextField id={props.id} label={props.label} onChange={handleChangeInput} variant="standard"/>
      </Box>
            {/* <TextField id={`${props.id}-select`} select 
            onChange={handleChange}
            >
              {(props.type=="basic")?Object.getOwnPropertyNames(props.searchData.companies).map((comp) => {
              if (comp!=undefined){return <MenuItem value={comp} key={comp}>{comp}</MenuItem>}
              }):Object.getOwnPropertyNames(props.searchData.countries).map((loc) => {
                if (loc!=undefined){return <MenuItem value={loc} key={loc}>{loc}</MenuItem>}
                  })}
          </TextField> */}
          </FormControl>)
  }