import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { progress } from "framer-motion";

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
  const scaleUpValue = 1.1;
  const scaleDownValue = 1;
  let cardToScaleUp = Math.floor(progress * 6);
  if (cardToScaleUp === 6) cardToScaleUp = 5;

  gsap.to(`#wheel_card_${cardToScaleUp}`, {
    scale: scaleUpValue,
    // height: `${(26 * 3) / 2}vw`,
    width: "28vw",
    filter: "brightness(1)",
    // y: "-=100px",
    duration: 0.8,
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
        duration: 0.2,
        delay: 0,
      });
    }
  }
};

const CircularSlider = ({ images }: { images: ImageProps[] }) => {
  //states and refs
  const [enterAnimationInProgress, setEnterAnimationInProgress] =
    useState(true);
  const wheelRef = useRef(null);
  const imagesRefs = useRef([] as HTMLDivElement[]);
  const circularSliderRef = useRef(null);

  useEffect(() => {
    const initializeScrollTrigger = () => {
      gsap.registerPlugin(ScrollTrigger);

      let wheel = wheelRef.current;
      let images = imagesRefs.current;

      // initial setup for gsap
      function setup() {
        let wheel = wheelRef.current;
        let images = imagesRefs.current;

        radius =
          radius === 0
            ? //@ts-ignore
              // for radius change during rotation
              Math.min(wheel.offsetWidth, wheel.offsetHeight) / 2
            : radius;

        //@ts-ignore
        center = wheel.offsetWidth / 2;

        let cardWidth = images[0].offsetWidth;
        slice = (cardWidth * 1.765) / radius;
        initialSlice = slice;

        gsap.utils.toArray(images).forEach((item, i) => {
          let angle = i * initialSlice;

          let x = center + radius * Math.sin(angle);
          let y = center - radius * Math.cos(angle);

          //@ts-ignore
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

      window.addEventListener("resize", setup);

      // the rotation thingy
      gsap.to(wheelRef.current, {
        rotate: () =>
          -5 *
          (180 / Math.PI) *
          ((images[0].offsetWidth * 1.765) /
            //@ts-ignore
            // for radius change during rotation
            (Math.min(wheel.offsetWidth, wheel.offsetHeight) / 2)),
        ease: "none",
        duration: 0.8,
        scrollTrigger: {
          trigger: ".circular-slider",
          start: "top top",
          fastScrollEnd: true,
          end: "top -600vh",
          scrub: 2,
          pin: true,
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
          // onEnter: () => {
          //   setEnterAnimationInProgress((x) => true);
          //   gsap.utils.toArray(images).forEach((item, i) => {
          //     let angle = i * slice;

          //     let x = center + radius * Math.sin(angle);
          //     let y = center - radius * Math.cos(angle);

          //     //@ts-ignore
          //     gsap.to(item, {
          //       rotation: angle + "_rad",
          //       xPercent: -50,
          //       yPercent: -50,
          //       x: x,
          //       y: y,
          //       duration: 0.5,
          //     });
          //   });
          //   setEnterAnimationInProgress((x) => false);
          // },
          // onEnterBack: () => {
          //   setEnterAnimationInProgress((x) => true);
          //   gsap.utils.toArray(images).forEach((item, i) => {
          //     let angle = i * slice;

          //     let x = center + radius * Math.sin(angle);
          //     let y = center - radius * Math.cos(angle);

          //     //@ts-ignore
          //     gsap.to(item, {
          //       rotation: angle + "_rad",
          //       xPercent: -50,
          //       yPercent: -50,
          //       x: x,
          //       y: y,
          //       duration: 0.5,
          //     });
          //   });
          //   setEnterAnimationInProgress((x) => false);
          // },
          // onLeave: () => {
          //   setEnterAnimationInProgress((x) => true);
          //   if (!isScrollingDown) {
          //     gsap.utils.toArray(images).forEach((item, i) => {
          //       let angle = i * initialSlice;

          //       let x = center + radius * Math.sin(angle);
          //       let y = center - radius * Math.cos(angle);

          //       //@ts-ignore
          //       gsap.to(item, {
          //         rotation: angle + "_rad",
          //         xPercent: -50,
          //         yPercent: -50,
          //         x: x,
          //         y: y,
          //         duration: 0.5,
          //       });
          //     });
          //   }
          //   setEnterAnimationInProgress((x) => false);
          // },
          // onLeaveBack: () => {
          //   setEnterAnimationInProgress((x) => false);
          //   if (!isScrollingDown) {
          //     gsap.utils.toArray(images).forEach((item, i) => {
          //       let angle = i * initialSlice;

          //       let x = center + radius * Math.sin(angle);
          //       let y = center - radius * Math.cos(angle);

          //       //@ts-ignore
          //       gsap.to(item, {
          //         rotation: angle + "_rad",
          //         xPercent: -50,
          //         yPercent: -50,
          //         x: x,
          //         y: y,
          //         duration: 0.5,
          //       });
          //     });
          //   }
          //   setEnterAnimationInProgress((x) => false);
          // },
          invalidateOnRefresh: true,
        },
      });

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
            {images.map((image, index) => (
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
                  <span>{image.heading}</span>
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
