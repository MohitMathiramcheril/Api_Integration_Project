import React from 'react'
import img1 from './logo.svg'
import './Style.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
export default function Header() {
  return (
    <>
      <div id='header'>
        <header>
          <nav >
            <img src={img1} alt='logo' height={100} width={100} />
            <Link to='/' style={{ textDecoration: 'none' }}>React.Js</Link>
            <Scroll
              activeClass="active"
              to='container'
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              aria-current='page'
              style={{ position: 'relative', left: '1020px', textDecoration: 'none',cursor:'pointer' }} className='hov'>
              Home
            </Scroll>

            <Scroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              aria-current='page'
              style={{ textAlign: 'right', position: 'relative', left: '1040px', textDecoration: 'none',cursor:'pointer'}} className='hov'>
                Skills
                </Scroll>
            <Link id='hov' style={{ textDecoration: 'none', position: 'relative', left: '1060px' }} className='dropdown-toggle' data-bs-toggle='dropdown'>Projects</Link>
            <ul className='dropdown-menu'>
              <Link className='dropdown-item' to='/Clock'>Clock</Link>
              <Link className='dropdown-item' to='/Search'>SearchApi</Link>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
