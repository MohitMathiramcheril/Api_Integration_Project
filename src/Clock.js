import React, { useState } from 'react'
import './Style.css'
import Header from './Header'
import Footer from './Footer'
export default function Clock() {
    let d=new Date().toLocaleDateString();
    const[date,setdate]=useState(d);
    let d2=new Date().toLocaleTimeString();
    const[time,settime]=useState(d2);
    let t1=new Date().getHours();
    let msg='';
    let abc=()=>{
        let date=new Date().toLocaleDateString('en-GB');
        setdate(date);
    }
    setInterval(abc,1000)
    let xyz=()=>{
        let time=new Date().toLocaleTimeString();
        settime(time);
    }
    setInterval(xyz,1000);
    
    if(t1>=1 && t1<=12)
    {
        msg='Good Morning'
    }
    else if(t1>12 && t1<16)
    {
        msg='Good Afternoon'
    }
    else if(t1>=17 && t1<21)
    {
        msg='Good Evening'
    }
    else{
        msg='Good Night'
    }
  return (
    <>
      <Header/>
      <div id='clock'>
        <h1 style={{marginTop:'100px'}}>Digital Clock</h1>
         <div className='content'>
            <h3 style={{fontWeight:'bolder',paddingTop:'50px'}}>{date}</h3>
            <h1 style={{fontWeight:'bolder',paddingTop:'50px',fontSize:'60px'}}>{time}</h1>
            <h2 style={{fontWeight:'bolder',paddingTop:'50px'}}>{msg}</h2>
         </div>
      </div>
      <Footer/>
    </>
  )
}
