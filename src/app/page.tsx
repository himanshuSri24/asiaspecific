"use client";
import "./styles.css";
import img1 from "../../images/img1.png";
import img2 from "../../images/Frame 176 (1).png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import img3 from "../../images/image 21.png";
import CircularSlider from "@/component/CircularSlider";
import { FiAlignJustify } from "react-icons/fi";

const cards = [
  {
    src: "https://assets.codepen.io/756881/amys-1.jpg",
    alt: "",
    heading: "Random heading",
    buttonLabel: "Button Label 1",
    buttonFunction: () => {},
  },
  {
    src: "https://assets.codepen.io/756881/amys-2.jpg",
    alt: "",
    heading: "Heading 2",
    buttonLabel: "Button Label 2",
    buttonFunction: () => {},
  },
  {
    src: "https://assets.codepen.io/756881/amys-3.jpg",
    alt: "",
    heading: "Heading 3",
    buttonLabel: "Button Label 3",
    buttonFunction: () => {},
  },
  {
    src: "https://assets.codepen.io/756881/amys-4.jpg",
    alt: "",
    heading: "Heading 4",
    buttonLabel: "Button Label 4",
    buttonFunction: () => {},
  },
  {
    src: "https://assets.codepen.io/756881/amys-5.jpg",
    alt: "",
    heading: "Heading 5",
    buttonLabel: "Button Label 5",
    buttonFunction: () => {},
  },
  {
    src: "https://assets.codepen.io/756881/amys-6.jpg",
    alt: "",
    heading: "Heading 6",
    buttonLabel: "Button Label 6",
    buttonFunction: () => {},
  },
];

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:400px)");

    const object: any = document.querySelector(".about");
    console.log(object.offsetHeight);

    if (!mediaQuery.matches) {
      const contentHolderHeight = object.offsetHeight;

      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;
      const totalBodyHeight =
        contentHolderHeight + imgHolderHeight + additionalScrollHeight + 20;
      if (isMobile) {
      } else {
        const box1: any = document.querySelector(".box1");
        box1.style.height = `${totalBodyHeight}px`;
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
      const about: any = document.querySelector(".about");
      const contentHolderHeight = about.offsetHeight;
      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;
      const totalBodyHeight = contentHolderHeight + imgHolderHeight;
      const object: any = document.querySelector(".mbox2");
      object.style.height = `${totalBodyHeight}px`;

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
  });

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
            <div className="text-[30px] font-[500] leading-[32px] text-[#212121] relative right-[75px] my-2">
              About us
            </div>
            <div className="w-[60px] h-[1px] bg-[#E94D11] relative bottom-2 right-[105px]"></div>

            <div>
              <Image src={img3} alt="" className="i2" />
            </div>
            <div className="px-3">
              <br />
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
      {/* <div className="h-[100vh]"> */}
      <CircularSlider images={cards} />
      {/* </div> */}
      <div className="max_z">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat ea
        earum magni animi ducimus debitis harum quia accusamus exercitationem
        maiores alias, quod architecto ab quas perferendis tempore facere
        facilis enim explicabo sint velit recusandae? Distinctio est vel
        reprehenderit sunt? Fuga commodi rerum omnis id officia veniam! Vel
        error voluptatem nobis soluta laudantium delectus dolores molestias,
        vero animi aliquid aliquam facere esse. Voluptate ducimus, provident
        esse modi qui similique hic laboriosam atque dicta fuga aliquid
        consectetur voluptates, doloremque itaque aut. Rerum fuga autem dicta
        adipisci labore, repellendus expedita obcaecati unde. Ipsum, laudantium?
        Sequi quaerat optio voluptatum ex aperiam, praesentium voluptatibus aut.
        Corrupti aliquam nobis beatae quis, distinctio optio recusandae eaque
        excepturi perspiciatis possimus eum ex eos consectetur ducimus fugit
        earum temporibus facere animi minus nam cupiditate ullam maxime delectus
        eius. Vitae culpa modi soluta perferendis nulla vero, provident totam
        ipsum fugiat blanditiis, quod porro fuga. Ad tempore fugiat dicta illo
        consectetur deleniti ex ut reiciendis alias dolores, ea culpa molestias
        minus mollitia quas voluptate iste doloribus quam adipisci maxime nulla
        reprehenderit vero nisi! Magni quisquam tenetur necessitatibus
        repellendus dolorum id! At ad illum, ea veniam ex similique voluptate
        omnis. Quis, aut, neque corporis recusandae odio veniam at beatae saepe
        esse quisquam, quo eos. Commodi numquam animi, nostrum repellendus natus
        sequi aliquam dignissimos ad delectus blanditiis tempora eveniet
        architecto ipsum omnis, non vel aliquid dolorum incidunt, ex alias
        corporis. Itaque porro, veritatis, doloremque repellendus in distinctio
        id iste dolores accusamus ratione pariatur magni similique alias rem?
        Delectus at, fugiat autem deserunt quidem impedit doloremque placeat
        unde neque commodi rem accusamus itaque inventore veritatis cupiditate
        dolore enim labore? Non, distinctio ullam? Iure, error possimus. A,
        velit consequatur harum sequi, inventore sint quae sit commodi et cum,
        ducimus nemo praesentium cumque nobis voluptate. Ipsam rem nostrum ex
        qui odit illo in tempore totam explicabo vel eaque magnam est facilis
        quasi accusantium beatae aperiam soluta, recusandae voluptas nulla
        blanditiis inventore! Illum illo eaque delectus quam? Omnis eaque nulla
        necessitatibus corrupti odio! Praesentium non dignissimos labore quaerat
        aperiam, dolor officia placeat, ipsam quas debitis minus tempore optio
        neque numquam repellat iure fuga dolorum facilis? Enim placeat nihil
        corrupti laudantium possimus quis molestias amet temporibus, iusto
        aliquid tempore dolorum aut sed facilis, cupiditate ducimus, impedit
        sint non accusantium mollitia aperiam quam ex excepturi quas! Dolor, id
        molestias obcaecati officia voluptates quidem! Provident iure vel,
        consectetur assumenda dicta maxime omnis eum vero iste! Eaque nobis
        ipsum officia nihil vero earum perferendis, cum nulla enim eligendi odio
        libero, rem doloremque! Illo, dolore sunt ducimus sequi itaque error
        non?
      </div>
    </div>
  );
}
