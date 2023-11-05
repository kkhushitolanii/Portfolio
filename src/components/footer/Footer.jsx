import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const footer = () => {
  return (
    <footer >
    <div className='ft'>
      <a href="#" className="footer__logo">KHUSHI TOLANI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kkhushitolanii/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/kkhushitolanii/"><FiInstagram/></a>
        <a href="https://github.com/kkhushitolanii"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KHUSHI TOLANI. All rights reserved.</small>
      </div>

    </div>
    </footer>
  )
}

export default footer