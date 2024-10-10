import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { useState   } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineSolution /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#recommendations' onClick={() => setActiveNav('#recommendations')} className={activeNav === '#recommendations' ? 'active' : ''}><AiOutlineLike /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageDots /></a>
      </nav>
  )
}

export default Nav
