"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { progress } from "framer-motion";
import img4 from "../../images/1bb.png";
// props for the slider component
interface ImageProps {
  src: string;
  alt: string;
  heading: string;
  buttonLabel: string;
  buttonFunction: () => void;
}

// global variables
let radius = 0;
let center = 0;
let slice = 0;
let initialSlice = 0;
let isScrollingDown = false;
let lastScrollPosition = 0;

// function to scale the cards, not being used rn cause it's breaking the animation
const gsapScaleChange = (progress: number) => {
  const scaleUpValue = 0.9;
  const scaleDownValue = 0.8;
  let cardToScaleUp = Math.floor(progress * 6);
  if (cardToScaleUp === 6) cardToScaleUp = 5;

  gsap.to(`#wheel_card_${cardToScaleUp}`, {
    scale: scaleUpValue,
    // height: `${(26 * 3) / 2}vw`,
    width: "28vw",
    filter: "brightness(1)",
    // y: "-=100px",
    duration: 1,
    delay: 0,
  });
  const cardToScaleUpElement = document.getElementById(
    `wheel_card_${cardToScaleUp}`
  );
  // if (cardToScaleUpElement) cardToScaleUpElement.style.opacity = "1";
  for (let i = 0; i < 6; i++) {
    if (i !== cardToScaleUp) {
      const cardToScaleDownElement = document.getElementById(`wheel_card_${i}`);
      // if (cardToScaleDownElement) cardToScaleDownElement.style.opacity = "0.85";
      gsap.to(`#wheel_card_${i}`, {
        scale: scaleDownValue,
        // height: `${(23 * 3) / 2}vw`,
        width: "26vw",
        // y: "+=100px",
        filter: "brightness(0.5)",
        duration: 0.9,
        delay: 0,
      });
    }
  }
};

const cards = [
  {
    src: "https://i.ibb.co/dLk8nrW/Photo-1.png",
    alt: "",
    heading: "Porcelian Tiles",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
  {
    src: "https://i.ibb.co/rQVnqkN/Photo-2.png",
    alt: "",
    heading: "Ceramic Tiles",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
  {
    src: "https://i.ibb.co/x76KyJW/Photo-3.png",
    alt: "",
    heading: "Outdoor Pavers",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
  {
    src: "https://i.ibb.co/YDmpwyN/Photo-4.png",
    alt: "",
    heading: "SPC Flooring",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
  {
    src: "https://i.ibb.co/QpCWhdn/Photo-5.png",
    alt: "",
    heading: "Slab Tiles",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
  {
    src: "https://i.ibb.co/dt8Xwsr/Photo-6.png",
    alt: "",
    heading: "Subway Tiles",
    buttonLabel: "View Products",
    buttonFunction: () => {},
  },
];

const CircularSlider = ({ images }: { images: ImageProps[] }) => {
  //states and refs
  const [enterAnimationInProgress, setEnterAnimationInProgress] =
    useState(true);
  const wheelRef = useRef(null);
  const imagesRefs = useRef([] as HTMLDivElement[]);
  const circularSliderRef = useRef(null);

  React.useEffect(() => {
    const initializeScrollTrigger = () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(Observer);

      let wheel = wheelRef.current;
      let images = imagesRefs.current;
      let cardWidth = 0;

      // initial setup for gsap
      function setup() {
        wheel = wheelRef.current;
        images = imagesRefs.current;

        if (wheel === null) return;

        radius =
          radius === 0
            ? // for radius change during rotation
              Math.min(
                (wheel as any).offsetWidth,
                (wheel as any).offsetHeight
              ) / 2
            : radius;

        center = (wheel as any).offsetWidth / 2;

        cardWidth = images[0].offsetWidth;
        slice = (cardWidth * 1.765) / radius;
        initialSlice = slice;

        gsap.utils.toArray(images).forEach((item: any, i) => {
          let angle = i * initialSlice;

          let x = center + radius * Math.sin(angle);
          let y = center - radius * Math.cos(angle);

          gsap.set(item, {
            rotation: angle + "_rad",
            xPercent: -50,
            yPercent: -50,
            x: x,
            y: y,
            zIndex: 6 - i,
          });
        });
      }

      setup();

      if (wheel === null) return;

      window.addEventListener("resize", setup);
      // the rotation thingy
      // console.log(images[0].offsetWidth , "bubu")
      gsap.to(wheelRef.current, {
        rotate: () =>
          wheel === null
            ? 0
            : -5 *
              (180 / Math.PI) *
              ((cardWidth * 1.765) /
                // for radius change during rotation
                (Math.min(
                  (wheel as any).offsetWidth,
                  (wheel as any).offsetHeight
                ) /
                  2)),
        ease: "none",
        // duration:3,
        scrollTrigger: {
          trigger: ".circular-slider",
          start: "top top",
          fastScrollEnd: true,
          end: "top -600vh",
          scrub: 2,
          pin: true,
          // markers:true,
          snap: {
            snapTo: 1 / (images.length - 1),
            duration: 0.5,
            ease: "linear",
            delay: 0.4,
          },
          // for the initial thingy
          onUpdate: ({ scroll }) => {
            const currentScrollPosition = scroll();
            if (currentScrollPosition > lastScrollPosition) {
              // Scrolling down
              isScrollingDown = true;
            } else if (currentScrollPosition < lastScrollPosition) {
              // Scrolling up
              isScrollingDown = false;
            }
            lastScrollPosition = currentScrollPosition;
          },
          onScrubComplete: ({ progress, direction, isActive }) => {
            gsapScaleChange(progress);
          },
          onSnapComplete: ({ progress, direction, isActive }) => {
            gsapScaleChange(progress);
          },

          invalidateOnRefresh: true,
        },
      });

      // Observer.create({
      //   type: "wheel,touch,pointer",
      //   wheelSpeed: -1,
      //   onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      //   onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      //   tolerance: 10,
      //   preventDefault: true
      // });

      // for refresh stuff
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }

      // always remove listeners
      return () => {
        window.removeEventListener("resize", setup);
      };
    };

    const delay = setTimeout(() => {
      initializeScrollTrigger();
    }, 500);

    return () => clearTimeout(delay);
  }, [images]);

  return (
    <div className="circular-slider">
      <div className="circular-slider-inner">
        <div
          className="slider_section"
          id="slider_section"
          ref={circularSliderRef}
        >
          <div className="wheel overflow-hidden" ref={wheelRef}>
            {cards.map((image, index) => (
              <div
                className="wheel_card"
                id={`wheel_card_${index}`}
                key={index}
                //@ts-ignore
                ref={(el) => (imagesRefs.current[index] = el)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={index}
                  width={300}
                  height={1000}
                  className="slider_img"
                />

                <div className="overlay_on_slider left-0">
                  <span className="font-bd">
                    <Image src={img4} alt="" />
                    {image.heading}
                  </span>
                  <div
                    className="view_products cursor-pointer"
                    onClick={image.buttonFunction}
                  >
                    {image.buttonLabel}
                  </div>
                </div>
                <div className="overlay_on_slider_right">
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
