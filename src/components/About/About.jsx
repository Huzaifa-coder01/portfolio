import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Me</h2>
        <div className="shadow-box">
          <p>
            Hello! I’m Huzaifa Nadeem, a dedicated and enthusiastic web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With a background in [Your Background - e.g., design, computer science, etc.], I combine technical expertise with creative vision to bring ideas to life on the web.
          </p>
          <p>
            Over the years, I’ve honed my skills in [List Key Skills - e.g., front-end development, UI/UX design, React, etc.], and I’m constantly exploring new technologies and techniques to push the boundaries of what’s possible. I believe in the power of thoughtful design and seamless user experiences to solve real-world problems and connect with people in meaningful ways.
          </p>
          <p>
            When I’m not coding, you’ll find me [A Personal Touch - e.g., exploring the outdoors, working on creative side projects, or staying up-to-date with the latest in tech].
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
