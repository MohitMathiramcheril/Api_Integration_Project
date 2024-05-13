import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Style.css'
import img1 from './images/img1.jpg'
import Skills from './Skills';
import Cardarray from './Cardarray'
export default function Home() {
  return (
    <>
    <Header/>
      <div id='container'>
        <div className='div1' style={{textAlign:'center'}}>
          <h1 style={{color:'#00BFFF',paddingTop:'200px'}} className='hov1'>WELCOME!!!</h1>
          <p style={{paddingTop:'20px'}}>I'm Intersted in</p>
          <h1 style={{color:'#00BFFF'}} className='hov1'>Front End Developer</h1>
          <p style={{paddingTop:'20px'}}>Specialize in<span style={{color:'#00BFFF'}} className='hov1'>"React JS"</span></p>
        </div>
        <div className='div2'>
          <img src={img1} alt='logo' height={500} width={650} style={{marginTop:'40px'}} className='hov2'/>
        </div>
      </div>
      <div id='tech'>
     <h1 style={{ paddingTop: '10px' }}>Technical Skills</h1>
    </div>
    <div id='skill'>
      {Cardarray.map((v)=>{
       return(
        <div>
          <Skills i={v.logo1} name={v.name1} para={v.des1} link={v.link1}/>
       </div>
       ) 
      })}
      </div>
      <Footer/>
    </>
  )
}
