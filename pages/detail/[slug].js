import React, {useState, useEffect, useContext} from "react";
import {useRouter} from 'next/router';
import Header from '../../components/elements/Header'
import { Container, Typography } from "@mui/material";

export async function getInfo() {
    const res = await fetch('/data.json')
    const info = await res.json()
    return info;
  }
  function setData(data, id){
     let filterData=[];
     data.map((dataObj)=>{if (dataObj.id==id){filterData.push(dataObj)}});
     return filterData;
    }

export default function Detail() {
    const router = useRouter();
    const id2 = router.query.slug;
    const [downloaded, setDownloaded] = useState(false);
    const [pageData, setPageData] = useState([]);
    const [id, setId] = useState([]);
    useEffect(()=>{
        getInfo().then((result)=>{
            {setPageData(result);}
        }).then(()=>{
           setId(id2);
        })},[])
    useEffect(()=>{
        setPageData(setData(pageData, id2));
        setDownloaded(true);
            }, [id])
            useEffect(()=>{
                console.log(pageData)
                    }, [downloaded])
    return (<div>
        {downloaded?(
        <Container maxWidth="false">
            <Container>
            <Header />
            <Typography variant="h3">{pageData[0]!=undefined?pageData[0].company:''}</Typography>
            <Typography variant="body1">{pageData[0]!=undefined?pageData[0].description:''}</Typography>
            <Typography variant="body1">{pageData[0]!=undefined?pageData[0].company:''}</Typography>
            </Container>
            </Container>):
        ''}
    </div>)
  }