"use client"
import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import "./style.css";
import Image from "next/image";
import img1 from "../../../images/blog/Rectangle 95 (1).png";
import img2 from "../../../images/blog/Rectangle 95 (2).png";
import img3 from "../../../images/blog/Rectangle 95 (3).png";
import img4 from "../../../images/blog/Rectangle 95 (4).png";
import Footer from "@/component/footer/Footer";
import { useRouter } from "next/navigation"
const Blog = () => {
  const router = useRouter();
  
  return (
    <div className="body456">
      <Navbar />
      <section className="blog-urvesh">
        <div className="blog-heading-456">Blog</div>
        <div className="blog-content">
          <Image src={img1} alt="" height={400} width={400} />
          <div className="blog-content-content">
            <div className="blog-content-date">15 Dec, 2023</div>
            <div className="blog-content-heading">
              Asia Pacific Ceramic at Coverings – The Global Tile & Stone
              Experience
            </div>
            <div className="blog-content-para">
              Asia Pacific Ceramic is participating in Coverings, the largest
              event for the ceramic tile and natural stone industry in North
              America for more than 30 years. Connect at Coverings 2022 and find
              the solutions and sources you need at the preeminent ceramic tile
              & natural
            </div>
            <button onClick={()=>{
              router.push("/blog-details")
            }} > View </button>
          </div>
        </div>

        <div className="blog-content">
          <Image src={img2} alt="" height={400} width={400} />
          <div className="blog-content-content">
            <div className="blog-content-date">15 Dec, 2023</div>
            <div className="blog-content-heading">
              Top Porcelain Tiles Manufacturer in India
            </div>
            <div className="blog-content-para">
              There are many porcelain tiles manufacturer in India but very few
              are the best in them. Porcelain has now been widely used for
              making tiles for many years, modern production methods and
              quantities have made porcelain tiles available for the average
              household in recent years.
            </div>
            <button onClick={()=>{
              router.push("/blog-details")
            }} > View </button>
          </div>
        </div>

        <div className="blog-content">
          <Image src={img3} alt="" height={400} width={400} />
          <div className="blog-content-content">
            <div className="blog-content-date">15 Dec, 2023</div>
            <div className="blog-content-heading">
              Best Ideas To Make Your Living Room Look More Expensive.
            </div>
            <div className="blog-content-para">
              Asia Pacific Ceramic is participating in Coverings, the largest
              event for the ceramic tile and natural stone industry in North
              America for more than 30 years. Connect at Coverings 2022 and find
              the solutions and sources you need at the preeminent ceramic tile
              & natural s
            </div>
            <button onClick={()=>{
              router.push("/blog-details")
            }} > View </button>
          </div>
        </div>

        <div className="blog-content">
          <Image src={img4} alt="" height={400} width={400} />
          <div className="blog-content-content">
            <div className="blog-content-heading">
              Everything You Need To Know About Porcelain Tiles
            </div>
            <div className="blog-content-date">15 Dec, 2023</div>
            <div className="blog-content-para">
              Asia Pacific Ceramic is participating in Coverings, the largest
              event for the ceramic tile and natural stone industry in North
              America for more than 30 years. Connect at Coverings 2022 and find
              the solutions and sources you need at the preeminent ceramic tile
              & natural s
            </div>
            <button onClick={()=>{
              router.push("/blog-details")
            }} > View </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
