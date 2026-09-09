import './Skills.css'
import { skills } from '../../data/portfolio'
import { CodeIcon, ServerIcon, DatabaseIcon, ToolsIcon } from '../Icons'

const icons = {
  Frontend: CodeIcon,
  Backend: ServerIcon,
  Database: DatabaseIcon,
  'Tools & Practices': ToolsIcon,
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            The technologies I reach for when building and shipping full-stack
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = icons[group.group] || CodeIcon
            return (
              <div key={group.group} className="card skill-card reveal">
                <div className="skill-head">
                  <span className="skill-icon">
                    <Icon width={19} height={19} />
                  </span>
                  <h3>{group.group}</h3>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
