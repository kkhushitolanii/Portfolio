import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
       <div className="about__me">
           <div className="about__me-image">
           <img src={ME} alt="About Image" />

          
           </div>
       </div>

       <div className="about__content">
         <div className="about__cards">
          <article className="about__card">
           <FaAward className="about__icon" />
           <h5>Experience</h5>
           <small>3 Ongoing Internships</small>
          </article>

          <article className="about__card">
           <FiUsers className="about__icon" />
           <h5>Certifications</h5>
           <small>5+ Certificates</small>
          </article>

          <article className="about__card">
           <VscFolderLibrary className="about__icon" />
           <h5>Projects</h5>
           <small>15+ Completed</small>
          </article>
         </div>
          
         <p>
         Hi! I'm Khushi Tolani, a passionate software and web developer with a strong drive for creating elegant, efficient, and user-centric digital experiences. With a foundation in computer science and aiming to get years of hands-on experience, I've honed my skills to deliver top-notch solutions that not only meet but exceed client expectations. I'm always eager to explore new frameworks, languages, and methodologies to ensure that I can leverage the latest tools to create the best web applications with intuitive functionalities.
        </p>

        <a href="#contact" className='btn btn-primary'>Get In Touch</a>

       </div>
      </div>
    </section>

  )
}

export default About