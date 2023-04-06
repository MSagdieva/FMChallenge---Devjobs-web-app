import React, {useState, useEffect, useContext} from "react";
import {useRouter} from 'next/router';
import Header from '../../components/elements/Header';
import Footer from '../../components/elements/Footer';
import { Container, Typography, Paper, Button, List, ListItem  } from "@mui/material";
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import {ColorModeContext} from "../_app";
import Link from "next/link";


const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'https://raw.githubusercontent.com/MSagdieva/FMChallenge---Devjobs-web-app/main/public';
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

    const CustomPaper = styled(Paper)
    `&{padding:40px;}
    `;
    const CustomButton= styled(Button)
    `&{}
    `;
    const CustomContainer= styled(Container)
    `&{display: flex;
     justify-content: space-between;
     margin: 20px auto;
     align-items: center}
    `;
    const CustomizedTypography = styled((props) => (<Typography variant="body1" {...props}>{props.children}</Typography>
    ))(() => ({
      color: mode.themeMode === 'light'
                ? "#000"
                : "#FFF",
              }));
    return (<div style={{backgroundColor: mode.themeMode === 'light'?"#F4F6F8":"#121721"}}>
        <Header page="inner"/>
          <div maxWidth="false" disableGutters={true} id="pageContainer" >
              <CustomContainer disableGutters={true} maxWidth="md" style={{backgroundColor: mode.themeMode === 'light'?"#FFF":"#212121"}}>
                      <div className="imageCont" style={{backgroundColor: allJobsData[slug-1].logoBackground, width: 140, height: 140, position: "relative"}}>
                      <Image
                      width={40}
                      height= {40}
                      src={logoAddres}
                      className="logoImage"
                  />
                      </div>
                      <div style={{width: "50%"}}>
                      <CustomizedTypography variant="body1">{allJobsData[slug-1].company}</CustomizedTypography>
                      <CustomizedTypography variant="body1">{(allJobsData[slug-1].company).toLowerCase()}{".com"}</CustomizedTypography>
                      </div>
                      <div>
                      <Link href={allJobsData[slug-1].website}><CustomButton variant="grey" className="MuiButton-grey">Company site</CustomButton></Link>
                      </div>
              </CustomContainer>
              <Container maxWidth="md" disableGutters={true} style={{display: "flex", justifyContent: "center", margin:"0 auto"}}>
                  <CustomPaper>
                      <div class="paperHeading" style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
                      <div style={{width: "50%"}}>
                        <Typography variant="body1">{allJobsData[slug-1].postedAt}{" "}{allJobsData[slug-1].contract}</Typography>
                        <Typography variant="h6">{allJobsData[slug-1].position}</Typography>
                        <Typography variant="body1">{allJobsData[slug-1].location}</Typography>
                      </div>
                      <Link href={allJobsData[slug-1].apply}><Button variant="basic">Apply</Button></Link>
                      </div>
                      <Typography variant="body1" style={{paddingTop:20}}>{allJobsData[slug-1].description}</Typography>
                      <div class="requirements">
                      <Typography variant="h6">{"Requirements"}</Typography>
                        <Typography variant="body1">{allJobsData[slug-1].requirements.content}</Typography>
                          <List>
                          {allJobsData[slug-1].requirements.items.map((item)=>{return <ListItem>{item}</ListItem>})}
                        </List>
                      </div>
                      <div class="role">
                      <Typography variant="h6">{"What will you do"}</Typography>
                        <Typography variant="body1">{allJobsData[slug-1].role.content}</Typography>
                          <List>
                          {allJobsData[slug-1].role.items.map((item)=>{return <ListItem>{item}</ListItem>})}
                        </List>
                      </div>
                  </CustomPaper>
              </Container>
              </div>
             <Footer>
              <div>
              <Typography variant="body1">{allJobsData[slug-1].position}</Typography>
              <Typography variant="body1">{allJobsData[slug-1].company}</Typography></div>
             <Link href={allJobsData[slug-1].apply}><Button variant="basic">Apply</Button></Link>
             </Footer>
        </div>)
  }