// navbar.tsx
"use client"
import Image from 'next/image';
import React  from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import img6 from '../../../images/path4 (1).png';
import img5 from '../../../images/path2 (2).png';
import Link from 'next/link';
import  './style.css'; // Assuming you are using a CSS module for styles

const Navbar: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);

  const handleInformationClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="">
      <div>
        <div className='navbar-image'>
          <Image src={img6} height={40} alt="" />
          <Image src={img5} height={27} width={79} alt="" className="i78" />
        </div>
      </div>
      <div className="FiAlignJustify">
        <FiAlignJustify />
      </div>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/"}>About Us</Link></li>
        <li><Link href={"/"}>Product</Link></li>
        <li onClick={handleInformationClick}>
          <Link href={"#"}>Information</Link>
          {isDropdownVisible && (
            <div className="dropdown__menu" onClick={handleOutsideClick}>
              <ul>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/packing-details'}>Packing Details</Link></li>
                <li>QT Calculation</li>
              </ul>
            </div>
          )}
        </li>
        <li><Link href={"/E-Catalogue"}>E-catalogue</Link></li>
        <li><Link href={"/"}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
