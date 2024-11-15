import { useState } from "react";

function App() {
  let [count,setCount]=useState(0);


  const isPrime=(num)=>{
      if(num===1||num===0){
       return false
      }
      if(num===2){
        return true
       }
       let count=0
    for(let i=1;i<=num;i++){
      if(num%i===0){
      count++
      }
  }
if(count===2){
  return true
}else {
  return false
}
}
  console.log(isPrime(10))
  const isEven=(num)=>{
   
    if(num%2===0){
    return "Even"
     
    }else{
     return "Odd"
     
    }
  }
 
  return (
    <div style={{height:"auto",padding:"2%",width:"70%",border:"1px solid black",margin:"auto",textAlign:"center"}}>
      <div style={{width:"60%",margin:"auto",textAlign:"center"}}>
        <h1 >WelCome To Counter App</h1>
        <button disabled={count===0} style={{height:"35px",width:"100px",border:"1px solid black",margin:"auto",textAlign:"center",backgroundColor:"black",color:"white"}} data-testid="minusonebtn" onClick={()=>{
          setCount(count-1)
         
        }}>-1</button>
        <button style={{height:"35px",width:"100px",border:"1px solid black",margin:"auto",textAlign:"center",backgroundColor:"black",color:"white",marginLeft:"10px"}} data-testid="plusonebtn" onClick={()=>{
          setCount(count+1)
          
        }}>+1</button>
      <div>
        <button data-testid="resetbtn" style={{height:"35px",width:"180px",border:"1px solid black",margin:"auto",textAlign:"center",backgroundColor:"black",color:"white",marginTop:"16px"}} onClick={()=>{
          setCount(0)
        
        }}>Reset</button>
      </div>
      </div>
      <span style={{color:"black",fontFamily:"system-ui, sans-serif",fontWidth: "400px",fontSize:"2.25em"}} data-testid="counter">Count :{count}</span>
      <div>
        <span style={{color:"black",fontFamily:"system-ui, sans-serif",fontWidth: "400px",fontSize:"2.25em"}} data-testid="odd-or-even">This Number is : {isEven(count)}</span>
       <br /> <span style={{color:"black",fontFamily:"system-ui, sans-serif",fontWidth: "400px",fontSize:"2.25em"}} data-testid="is-prime">Prime Number : {isPrime(count)?"true":"false"}</span>
      </div>
    </div>
  );

}

export default App;

