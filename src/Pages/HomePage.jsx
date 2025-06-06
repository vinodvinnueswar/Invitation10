import React from 'react'
import Intro from '../Components/Intro'
import '../App.css'
import Bride from '../Components/Bride'
import Groom from '../Components/Groom'
import Gallery from '../Components/Gallery'
import Video from '../Components/Video'
import Details from '../Components/Details'
import Location from '../Components/Location'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
   <div className="HomePage">
    <Intro/>
    <Bride/><br />
    <Groom/>
    <Gallery/>
    <Video/>
    <Details/>
    <Location/>
    <Contact/>
   </div>
  )
}

export default HomePage