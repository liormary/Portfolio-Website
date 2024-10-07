import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec erat id neque ultricies ultricies. In non velit in massa pharetra bibendum. Sed at risus at neque lobortis convallis. Integer vel semper nunc. In hac habitasse platea dictumst. Donec at varius nunc, non viverra turpis. Integer vel neque eget dolor consequat consectetur. Donec facilisis, lectus non viverra consectetur, mauris neque consectetur neque, in scelerisque nisi velit id neque. Nulla facilisi.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
