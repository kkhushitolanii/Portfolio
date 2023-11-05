import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Services = () => {
  return (
    // <section id='services'>
    //   <h5>What I Offer</h5>
    //   <h2>Services</h2>

    //   <div className="container services__container">
    //     <article className="service">
    //       <div className="service__head">
    //         <h3>UI/UX Design</h3>
    //       </div>

    //       <ul className='service__list'>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
          
    //       </ul>
    //     </article>
    //     {/* End of UI/UX */}

    //    <article className="service">
    //       <div className="service__head">
    //         <h3>Web Development</h3>
    //       </div>

    //       <ul className='service__list'>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
          
    //       </ul>
    //     </article>
    //     {/* End of Web Development */}

    //     <article className="service">
    //       <div className="service__head">
    //         <h3>Content Creation</h3>
    //       </div>

    //       <ul className='service__list'>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
    //         <li>
    //           <BiCheck className='service__list-icon' />
    //           <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
    //         </li>
          
    //       </ul>
    //     </article>
    //     {/* End of Content Creation */}
    //   </div>
    // </section>

    <section id='tech'>
       <h5>Tools</h5>
     <div className='container'>
    <div className="about__cards">
      <article className="about__card">
       <FaAward className="about__icon" />
       <h5>Git</h5>
      </article>

      <article className="about__card">
       <FiUsers className="about__icon" />
       <h5>Command Line</h5>
      </article>

      <article className="about__card">
       <VscFolderLibrary className="about__icon" />
       <h5>VS Code</h5>
      </article>
     </div>
     </div>
</section>

  )
}

export default Services