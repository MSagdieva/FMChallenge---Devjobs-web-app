import React, {useState, useEffect, useContext} from "react";
import SearchLine from "./elements/SearchLine";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import {DataContext} from "../pages/index";

export default function SearchForm(props) {
  const data = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState();
  return(
<form>
<SearchLine label="Filter by title, companies, expertise..." pic="/assets/desktop/icon-search.svg" data={data} setSearchQuery={props.searchQuery}/>
<SearchLine label="Filter by location..." pic="/assets/desktop/icon-location.svg" data={data} setSearchQuery={props.searchQuery}/>
<FormControlLabel
        control={
          <Checkbox name="fulltime" />
        }
        label="Full time only"
      />
<Button>Search</Button>
</form>)
}