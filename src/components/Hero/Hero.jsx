import './Hero.css'
import { profile } from '../../data/portfolio'
import {
  ArrowIcon,
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  LocationIcon,
} from '../Icons'

const highlights = ['MERN Stack', 'REST APIs', 'Role-Based Systems', 'Admin Panels']

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="dot" />
            Available for opportunities
          </span>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Huzaifa Nadeem</span>
          </h1>

          <h2 className="hero-role">
            {profile.title} <span className="sep">/</span> {profile.tagline}
          </h2>

          <p className="hero-text">
            I build full-stack web applications end to end — responsive React
            interfaces, RESTful APIs, scalable MongoDB schemas, and the complex
            role-based business logic that ties them together. Currently shipping
            production features at GlowingSoft Technologies.
          </p>

          <ul className="hero-highlights">
            {highlights.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
          </div>

          <div className="hero-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-link"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-link"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="icon-link"
            >
              <MailIcon />
            </a>
            <span className="hero-location">
              <LocationIcon width={15} height={15} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card card">
            <div className="code-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-file">developer.js</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="c-key">const</span>{' '}
                <span className="c-var">huzaifa</span> = {'{'}
                {'\n  '}
                <span className="c-prop">role</span>:{' '}
                <span className="c-str">&apos;Associate Software Engineer&apos;</span>,
                {'\n  '}
                <span className="c-prop">stack</span>: [
                <span className="c-str">&apos;Mongo&apos;</span>,{' '}
                <span className="c-str">&apos;Express&apos;</span>,{' '}
                <span className="c-str">&apos;React&apos;</span>,{' '}
                <span className="c-str">&apos;Node&apos;</span>],
                {'\n  '}
                <span className="c-prop">focus</span>: [
                {'\n    '}
                <span className="c-str">&apos;RESTful API design&apos;</span>,
                {'\n    '}
                <span className="c-str">&apos;Role-based access control&apos;</span>,
                {'\n    '}
                <span className="c-str">&apos;Scalable DB schemas&apos;</span>,
                {'\n  '}],
                {'\n  '}
                <span className="c-prop">shipping</span>:{' '}
                <span className="c-key">true</span>,
                {'\n'}
                {'}'}
              </code>
            </pre>
          </div>

          <div className="hero-stats">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <strong className="gradient-text">{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <ArrowDownIcon />
      </a>
    </section>
  )
}

export default Hero
