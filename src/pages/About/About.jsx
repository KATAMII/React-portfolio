import React from 'react'
import './About.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <div className="about">
      <h2 className="about-title">About Me</h2>
      <div className="cards-container">
        <div className="card">
          <h3 className="card-title">Who I Am</h3>
          <p className="card-text">
            I'm <span className="highlight">Lydia Mwangi</span>, a passionate Software Engineer from Nairobi, Kenya. I love crafting innovative, user-friendly digital solutions.
          </p>
          <p className="location">
            <FaMapMarkerAlt className="location-icon" /> Nairobi, Kenya
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">What I Do</h3>
          <p className="card-text">
            I specialize in <span className="highlight">Full Stack Development</span> and <span className="highlight">UI/UX Design</span>. My goal is to create applications that enhance user experiences.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Let's Connect</h3>
          <p className="card-text">
            I'm always open to collaboration and new projects. <span className="highlight">Let's create something amazing together!</span>
          </p>
        </div>
        <div className="card cv-card">
          <h3 className="card-title">My CV</h3>
          <p className="card-text">
            You can view or download my CV to learn more about my experience and skills.
          </p>
          <div className="cv-actions">
            <a href="cv" className="cv-button" target="_blank" rel="noopener noreferrer">
              <AiOutlineFilePdf className="cv-icon" /> View CV
            </a>
            <a href="cvdownload" className="cv-button">
              <AiOutlineDownload className="cv-icon" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

