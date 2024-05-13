import React from 'react'
import Home from './Home'
import SearchApi from './Api'
import Clock from './Clock'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Clock' element={<Clock/>}></Route>
      <Route path='/Search' element={<SearchApi/>}></Route>
    </Routes>
    </>
  )
}
