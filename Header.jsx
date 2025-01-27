import React from 'react'
import Navbar from '../navbar/Navbar'
import '../header/Header.css'

function Header() {
   
  return (
    <>
    <div className="header">
        <div className="logo">
            <h1>timezone</h1>
        </div>
        <Navbar></Navbar>
        <div className="icon">
            <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-basket-shopping"></i>
        </div>
    </div>
    </>
  )
}

export default Header