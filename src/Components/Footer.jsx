import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <p className='icon'><FaFacebook /></p>
      <p className='icon'><BsTwitter /></p>
      <p className='icon'><FaInstagramSquare /></p>
      <p className='icon'><FaLinkedin /></p>
      <p className='icon'>@ copyright <span>Katamii</span></p>
     
    </div>
  )
}

export default Footer
