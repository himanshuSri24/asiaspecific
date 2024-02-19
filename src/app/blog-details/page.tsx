import React from 'react'
import "./style.css"
import Navbar from '@/component/Navbar/Navbar'
import Image from 'next/image'
import img1 from "../../../images/blog/Rectangle 95.svg"
import Footer from '@/component/footer/Footer'

const page = () => {
  return (
    <div className='body-blog-details-page'>
    <Navbar />
    <div className='blog-details-page'>
      <div className='blog-details-page-heading'>
      Best Ideas To Make Your Living Room Look More Expensive.
      </div>
      <div className='blog-details-page-date'>
      15 Dec, 2023
      </div>
      <div className='blog-details-page-photo'>
       <Image src={img1} alt='' />
      </div>
      <div className='blog-details-page-para'>
      Tiles play an important role in decorating rooms. It increases the beauty and visibility of rooms if you select it wisely. There are tiles that are especially designed for living rooms at AsiaPacific Ceramic. You can choose the look and texture, as per your personal choices and likes. Some people like their living room to be vibrant and in your face, while many others like it to be sober and maintain a low profile when it comes to their personal space. You can choose high gloss dark, high gloss light, super white body, Matt color body or Matt tiles as per your requirement. Newark ceramic
      <br />
      Take a look at the most common features an eCommerce developer must take into consideration:
      <div className='blog-details-page-para-parts'>
      <div className='blog-details-page-para-heading'>Add Some Lightning Fixtures</div>
      <div>Take a look at the most common features an eCommerce developer must take into consideration:</div>
      </div>

      <div className='blog-details-page-para-parts'>
      <div className='blog-details-page-para-heading'>Hanging out Wall Arts</div>
      <div>An oversized piece of art hanging on your living room wall can give it the “wow” factor it desperately needs. Art is not restricted to wall décor. You can find artwork at gift shops or online stores. If you can’t find anything that catches your eye, consider making your own piece to hang from your wall.</div>
      </div>

      <div className='blog-details-page-para-parts'>
      <div className='blog-details-page-para-heading'>Suitable Size of the Furniture</div>
      <div>Choose furniture based on the size of your living room. Even if a large sofa offers more comfort, experts recommend choosing a more compact model that does not occupy very much space. The same rule goes for coffee tables or shelving units. Choose wisely, and your sectional can simultaneously establish coziness and sophistication..</div>
      </div>


      <div className='blog-details-page-para-parts'>
      <div className='blog-details-page-para-heading'>Paint Wall and Trim Same Color</div>
      <div>Paint has a drastic impact on any room. A simple and cheap way to bring up the appearance in your living room is to paint the walls and trim the same color. This allows the focus of your living room to be on your decorations and accents. It is also easier</div>
      </div>
    
      <div className='blog-details-page-para-parts'>
      <div className='blog-details-page-para-heading'>Decorate with Plants and Flowers</div>
      <div>Plants and flowers breathe life and a sense of calm into your home but a vase with fresh flowers at the dining table can also add an elegant touch. Whether you go for real or faux, a potted plant and some flowers on your tables or in the corner of a room will add a dash of color as well as class and luxury without too much trouble. Plus, they make everyone happy!</div>
      </div>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default page