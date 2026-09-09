import './Experience.css'
import { experience } from '../../data/portfolio'
import { BriefcaseIcon } from '../Icons'

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Career</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Two years of building and shipping production software across three
            companies — frontend interfaces, backend services, and everything
            between.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="timeline-item reveal">
              <span className={`timeline-dot${job.current ? ' current' : ''}`}>
                <BriefcaseIcon width={14} height={14} />
              </span>

              <div className="card job-card">
                <header className="job-head">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <span className={`job-period${job.current ? ' current' : ''}`}>
                    {job.period}
                  </span>
                </header>

                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {job.shipped?.length > 0 && (
                  <p className="job-shipped">
                    <span>Worked on:</span> {job.shipped.join(' · ')}
                  </p>
                )}

                <div className="job-stack">
                  {job.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
