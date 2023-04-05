import React, {createContext, useContext} from "react";
import { Container, Typography } from "@mui/material";
import Main from  "../components/Main";

const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'http://fm-challenge-devjobs-web-app.vercel.app';

export async function getStaticProps(){
  const res = await fetch( `${server}/data.json`);
  const allJobsData = await res.json();
  return {
    props: {
      allJobsData,
    },
  };
}
export const DataContext = createContext();

function index({allJobsData}) {
  return(<Container maxWidth="false" disableGutters={true}>
   <DataContext.Provider value={allJobsData}>
    <Main />
    </DataContext.Provider>
</Container>
)
}

export default index;