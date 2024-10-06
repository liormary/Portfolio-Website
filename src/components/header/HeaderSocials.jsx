import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/lior-mary/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/liormary' target='_blank'><BsGithub /></a>
      </div>
  )
}

export default HeaderSocials
