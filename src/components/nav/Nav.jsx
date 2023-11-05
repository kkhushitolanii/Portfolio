import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BiNotepad} from 'react-icons/bi'
import {useState} from 'react'
// import ReactTooltip, { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'
import Tooltip from './Tooltip'

// import { useState } from "react"




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    {/* <a  data-tooltip-id="my-tooltip"
  data-tooltip-content="Home"
  data-tooltip-effect="solid"
  data-tooltip-type="light"
  data-tooltip-place="top" data-tooltip-event="click" href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#'? 'active' : ''} ><AiOutlineHome /> <Tooltip id="my-tooltip" /></a> */}
   
  <Tooltip text={"Home"}><a  href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#'? 'active' : ''} ><AiOutlineHome /></a> </Tooltip>

      <Tooltip text={"About"}><a  href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about'? 'active' : ''} ><AiOutlineUser/></a></Tooltip>

      <Tooltip text={"Experience"}><a  href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience'? 'active' : ''} ><BiBook/></a></Tooltip>
      
      <Tooltip text={"Portfolio"}><a  href="#portfolio" onClick={() => setActiveNav('#portfolio')} className= {activeNav === '#portfolio'? 'active' : ''} ><BiNotepad/> </a></Tooltip>
      
      <Tooltip text={"Contact"}><a   href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact'? 'active' : ''}><BiMessageSquareDetail/></a></Tooltip>
    </nav>
  )
}

export default Nav
