import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { GrTechnology } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
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

          <p>
            I am a passionate Full Stack/Front-End Developer dedicated to creating intuitive web applications that enhance user experiences. With a solid foundation in web technologies and a collaborative mindset, I thrive in dynamic environments where I can tackle challenges and deliver innovative solutions. I’m currently seeking my next opportunity to contribute my skills and creativity to impactful projects while continuing to grow in the tech industry.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
