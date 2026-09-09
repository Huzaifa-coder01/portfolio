import { useMemo, useState } from 'react'
import './Projects.css'
import { projects } from '../../data/portfolio'
import { ArrowIcon, GithubIcon } from '../Icons'

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Websites', 'Personal']

function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  )

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production platforms, client websites, and personal builds — a mix of
            backend architecture, admin panels, and frontend work.
          </p>
        </div>

        <div className="filters reveal" role="tablist" aria-label="Project filters">
          {FILTERS.map((item) => {
            const count =
              item === 'All'
                ? projects.length
                : projects.filter((p) => p.category === item).length
            return (
              <button
                key={item}
                role="tab"
                aria-selected={filter === item}
                className={`filter${filter === item ? ' active' : ''}`}
                onClick={() => setFilter(item)}
              >
                {item}
                <span className="filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <article
              key={project.name}
              className={`card project-card reveal${
                project.featured ? ' featured' : ''
              }`}
            >
              <div className="project-top">
                <div className="project-titles">
                  <h3 className="project-name">
                    {project.name}
                    {project.featured && (
                      <span className="featured-tag">Featured</span>
                    )}
                  </h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <GithubIcon width={16} height={16} />
                  </a>
                )}
              </div>

              <div className="project-meta">
                <span className="role-tag">{project.role}</span>
                <span className="org-tag">{project.org}</span>
              </div>

              <p className="project-desc">{project.description}</p>

              {project.points?.length > 0 && (
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <p>Want to see the code behind the personal builds?</p>
          <a
            href="https://github.com/Huzaifa-coder01"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <GithubIcon width={17} height={17} /> Visit My GitHub <ArrowIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
