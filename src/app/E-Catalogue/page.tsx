"use client";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import img1 from "../../../images/catalogue/Rectangle 75.png";
import img2 from "../../../images/catalogue/Rectangle 75 (4).png";
import img3 from "../../../images/catalogue/Rectangle 75 (3).png";
import img4 from "../../../images/catalogue/Rectangle 75 (2).png";
import img5 from "../../../images/catalogue/Rectangle 75 (1).png";
import img6 from "../../../images/catalogue/Rectangle 75 (5).png";
import img7 from "../../../images/catalogue/Rectangle 75 (6).png";
import img8 from "../../../images/catalogue/Rectangle 75 (7).png";

import Footer from "@/component/footer/Footer";
const ECatalogue = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline();
    tl.to(
      "#center",
      {
        height: "100vh",
        duration: 2,
      },
      "a"
    )
      .to(
        "#top",
        {
          top: "-50%",
          duration: 2,
        },
        "a"
      )
      .to(
        "#bottom",
        {
          bottom: "-100%",
          duration: 3,
        },
        "a"
      )
      .to(
        ".catalogue",
        {
          color: "black",
          x: -400,
          y: 300,
          fontWeight: "600",
          scale: 1.4,
          duration: 2,
        },
        "a"
      )
      .to(".content", {
        delay: -3,
        marginTop: "0%",
        duration: 2,
      })
      .add(() => {
        // Animation completed, add class .bye to .catalogue and remove class .hi from h1
        gsap.set(".catalogue", { className: "+=bye" });
        gsap.set(".hi", { className: "+=hii" });
      })
      .delay(1);
  }, []);

  return (
    <div>
      <Navbar />
      <div id="main">
        <div id="top">
          <div className="catalogue">E-Catalogue</div>
        </div>
        <div id="center">
          <div className="content">
            <div className="content-grid">
              <h1 className="hi">E-Catalogue</h1>
              <div className="content-grid-images">
                <div className="images">
                  <Image src={img1} alt="" />
                </div>
                <div className="images">
                  <Image src={img2} alt="" />
                </div>
                <div className="images">
                  <Image src={img3} alt="" />
                </div>
                <div className="images">
                  <Image src={img4} alt="" />
                </div>
                <div className="images">
                  <Image src={img5} alt="" />
                </div>
                <div className="images">
                  <Image src={img6} alt="" />
                </div>
                <div className="images">
                  <Image src={img7} alt="" />
                </div>
                <div className="images">
                  <Image src={img8} alt="" />
                </div>
              </div>
              <div className="foo">
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div id="bottom"></div>
      </div>
      <div className="mobile">
        <div className="cards">
          <h1>E-Catalogue</h1>
          <div className="mobile-images">
            <div className="images">
              <Image src={img1} alt="" />
            </div>
            <div className="images">
              <Image src={img2} alt="" />
            </div>
            <div className="images">
              <Image src={img3} alt="" />
            </div>
            <div className="images">
              <Image src={img4} alt="" />
            </div>
            <div className="images">
              <Image src={img5} alt="" />
            </div>
            <div className="images">
              <Image src={img6} alt="" />
            </div>
            <div className="images">
              <Image src={img7} alt="" />
            </div>
            <div className="images">
              <Image src={img8} alt="" />
            </div>
          </div>
        </div>

        <div className="mobile-footer">
         <Footer />
        </div>
      </div>
    </div>
  );
};

export default ECatalogue;
