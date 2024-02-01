"use client";
import React from "react";
import "./page.css";
import { FiAlignJustify } from "react-icons/fi";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="body">
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
        <FiAlignJustify /> 
        </label>
        <label className="logo">DesignX</label>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Ecatalogue</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
