import React from 'react'
import {Link} from 'react-router-dom'
import logo from './download.png';
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className='flex h-12 border-b justify-between bg-amber-200 fixed top-0 w-full z-10' role='navigation'>
          <div className='flex pl-10'>
            <img src={logo} alt='logo' height={150} width={50} className='p-1'/>
            <div className='pt-3 flex'>
              FlavourFusion
            </div>
          </div>
          <div className='pr-5 flex justify-content items-center border-l border-slate-300'>
            <Link className= 'p-3 pr-3  border-l border-slate-300' to ='/'>Home</Link>
            <FaHome className='pr-1'/>
            <Link className= 'p-3 border-l border-slate-300' to ='/about'>About</Link>
            <FaCircleInfo className='pr-1'/>
            <Link className= 'p-3 border-l border-slate-300' to='/profile'>Contact</Link>
            <IoCall />
          </div>
    </nav>
  )
}

export default Navbar