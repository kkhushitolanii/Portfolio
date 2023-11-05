import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
           <h3>Frontend Development</h3>
           <div className="experienc__content">

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             
             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
             </article>
           </div>
        </div>

{/* END OF FRONTEND DEVELOPMENT */}

        <div className="experience__backend">
           <h3>Backend Development</h3>
           <div className="experienc__content">

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>ExpressJs</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             
             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Mongoose</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
           </div>
        </div>

        {/* END OF BACKEND DEVELOPMENT */}

        <div className="experience__frontend">
           <h3>Other Skills</h3>
           <div className="experienc__content">

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Programming Languages</h4>
              <small className='text-light'>JavaScript , C/C++ , Java , Python </small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Database</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Machine Learning and Data Science</h4>
              <small className='text-light'>Intermediate</small>
              </div>
             </article>
             
             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Data Structures and Algorithms</h4>
              <small className='text-light'>Using CPP</small>
              </div>
             </article>

             <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Graphic Designing</h4>
              <small className='text-light'>Canva , Figma, UI/UX Designing</small>
              </div>
             </article>
           </div>
        </div>

      </div>
    </section>
  )
}

export default Experience