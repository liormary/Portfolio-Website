import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { GrTechnology } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import CTA from './CTA.jsx'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import HeaderSocials from './HeaderSocials.jsx'


const About = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Get To Know</h5>
        <h2>Hi, I'm Lior Mary</h2>
        <h5 className="text-light">FullStack/FrontEnd Developer</h5>
        <HeaderSocials />
        <a href='#contact' className="scroll__down">Scroll Down <MdOutlineArrowForwardIos className='arrow' /></a>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Lior Mary" />
            </div>
          </div>

          <div className="about__cards">
            <article className='about__card'>
              <GrTechnology className='about__icon' />
              <h5>Tech Enthusiast              </h5>
              <small>Passionate about impactful web applications</small>
            </article>

            <article className='about__card'>
              <HiOutlinePaintBrush  className='about__icon' />
              <h5>Creative Solver</h5>
              <small>Blending creativity with technical skills</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Team Player</h5>
              <small>Thriving in collaborative environments</small>
            </article>
          </div>
        </div>
        <div className="about__content">  
          <p>
            I am a passionate Full Stack/Front-End Developer dedicated to creating intuitive web applications that enhance user experiences. With a solid foundation in web technologies and a collaborative mindset, I thrive in dynamic environments where I can tackle challenges and deliver innovative solutions. I’m currently seeking my next opportunity to contribute my skills and creativity to impactful projects while continuing to grow in the tech industry.
          </p>
          <CTA />
        </div>
      </div>
    </header>
  )
}

export default About
