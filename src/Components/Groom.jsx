import React from 'react'
import BrideImg from '../Images/BR_GR/Ranbir_Alia.png'
import Frame1 from '../Images/Frames/Frame1.png'


const Bride = () => {
  return (
 <div className="Bride-Container" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
     <h2>Groom</h2>
     <div className="Bride-Page">
         <img src={BrideImg} alt="" />
         <h2  data-aos="fade-right"> Ranbir Kapoor</h2>
         <div className="Frame1">
                 <img src={Frame1} alt="" />
                 </div>
         <p  data-aos="fade-left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis inventore veritatis error saepe corrupti, at ab. Odio minus, hic deleniti qui mollitia cum, voluptate cupiditate, laudantium laboriosam porro alias.</p>
     </div>
    </div>
  )
}

export default Bride