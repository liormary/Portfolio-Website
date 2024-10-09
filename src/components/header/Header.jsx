import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lior Mary</h1>
        <h5 className="text-light">FullStack/FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src= {ME} alt='me' />
        </div>
        <a href='#contact' className="scroll__down">Scroll Down <MdOutlineArrowForwardIos className='arrow' /></a>
      </div>
    </header>
  )
}

export default Header