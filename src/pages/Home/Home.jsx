import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Home.css'
import bgimg from '../../assets/bg.jpeg'
function Home() {
  return (
    <div className='home'>
      <div className="content">
        <h2 className="title">Hello,I'm</h2>
        <h3 className="title">Lydia Mwangi</h3>
        <p className="para">A <span>Software Engineer</span> from <span>Kenya</span></p>
        <p className="para">I'm a software engineer based in Nairobi Kenya and am very passionate and dedicated at my work.</p>
         <div className="btn">
         <button>About Me</button>
          <p className='icon'><FaFacebook /></p>
          <p className='icon'><BsTwitter /></p>
          <p className='icon'><FaInstagramSquare /></p>
          <p className='icon'><FaLinkedin /></p>
         </div>
      </div>
      <div className="image">
        <img src={bgimg} alt="background img" />
      </div>
    </div>
  )
}

export default Home
