import React from 'react'
import './testimonials.css'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
 {
  avatar: AVTR3,
  name: 'Certificate for Completion of Advanced Cpp Training',
  review: 'Spoken Tutorial Project, IIT Bombay • 2022'
 },
 {
  avatar: AVTR4,
  name: 'Certificate for Completion of Advanced C Training',
  review: 'Spoken Tutorial Project, IIT Bombay • 2022'
 },
 {
  avatar: AVTR3,
  name: 'Certificate for Completion of Advanced  Python 3.4.3 Training',
  review: 'Spoken Tutorial Project, IIT Bombay • 2022'
 },
 {
  avatar: AVTR4,
  name: 'Webverse',
  review: 'Vellore Institute of Technology • 2023 Participation Certificate of a Hackathon in Web development'
 }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My achievements </h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index) => {
          return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })
       }

      </Swiper>
    </section>
  )
}

export default Testimonials