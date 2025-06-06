import React from 'react'
import BR_GR from '../Images/BR_GR/ranbiralia.png'
import Audio from '../Components/Audio.jsx'
import AudioFile from '../audio/Music3.mp3'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Intro = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
   <div className="Intro-Container">
    <div className="Intro-Page">
        <div className="BR_GR">
            <img src={BR_GR} alt="" />
            <div className="Mask"></div>
        </div>
       <div className="Details">
       <div className="Title" data-aos="fade-up">
            <h2>Wedding Invitation</h2>
        </div>
        <div className="Name" >
         <p data-aos="fade-right">Ranbir</p>
         <p data-aos="zoom-in">&</p>
         <p data-aos="fade-left">Alia</p>
        </div>
       </div>
      
      
      <div className="Audio">
      <Audio audioUrl={AudioFile}/>
      </div>

    </div>
   </div>
  )
}

export default Intro