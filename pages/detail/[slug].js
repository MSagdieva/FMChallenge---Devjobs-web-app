import React, {useState, useEffect, useContext} from "react";
import {useRouter} from 'next/router';
import Header from '../../components/elements/Header'
import { Container, Typography } from "@mui/material";
import { Paper } from "@mui/material";
const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : '';

export async function getStaticProps(){
  const res = await fetch( `${server}/data.json`);
  const allJobsData = await res.json();
  return {
    props: {
      allJobsData,
    },
  };
}

export async function getStaticPaths() {
    const res = await fetch( `${server}/data.json`);
    const allJobs = await res.json();
    let i=0;
    const paths = allJobs.map((job)=>{i++;return{params: {slug: `${i}` },};});
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  

export default function Detail({allJobsData}) {
    const router = useRouter();
    const { slug } = router.query;
    return (<div>
        <Container maxWidth="false" disableGutters={true}>
            <Header page="inner"/>
            <Container disableGutters={true} style={{display: "flex", justifyContent: "center", margin: "0 auto"}}>
                <Paper>
                    <Typography variant="h3">{allJobsData[slug-1].company}</Typography>
                    <Typography variant="body1">{allJobsData[slug-1].description}</Typography>
                    <Typography variant="body1">{allJobsData[slug-1].company}</Typography>
                </Paper>
            </Container>
            </Container>
    </div>)
  }