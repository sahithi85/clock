
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const[date,setDate]=useState(new Date());
  useEffect(()=>{
 let time= setInterval(()=>setDate(new Date())  ,1000);
 return(()=>{
   clearInterval(time);
 })
  })
  return (
    <div className="date-time">
    {date.toLocaleString()}
    </div>
  );
}

export default App;
