import React from 'react'
import './Style.css'
import img1 from './logo.svg'
export default function Footer() {
  return (
    <>
      <div id='footer'>
        <footer>
        <img src={img1} alt='logo' height={100} width={100}/>
          <span>Made By MOHIT</span>
          <span  style={{float:'right',paddingTop:'30px'}}>
            CopyRight &copy; 2024 All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  )
}
