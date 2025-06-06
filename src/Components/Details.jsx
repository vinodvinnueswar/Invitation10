import React from 'react'
import Border4 from '../Images/Border/Border4.png'

const Details = () => {
  return (
   <div className="Details-Container" data-aos="fade-up"
   data-aos-duration="3000">
    <h2>Couple's</h2>
    
     <img src={Border4} alt=""/>

    <div className="Details-Page">
    <p>Mr & Mrs Ranbir & Alia</p>
               <div className="content2">
               <p>request the honor of presence at   </p>
                  <p>the wedding </p> 
               </div>

              < div className="content3">
                <h3>Family Members</h3>
                <p> With Blessing of Parents </p>
                <p>Rishi kapoor and Neetu Singh ,</p>
                <p>Soni Razadan and Mahesh Bhatt.</p>
               </div>
            </div>
            <div className="Venue" >
                <h3>Venue</h3>
                <p> Vastu Buliding</p>
                <p> Pali Hills,</p>
                <p>Mumbai.</p>
            </div>

             <div className="Date_Place">
              <h2>Date</h2>
              <p>14th April 2022,</p><br />
              <p>Thursday.</p><br />
              <p>From 5 : 30 PM OnWards</p>

             </div>

    </div>
  )
}

export default Details