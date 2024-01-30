"use client";
import "./styles.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/Frame 176 (1).png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import img3 from "../../images/image 21.png";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const contentHolderHeight = document.querySelector(".about").offsetHeight;
    console.log(contentHolderHeight);
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;
    const totalBodyHeight =
      contentHolderHeight + imgHolderHeight + additionalScrollHeight + 20;

    // document.body.style.height = `${totalBodyHeight}px`;
    document.querySelector(".box1").style.height = `${totalBodyHeight}px`;

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
      </div>
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
              We specialize in crafting high-end compact surfaces using top-tier
              natural raw materials and cutting-edge Italian technology. Our
              innovative manufacturing process involves subjecting materials to
              extreme temperatures and pressure, replicating the natural stone
              formation in a fraction of the time. This results in products with
              exceptional durability, strength, and aesthetic appeal.
            </div>
          </div>
        </div>
      </div>
      {/* circular slider */}
      <div className="circular-slider">
        <div className="ellipse "></div>
      </div>
    </div>
  );
}
