import React from 'react'
import './portfolio.css'
import HEALTH from '../../assets/Health-Analysis-Website.png'
import BUDGET from '../../assets/Budget-Website.jpg'
import TRAVEL from '../../assets/TravelTip.png'
import INSTA from '../../assets/instapets.jpg'
import QUEENB from '../../assets/queenb-summer-project.png'
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={INSTA} alt='instapet' />
          </div>
          <h3>InstaPet</h3>
          <p>Pet Social Media App in Java language and XML on Android Studio using Api calls and database technologies like Firebase</p>
          <div className="skills">
            <FaJava />
            <IoLogoFirebase />
            <IoLogoAndroid />
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/liormary/InstaPets" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1_IIYTpklbBJuKtWJTIgjEDDJ-SzdnMzM/view?usp=drive_link" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={QUEENB} alt='QUEENB' />
          </div>
          <h3>The Closet</h3>
          <p>QueenB Summer Camp Project, a scalable, secure, and user-friendly second-hand online store web app using React, Node.js, CSS Modules, Express and MongoDB</p>
          <div className="skills">
            <IoLogoJavascript />
            <FaReact />
            <SiMongodb />
            <SiExpress />
            <FaNode />
            <FaCss3 />
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/liormary/queenb-summer-project-24-team5" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1DikJOoqqU-xdqjU99bZ-wH8qm2VbqJr_/view?usp=drive_link" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BUDGET} alt='Budget' />
          </div>
          <h3>Budget Website</h3>
          <p>Budget website using React.js, CSS, HTML and Bootstrap</p>
          <div className="skills">
            <IoLogoJavascript />
            <FaReact />
            <FaCss3 />
            <FaHtml5 />
            <FaBootstrap />
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/liormary/Budget-Website" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/10TdmsBjkcqRVEuZt1aWqsl6XWwsbeeOz/view?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TRAVEL} alt='TravelTip' />
          </div>
          <h3>TravelTip</h3>
          <p>Travel Recommendation website using JavaScript, CSS and HTML</p>
          <div className="skills">
            <IoLogoJavascript />
            <FaCss3 />
            <FaHtml5 />
            <BsFiletypeJson />
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/liormary/TravelTip-Website" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1bwGjTXBw0TVc9REbGGO6stW7kBfXdjzc/view?usp=drive_link" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HEALTH} alt='HEALTH' />
          </div>
          <h3>Health Analysis Website</h3>
          <p>Health Analysis Website using JavaScript, CSS and HTML</p>
          <div className="skills">
            <IoLogoJavascript />
            <FaCss3 />
            <FaHtml5 />
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/liormary/Health-Analysis-Website" className='btn' target='_blank'>GitHub</a>
            <a href="https://drive.google.com/file/d/1CTMfoav3W7BxJa6TBN-m0exfoyMNrL1L/view?usp=drive_link" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
