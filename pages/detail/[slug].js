import React, {useState, useEffect, useContext} from "react";
import {useRouter} from 'next/router';
import Header from '../../components/elements/Header'

export async function getInfo() {
    const res = await fetch('/data.json')
    const info = await res.json()
    return info;
  }
  function setData(data, id){
     let filterData=[];
     data.map((dataObj)=>{if (dataObj.id==id){filterData.push(dataObj)}});
     console.log(filterData);
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
        {downloaded?(<div><Header /><h3>i am detail page number {id2}!</h3>
        <p>{pageData[0]!=undefined?pageData[0].company:''}</p></div>):
        ''}
    </div>)
  }