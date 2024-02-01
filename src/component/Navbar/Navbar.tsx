import React, { useEffect } from 'react'
import "./styles.css"
import Link from 'next/link'
type Props = {}
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useRef } from 'react';

const Navbar = (props: Props) => {
  const navref =  useRef(null);
  useEffect(()=>{
    console.log(navref.current)   
  },[])
  const showNavbar = ()=>{ 
   navref.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
        <h3>Logo</h3> 
        <nav ref={navref}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/Product"}>Product</Link>
            <Link href={"/ecatalogue"}>E-Catalogue</Link>
            <button onClick={showNavbar}>
                <FiAlignJustify /> 
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <RxCross1 /> 
        </button>
    </header>
  )
}

export default Navbar;