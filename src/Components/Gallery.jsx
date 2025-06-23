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







const Gallery = () => {
    let data =[
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
  

    const [model , setModel] =useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) =>{
        setModel(true)
        setTempImgSrc(imgSrc)
        console.warn(imgSrc)
    }

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
         {
            data.map((item)=>{
                return(
                    <div className="pics" onClick={() =>getImg(item.imgsrc)}>
                        <img src={item.imgsrc}  />
                    </div>
                )
            })
         }
        </div>
    </div>
  )
}

export default Gallery