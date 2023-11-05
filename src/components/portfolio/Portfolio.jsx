import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/desi.jpg'
import IMG2 from '../../assets/simon.jpg'
import IMG3 from '../../assets/blg.jpg'
import IMG4 from '../../assets/dk.jpg'
import IMG5 from '../../assets/nk.jpg'
import IMG6 from '../../assets/weather.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Ecommerce Website (DesiThreads) ',
    github:'https://github.com/kkhushitolanii/Ecommerce-Website',
    demo:'https://kkhushitolanii.github.io/Ecommerce-Website/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Drum-kit Game',
    github:'https://github.com/kkhushitolanii/Drum_kit',
    demo:'https://kkhushitolanii.github.io/Drum_kit/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Blogging Journal Site',
    github:'https://github.com/kkhushitolanii/Blog_site',
    demo:'https://github.com/kkhushitolanii/Blog_site'
  },
  {
    id:2,
    image: IMG2,
    title: 'Simon Game',
    github:'https://github.com/kkhushitolanii/Simon_game',
    demo:'https://kkhushitolanii.github.io/Simon_game/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Note-Keeper app',
    github:'https://github.com/kkhushitolanii/Note-Keeper',
    demo:'https://github.com/kkhushitolanii/Note-Keeper'
  },
  {
    id:6,
    image: IMG6,
    title: 'Weather Project',
    github:'https://github.com/kkhushitolanii/Weather_Project',
    demo:'https://github.com/kkhushitolanii/Weather_Project'
  }

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
          <article key={id} className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={image} alt={title} />
           </div>
           <h3>{title}</h3>
          <div className='portfolio__item-cta'>
           <a href={github} className='btn' target='_blank'>GitHub</a>
           <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
   
      </div>
    </section>
  )
}

export default Portfolio