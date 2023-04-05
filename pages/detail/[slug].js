import React, {useState, useEffect, useContext} from "react";
import {useRouter} from 'next/router';
import Header from '../../components/elements/Header'
import { Container, Typography } from "@mui/material";
import { Paper, Button } from "@mui/material";
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import {ColorModeContext} from "../_app";


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
    const mode = useContext(ColorModeContext);
    const router = useRouter();
    const { slug } = router.query;
    const logoAddres = `${server}${allJobsData[slug-1].logo.slice(1)}`;
    const CustomizedTypography = styled((props) => (<Typography variant="body1" {...props}>{props.children}</Typography>
    ))(() => ({
      color: mode.themeMode === 'light'
                ? "#000"
                : "#FFF",
              }));
    return (<div>
        <Container maxWidth="false" disableGutters={true}>
            <Header page="inner"/>
            <Container disableGutters={true} maxWidth="md" style={{display: "flex", justifyContent: "space-between", margin: "20px auto"}}>
                    <div className="imageCont" style={{backgroundColor: allJobsData[slug-1].logoBackground, width: 140, height: 140, position: "relative"}}>
                    <Image
                    width={40}
                    height= {40}
                    src={logoAddres}
                    className="logoImage"
                />
                    </div>
                    <div style={{width: "50%"}}>
                    <CustomizedTypography variant="body1">{allJobsData[slug-1].company}</CustomizedTypography><CustomizedTypography variant="body1">{allJobsData[slug-1].website}</CustomizedTypography>
                    </div>
                    <Button>Apply</Button>
            </Container>
            <Container maxWidth="md" disableGutters={true} style={{display: "flex", justifyContent: "center", margin: "20px auto", padding: 20}}>
                <Paper>
                    <Typography variant="h6">{allJobsData[slug-1].position}</Typography>
                    <Typography variant="body1">{allJobsData[slug-1].description}</Typography>
                    <Typography variant="body1">{allJobsData[slug-1].requirements.content}</Typography>
                </Paper>
            </Container>
            </Container>
    </div>)
  }