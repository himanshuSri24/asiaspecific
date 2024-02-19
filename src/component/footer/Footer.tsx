import React from "react";
import img4 from "../../../images/path2 (1).png";
import img5 from "../../../images/path4.png";
import img9 from "../../../images/Linked in.svg";
import img10 from "../../../images/Instagram - 1.svg";
import img11 from "../../../images/Facebook -1.svg";
import img12 from "../../../images/Youtube.svg";
import img13 from "../../../images/Pinterest.svg";
import Image from "next/image";

import "./style.css";
const Footer = () => {
  return (
    <div>
      <div className="ready font-bd">
        <div className="ready-content">Ready to work together?</div>
        <div className="circle"></div>
        <div className="ready-content">Ready to work together?</div>
        <div className="circle"></div>
        <div className="ready-content">Ready to work together?</div>
      </div>

      <div className="readym font-bd">
        <div className="ready-content">Ready to work together?</div>
        <div className="circlem"></div>
        <div className="ready-content">Ready to work together?</div>
        <div className="circlem"></div>
        <div className="ready-content">Ready to work together?</div>
      </div>
      <footer className="footer">
        <div className="footer-logos">
          <div className="asia-specific-logo">
            <div>
              <Image src={img5} alt="" />
            </div>
            <div className="asia-logo-img2">
              <Image src={img4} alt="" />
            </div>
          </div>

          <div className="social-logos">
            <div className="linkedin">
              <Image src={img9} alt="" height={32} width={32} />
            </div>
            <div className="linkedin">
              <Image src={img10} alt="" height={32} width={32} />
            </div>
            <div className="linkedin">
              <Image src={img11} alt="" height={32} width={32} />
            </div>
            <div className="linkedin">
              <Image src={img12} height={32} width={32} alt="" />
            </div>
            <div className="linkedin">
              <Image src={img13} alt="" height={32} width={32} />
            </div>
          </div>
        </div>
        <div className="quick-links">
          <div className="quick-links-h1">Quick Links</div>
          <div className="quick-links-h2">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>E-Catalogue</li>
              <li>Information</li>
              <li>Export</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="phone">
          <div className="phone-content">
            <div className="quick-links-h1">Phone</div>
            <div className="quick-links-h2">
              <ul>
                <li>+91-9727006007</li>
                <li>+91-9726810206</li>
                <li>+91-7984907129</li>
              </ul>
            </div>
          </div>

          <div className="email-lap">
            <div className="quick-links-h1">Email:</div>
            <div className="quick-links-h2">info@asiapacificceramic.com</div>
          </div>
        </div>

        <div className="corporate-office">
          <div className="quick-links-h1">Corporate Office:</div>
          <div className="quick-links-h2">
            306, Eden Ceramic City, Opp. Hotel Ravi Residency, NH 8A, Lalpar,
            Morbi-363642, Gujarat, India.
          </div>
          <div></div>
        </div>

        <div className="copywriting-text">
          <div className="lamba">© Copyright 2023 - Asia Pacific Ceramic</div>
        </div>
      </footer>

      <footer className="footerm">
        <div className="asia-specific-logo">
          <div>
            <Image height={50} width={50} src={img5} alt="" />
          </div>
          <div className="asia-logo-img2">
            <Image src={img4} height={37} width={90} alt="" />
          </div>
        </div>
        <div className="quick-line-m">
          <div className="quick-line-m-h">Quick Link</div>
          <div className="quick-line-m-content">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Productions</li>
              <li>E-Catalogue</li>
              <li>Information</li>
              <li>Export</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="quick-line-m">
          <div className="quick-line-m-h">Phone</div>
          <div className="quick-line-m-content">
            <ul>
              <li>+91 97270 06007</li>
              <li>+91 97268 10206</li>
              <li>+91 79849 07129</li>
            </ul>
          </div>
        </div>

        <div className="quick-line-m">
          <div className="quick-line-m-h">Email</div>
          <div className="quick-line-m-content">
            <ul>
              <li>info@asiapacificceramic .com</li>
            </ul>
          </div>
        </div>

        <div className="quick-line-m">
          <div className="quick-line-m-h">Corporate Office</div>
          <div className="quick-line-m-content">
            <ul>
              <li>
                306, Eden Ceramic City, Opp. Hotel Ravi Residency, NH 8A,
                Lalpar, Morbi-363642, Gujarat, India.
              </li>
            </ul>
          </div>
        </div>

        <div className="social-logos">
          <div className="linkedin">
            <Image src={img9} alt="" height={32} width={32} />
          </div>
          <div className="linkedin">
            <Image src={img10} alt="" height={32} width={32} />
          </div>
          <div className="linkedin">
            <Image src={img11} alt="" height={32} width={32} />
          </div>
          <div className="linkedin">
            <Image src={img12} height={32} width={32} alt="" />
          </div>
          <div className="linkedin">
            <Image src={img13} alt="" height={32} width={32} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
