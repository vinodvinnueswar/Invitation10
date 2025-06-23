import React, { useState } from 'react'
import img1 from '../Images/BR_GR/Rn_Al1.png'
import img2 from '../Images/BR_GR/Rn_Ali2.png'
import img3 from '../Images/BR_GR/Rn_Ali3.png'
import img4 from '../Images/BR_GR/Rn_Ali4.png'
import img5 from '../Images/BR_GR/Rn_Ali5.png'
import img6 from '../Images/BR_GR/Rn_Ali6.png'
import img7 from '../Images/BR_GR/Rn_Ali7.png'
import img8 from '../Images/BR_GR/Rn_Ali8.png'
import img9 from '../Images/BR_GR/Rn_Ali9.png'
import Border4 from '../Images/Border/Border4.png'

import LightGallery from 'lightgallery/react';


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';



    const data =[
        {
            imgsrc:img1
        },
        {
            imgsrc:img2
        },
        {
            imgsrc:img3
        },
        {
            imgsrc:img4
        },
        {
            imgsrc:img5
        },
        {
            imgsrc:img6
        },
        {
            imgsrc:img7
        },
        {
            imgsrc:img8
        },
        {
            imgsrc:img9
        },
    ]
  

    export function Gallery() {
        const onInit = () => {
            console.log('lightGallery has been initialized');
        };

  return (
    <div className="Gallery-container" data-aos="fade-up"
    data-aos-duration="3000">
        <h2 >Gallery</h2>
        {/* <div className={model ? "model open" : "model"}>
            <img  className='Frame' src={tempImgSrc} alt="" />
        </div> */}
            <img src={Border4} alt="" />
        <div className="images" data-aos="fade-up"
     data-aos-duration="3000" >
      <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

          {
            data.map((item , index)=>{
                return(
                    <a className ='pics' href={item.imgsrc} key={index}>
                    <img src={item.imgsrc}  />
                   </a>
                
                )
            })
         }

            </LightGallery>

         
        </div>
    </div>
  )
}

export default Gallery