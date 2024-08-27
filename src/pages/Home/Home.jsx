import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Home.css';
import bgimg from '../../assets/bg.jpeg';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h2 className="title">Hello, I'm</h2>
        <h3 className="title name">Lydia Mwangi</h3>
        <p className="para">
          A <span className="highlight">Software Engineer</span> from <span className="highlight">Kenya</span>
        </p>
        <p className="para description">
          I'm a software engineer based in Nairobi, Kenya, and I'm very passionate and dedicated to my work.
        </p>
        <div className="action">
          <button className="about-btn">About Me</button>
          <div className="social-icons">
            <a href="https://facebook.com" className="icon"><FaFacebook /></a>
            <a href="https://twitter.com" className="icon"><BsTwitter /></a>
            <a href="https://instagram.com" className="icon"><FaInstagramSquare /></a>
            <a href="https://linkedin.com" className="icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="image-card-container">
        <div className="image-container">
          <img src={bgimg} alt="Lydia Mwangi" />
        </div>
        <div className="skills-card">
          <h3 className="skills-title">Skills</h3>
          <ul className="skills-list">
            <li>Software Engineer</li>
            <li>Full Stack Developer</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
