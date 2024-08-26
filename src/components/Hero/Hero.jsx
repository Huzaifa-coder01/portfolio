import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <div className="box">
          <p>
            I’m Huzaifa Nadeem, a passionate developer specializing in creating
            stunning web experiences that captivate and convert. I am good in crafting engaging and responsive web interfaces using HTML, CSS, and JavaScript. With expertise in frameworks like React and utilize Redux, Redux Toolkit and Next JS.
          </p>
        </div>
        <a href="#projects" className="btn">
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
