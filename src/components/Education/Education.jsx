import './Education.css'
import { education } from '../../data/portfolio'
import { CapIcon } from '../Icons'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <article key={item.degree} className="card edu-card reveal">
              <span className="edu-icon">
                <CapIcon width={18} height={18} />
              </span>
              <div className="edu-body">
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <div className="edu-meta">
                  <span className="edu-period">{item.period}</span>
                  <span className={`edu-result${index === 0 ? ' highlight' : ''}`}>
                    {item.result}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
