import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
  .catch((err)=>console.log(err))
}
function App() {
const [data,setData]=useState([])
const [load,setLoad]=useState(false);
const [err,setErr]=useState(false)
let url=`https://jsonplaceholder.typicode.com/posts`

  
  const fetchAndUpdate = async () => {
    setLoad(true)
    try{
    setLoad(false)
      let data=await getData(url)
      setData(data)
    }catch(err){
      setLoad(false)
console.log(err)
setErr(true)
    }
  }
  return (
    <div className="App" data-testid="app">
      <h1 style={{color:"orange",textShadow:"1px 1px red"}}>React Fetch Data</h1>
      <button
        id="get-posts-btn"
        onClick={fetchAndUpdate}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {
        load?<h1 style={{color:"orange",textShadow:"1px 1px red"}}>Loading...</h1>:err?<h1 style={{color:"orange",textShadow:"1px 1px red"}}>Something  went Wrong</h1>:
        data?.map((el)=>(
          <Post 
          key={el.id}
          title={el.title}
          body={el.body}
          />
        ))     
      }
       </div>
    </div>
  );
}

export default App;
