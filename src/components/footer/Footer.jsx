import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import FAVICON from '../../assets/favicon.png'



const Footer = () => {
  return (
    <footer className='footer'>
      <img src={FAVICON} className='footer__logo' alt='icon'/>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#recommendations">Recommendations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/lior-mary/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/liormary' target='_blank' rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 Lior Mary. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
