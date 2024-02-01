"use client";
import "./styles.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/Frame 176 (1).png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import img3 from "../../images/image 21.png";
import { FiAlignJustify } from "react-icons/fi";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:400px)");
    console.log(mediaQuery.matches);

    if (!mediaQuery.matches) {
      const contentHolderHeight = document.querySelector(".about").offsetHeight;
      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;
      const totalBodyHeight =
        contentHolderHeight + imgHolderHeight + additionalScrollHeight + 20;
      if (isMobile) {
      } else {
        document.querySelector(".box1").style.height = `${totalBodyHeight}px`;
      }

      gsap.defaults({
        duration: 2,
        ease: "power1.inOut",
      });

      gsap.to(".img-holder", {
        rotation: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 3,
        },
      });

      gsap.to(".img-holder img", {
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 3,
        },
      });

      gsap.to(".img-holder", {
        // ease: "power2.inOut",
        scale: 1.5,
        scrollTrigger: {
          trigger: ".about",
          start: "top 100%",
          end: "top 0%",
          // markers:true,
          scrub: 3,
        },
      });
      if (!isMobile) {
        gsap
          .timeline({
            ease: "power2.inOut",
            scrollTrigger: {
              scrub: 1,
            },
          })
          .to(".s1d1p2", {
            gap: "1000px",
            scale: 9,
          });

        gsap
          .timeline({
            scrollTrigger: {
              scrub: 2,
            },
          })
          .to(".s1d1p1", {
            scale: 2,
          });
      }
    } else {
      const contentHolderHeight = document.querySelector(".about").offsetHeight;
      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;
      const totalBodyHeight = contentHolderHeight + imgHolderHeight;
      document.querySelector(".mbox2").style.height = `${totalBodyHeight}px`;

      gsap.to(".img-holder", {
        rotation: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      gsap.to(".img-holder img", {
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      gsap.to(".ms1d1p1", {
        x: -300,
        y: 200,
        scrollTrigger: {
          start: "top top",
          end: "+=200%",
          scrub: 2,
          // markers:true,
        },
      });

      gsap.to(".spaces", {
        x: 300,
        y: 100,
        scrollTrigger: {
          // trigger:".about",
          start: "top top",
          end: "+=200%",
          scrub: 2,
          // markers:true,
        },
      });
    }
  }, [isMobile]);

  React.useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <Image src={img1} alt="" className="i1" />
        <div className="a1">
          <div>Home</div>
          <div>About Us</div>
          <div>Product</div>
          <div>E-Catalogue</div>
          <div>Contact Us</div>
        </div>
        <div className="icon">
          {" "}
          <FiAlignJustify />{" "}
        </div>
      </div>

      {isMobile ? (
        <div className="mbox2 h-[100vh] w-[100vw]">
          <div className="ms1">
            <div className="ms1d1">
              <div className="ms1d1p1">
                <div className="w1">We build</div>
                <div className="md1">Luxurious</div>{" "}
              </div>
              <div className="spaces">Spaces</div>
            </div>
          </div>

          <div className="website-content z-0">
            <div className="img-holder">
              <Image src={img2} alt="" className="i5" />
            </div>
          </div>
        </div>
      ) : (
        <div className="box1">
          <div className="s1">
            <div className="s1d1">
              <p className="s1d1p1">
                We build <span>-</span>
              </p>
              <div className="s1d1p2">
                <div className="d1">Luxurious</div>{" "}
                <div className="d2">Spaces</div>
              </div>
            </div>
          </div>

          <div className="website-content z-0">
            <div className="img-holder">
              <Image src={img2} alt="" />
            </div>
          </div>
        </div>
      )}
      {isMobile ? (
        <div className="about">
          <div className="about1">
            <div className="text-[52px] font-[500] leading-[74px] text-[#212121]">
              About us
            </div>
            <div>
              <Image src={img3} alt="" className="i2" />
            </div>
            <div>
                <br />
                Welcome to ASIA PACIFIC, Morbis premier ceramic manufacturer
                dedicated to redefining interior and exterior construction
                materials.
                <br />
                <br />
                We specialize in crafting high-end compact surfaces using
                top-tier natural raw materials and cutting-edge Italian
                technology. Our innovative manufacturing process involves
                subjecting materials to extreme
              </div>
          </div>
        </div>
      ) : (
        <div className="about">
          <div className="about1">
            <div>
              <Image src={img3} alt="" className="i2" />
            </div>

            <div className="about2d2 flex flex-col justify-evenly">
              <div className="text-[52px] font-[500] leading-[74px] text-[#212121]">
                About us
              </div>

              <div className="w-[60px] h-[1px] bg-[#E94D11] relative bottom-2"></div>

              <div>
                <br />
                {/* <br /> */}
                Welcome to ASIA PACIFIC, Morbis premier ceramic manufacturer
                dedicated to redefining interior and exterior construction
                materials.
                <br />
                <br />
                We specialize in crafting high-end compact surfaces using
                top-tier natural raw materials and cutting-edge Italian
                technology. Our innovative manufacturing process involves
                subjecting materials to extreme temperatures and pressure,
                replicating the natural stone formation in a fraction of the
                time. This results in products with exceptional durability,
                strength, and aesthetic appeal.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* circular slider */}

      <div className="circular-slider"></div>
    </div>
  );
}
