import React, {useState, useEffect} from "react";
import Card1 from "../elements/Card";


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
        <li>
            <Card1 info={post}/> 
        </li>);
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
        <ul>
          {searchData}
        </ul>
      )
  }
  
  export async function getInfo() {
    const res = await fetch('/data.json')
    const posts = await res.json()
  
    return posts;
  }