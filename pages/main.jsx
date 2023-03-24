import React, {useState, useEffect} from "react";
import Card1 from "../components/Card";
import Container from "@mui/material/Container";
import Header from "../components/elements/Header";


export default function Main() {
    return <div>

        <p>I AM MAin PAGE!</p>
        <Blog />
        
    </div>
  }

  function setData(data){
  const list = [];
   data.map((post)=>{
        list.push(
            <Card1 info={post}/>);
        })
    return list;
  }

  function Blog() {
    const [posts, setPosts] = useState([]);
    const [searchData, setSearchData] = useState(null);
    useEffect(()=>{
        getInfo().then((result)=>{
        setPosts(result);
        })},[])
    useEffect(()=>{
        setSearchData(setData(posts)
        );
            }, [posts])
    

    return (
          <div className="container"
                style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                {searchData}</div>
      )
  }
  
  export async function getInfo() {
    const res = await fetch('/data.json')
    const posts = await res.json()
  
    return posts;
  }