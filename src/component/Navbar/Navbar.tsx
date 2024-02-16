import Image from 'next/image'
import React from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import img6 from "../../../images/path4 (1).png"
import img5 from "../../../images/path2 (2).png"
import "./style.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
    <div className="navbar">
        <div className="navbar-image">
        <Image src={img6} height={40} alt="" /> 
        <Image src={img5} height={27} width={79} alt="" className="i78" />
        </div>
        
        <div className="a1">
          <Link href={"/"}><div>Home</div></Link>
          <Link href={"/about-us"}><div>About Us</div></Link>
          <Link href={"/E-Catalogue"}><div>E-Catalogue</div></Link>
          <Link href={"/contact"}><div>Contact Us</div></Link>
        </div>
        <div className="icon">
          <FiAlignJustify />
        </div>
      </div>
    </div>
  )
}

export default Navbar