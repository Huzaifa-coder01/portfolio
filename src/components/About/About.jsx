import './About.css'
import { profile, languages } from '../../data/portfolio'
import { CheckIcon } from '../Icons'

const strengths = [
  {
    title: 'Full-Stack Delivery',
    text: 'From React interfaces and admin panels through to Express APIs and MongoDB schemas — I own features end to end.',
  },
  {
    title: 'Complex Business Logic',
    text: 'Multi-role platforms, bidding and booking flows, approval chains, and role-based access control across many user types.',
  },
  {
    title: 'API Design & Integration',
    text: 'Designing clean RESTful endpoints and integrating them into responsive, reusable frontend components.',
  },
  {
    title: 'Production Mindset',
    text: 'Shipping real features across concurrent client projects, from requirements through to production deployment.',
  },
]

const facts = [
  { label: 'Name', value: profile.name },
  { label: 'Role', value: profile.title },
  { label: 'Location', value: profile.location },
  { label: 'Experience', value: '2+ Years' },
  { label: 'Degree', value: 'BS Software Engineering' },
  { label: 'Availability', value: 'Open to opportunities' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            Turning requirements into <span className="gradient-text">working software</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main reveal">
            <p className="about-lead">{profile.summary}</p>
            <p className="about-body">{profile.summaryExtra}</p>

            <div className="strengths">
              {strengths.map((item) => (
                <div key={item.title} className="strength">
                  <span className="strength-icon">
                    <CheckIcon width={15} height={15} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="about-side reveal">
            <div className="card facts-card">
              <h3 className="facts-title">Quick Facts</h3>
              <ul className="facts">
                {facts.map((fact) => (
                  <li key={fact.label}>
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </li>
                ))}
              </ul>

              <h3 className="facts-title lang-title">Languages</h3>
              <ul className="facts">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <span className="fact-label">{lang.name}</span>
                    <span className="fact-value">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
