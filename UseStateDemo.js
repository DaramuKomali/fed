import React, { useState } from 'react'
function UseStateDemo(){
    const [message,setmessage]=useState('');
    const [update,setupdate]=useState([]);
    const handlechange=(event)=>{
        setmessage(event.target.value);
    }
    const addbtn=()=>{
        setupdate([...update,message]);
        setmessage(" ");
    }
    
    const handledelete=(item)=>{
        const fitems=update.filter((it)=>it!==item);
        setupdate(fitems);
    }
    const tdata=update.map((it,index)=>(
        <tr key={index}>
            <td><span>{it}</span></td>
            <td><button onClick={()=> handledelete(it)}>del</button></td>
        </tr>

    ),[]);
    return(
        <div>
            <h1>Use</h1>
            <input type='text'  onChange={handlechange}></input>   
            <button className='butto1' onClick={addbtn}>ADD</button>
            <table border={1} align='center'>{tdata}</table>
        </div>
    )
}
export default UseStateDemo;