import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineRecommend } from "react-icons/md";
import { useState   } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><IoSchoolOutline /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#recommendations' onClick={() => setActiveNav('#recommendations')} className={activeNav === '#recommendations' ? 'active' : ''}><MdOutlineRecommend /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      </nav>
  )
}

export default Nav
