import { useState } from 'react'
import { projects } from '../../data/projects'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import { FiArrowUpRight } from 'react-icons/fi'
import './Projects.css'

function MockupDisplay({ mockups, accentBg, title }) {
  const [active, setActive] = useState(0)

  if (!mockups || mockups.length === 0) {
    return (
      <div className="proj-mockup proj-mockup--empty" style={{ background: accentBg }}>
        <span className="proj-mockup__coming">Screenshots coming soon</span>
      </div>
    )
  }

  return (
    <div className="proj-mockup">
      {/* Floating phone mockup */}
      <div className="proj-mockup__phone">
        <img
          key={active}
          src={mockups[active]}
          alt={`${title} screen`}
          className="proj-mockup__screen"
        />
      </div>
      {/* Thumbnail strip */}
      {mockups.length > 1 && (
        <div className="proj-mockup__strip">
          {mockups.map((src, i) => (
            <button
              key={i}
              className={`proj-mockup__thumb ${active === i ? 'proj-mockup__thumb--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View screen ${i + 1}`}
            >
              <img src={src} alt={`Screen ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectBlock({ project, index }) {
  return (
    <RevealOnScroll delay={`${index * 0.1}s`}>
      <div className="proj-block" style={{ '--proj-accent': project.accent, '--proj-accent-bg': project.accentBg }}>
        <div className="proj-block__inner">

          {/* ── Left: all the text content ── */}
          <div className="proj-block__left">

            {/* Logo + title row — mirrors the reference */}
            <div className="proj-block__identity">
              {project.logo && (
                <img src={project.logo} alt={`${project.title} logo`} className="proj-block__logo" />
              )}
              <div>
                <h3 className="proj-block__title" style={{ color: project.accent }}>{project.title}</h3>
                <p className="proj-block__subtitle">{project.subtitle}</p>
              </div>
            </div>

            <p className="proj-block__desc">{project.description}</p>

            {/* Feature grid */}
            <div className="proj-block__features">
              {project.features.map((f, i) => (
                <div key={i} className="proj-feature">
                  <div className="proj-feature__icon-wrap" style={{ background: project.accentBg, color: project.accent }}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="proj-feature__title">{f.title}</p>
                    <p className="proj-feature__desc">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="proj-block__footer">
              <div className="proj-block__tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="proj-block__tag"
                    style={{ background: project.accentBg, color: project.accentLight }}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="proj-block__cta" style={{ background: project.accent }}>
                  View in Figma <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>

          {/* ── Right: floating mockup ── */}
          <div className="proj-block__right">
            <MockupDisplay
              mockups={project.mockups}
              accentBg={project.accentBg}
              title={project.title}
            />
          </div>

        </div>
      </div>
    </RevealOnScroll>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <RevealOnScroll>
          <span className="section-label">// projects</span>
          <h2 className="projects__heading">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="projects__subheading">A selection of things I've designed and built</p>
        </RevealOnScroll>

        {projects.length > 0 ? (
          <div className="projects__list">
            {projects.map((project, index) => (
              <ProjectBlock key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <RevealOnScroll delay="0.1s">
            <div className="projects__empty-state">
              <p className="projects__empty-title">Projects coming soon 🚀</p>
              <p className="projects__empty-text">I'm currently building things worth showing. Check back soon!</p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default Projects
