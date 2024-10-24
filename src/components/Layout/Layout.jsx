import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../Navbar/NavBar'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

export default function Layout() {
  return (<>
    <NavBar></NavBar>
    <div className='main-con relative top-20 flex justify-center items-center min-h-[31rem] my-20'>
    <Outlet></Outlet>
    </div>
    <Footer> </Footer>
    </>)
}
