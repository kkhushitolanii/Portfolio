import React from "react";
import {Typewriter} from 'react-simple-typewriter'

function Type() {
    // const {text} = useTypewriter({
    // words: ['Programmer','Full Stack Web Developer','Data Science Enthusiast','Software Developer'],
    // loop: {},
    // typeSpeed:120,
    // deleteSpeed:80,
    // });
	return (
	  <h1>
        I'm a {' '}
        <span style={{color:'#4dedff', fontWeight:'bold'}}>
        <Typewriter
       words={['Programmer','Web Developer','Data Science Enthusiast','Software Developer']}
    loop={100}
    cursor
    typeSpeed={120}
    deleteSpeed={80}
        />
        </span>
       
      </h1>
	);
}

export default Type;