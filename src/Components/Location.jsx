import React from 'react'
import Border4 from '../Images/Border/Border4.png'

const Location = () => {
  return (
    <div className="Location_Container" data-aos="fade-up"
    data-aos-duration="3000">
        <h4>Venue Location</h4>
             <img src={Border4} alt=""/>

       <div className="Location_Page">
       <div className="Location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2707155012704!2d72.81971987544077!3d19.051831482147815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9415759fdeb%3A0x94830583aa6f83f6!2sVastu%20Building%2C%20601%2C%20Pereira%20Rd%2C%20Ranwar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1749186644782!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className="Button">
            <a href="https://maps.app.goo.gl/MhjySApEPtA1mMwR6">View Map</a>
        </div>
       </div>

     </div>
  )
}

export default Location