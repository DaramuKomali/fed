import React,{useState} from 'react'
const Counter =() =>{
    const [count,setcount]=useState(0);
    const inc=()=>{
        setcount(count+1);
    }
    const dec=()=>{
        setcount(count-1);
    }
    return(
    <div>
        <button onClick={inc}>Incr</button>
        <h3>{count}</h3>
        <button onClick ={dec}>Decr</button>
        </div>
        )
};
export default Counter