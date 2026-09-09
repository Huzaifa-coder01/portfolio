import './Footer.css'
import { profile, navLinks } from '../../data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon } from '../Icons'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-mark">HN</span>
            <span className="logo-text">{profile.name}</span>
          </a>
          <p>{profile.title} · MERN Stack Developer</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <GithubIcon width={17} height={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <LinkedinIcon width={17} height={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="icon-link"
          >
            <MailIcon width={17} height={17} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React &amp; Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
