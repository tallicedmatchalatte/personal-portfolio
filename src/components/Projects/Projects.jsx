import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../../data/projects'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import {
  FaBoxes,
  FaCalendarAlt,
  FaChartLine,
  FaCoffee,
  FaHeart,
  FaLock,
  FaReceipt,
  FaSearch,
  FaShoppingCart,
  FaThermometerHalf,
  FaTools,
  FaTshirt,
  FaWallet,
} from 'react-icons/fa'
import './Projects.css'

const featureIcons = {
  coffee: <FaCoffee aria-hidden="true" />,
  customization: (
    <span className="proj-feature__icon-pair" aria-hidden="true">
      <FaTools />
      <FaThermometerHalf />
    </span>
  ),
  receipt: <FaReceipt aria-hidden="true" />,
  lock: <FaLock aria-hidden="true" />,
  inventory: <FaBoxes aria-hidden="true" />,
  finance: <FaWallet aria-hidden="true" />,
  event: <FaCalendarAlt aria-hidden="true" />,
  analytics: <FaChartLine aria-hidden="true" />,
  clothing: <FaTshirt aria-hidden="true" />,
  shopping: (
    <span className="proj-feature__icon-pair" aria-hidden="true">
      <FaShoppingCart />
      <FaHeart />
    </span>
  ),
  search: <FaSearch aria-hidden="true" />,
}

function MockupDisplay({ mockups, accentBg, title, mockupType }) {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const previewRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const preview = previewRef.current
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      preview?.focus()
    }
  }, [isOpen])

  if (!mockups || mockups.length === 0) {
    return (
      <div className="proj-mockup proj-mockup--empty" style={{ background: accentBg }}>
        <span className="proj-mockup__coming">Screenshots coming soon</span>
      </div>
    )
  }

  const isBrowser = mockupType === 'browser'

  return (
    <div className={`proj-mockup ${isBrowser ? 'proj-mockup--browser' : 'proj-mockup--phone'}`}>
      <div className="proj-mockup__frame">
        <div className="proj-mockup__framebar">
          <span>{String(active + 1).padStart(2, '0')} / {String(mockups.length).padStart(2, '0')}</span>
          <span>SCREEN / {title}</span>
        </div>
        <div className="proj-mockup__image">
          <button
            ref={previewRef}
            className="proj-mockup__open"
            onClick={() => setIsOpen(true)}
            aria-label={`Open ${title} screen ${active + 1} full size`}
          >
            <img
              key={active}
              src={mockups[active]}
              alt={`${title} screen ${active + 1}`}
              className="proj-mockup__screen"
            />
            <span className="proj-mockup__zoom-hint">Open image ↗</span>
          </button>
        </div>
      </div>

      {mockups.length > 1 && (
        <div className="proj-mockup__strip">
          {mockups.map((src, i) => (
            <button
              key={i}
              className={`proj-mockup__thumb ${active === i ? 'proj-mockup__thumb--active' : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-label={`View screen ${i + 1}`}
            >
              <img src={src} alt={`Screen ${i + 1}`} />
            </button>
          ))}
        </div>
      )}

      {isOpen && createPortal(
        <div className="proj-lightbox" onClick={() => setIsOpen(false)}>
          <div
            className="proj-lightbox__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="proj-lightbox__toolbar">
              <span>{title} / SCREEN {String(active + 1).padStart(2, '0')}</span>
              <button
                className="proj-lightbox__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close image preview"
                autoFocus
              >
                <FiX />
              </button>
            </div>
            <img
              src={mockups[active]}
              alt={`${title} screen ${active + 1} full size`}
              className="proj-lightbox__image"
            />
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}

function ProjectBlock({ project, index }) {
  return (
    <RevealOnScroll delay={`${index * 0.1}s`} className="projects__scroll-reveal">
      <div className="proj-block" style={{ '--proj-accent': project.accent, '--proj-accent-bg': project.accentBg }}>
        <div className="proj-block__inner">

          {/* ── Left: all the text content ── */}
          <div className="proj-block__left">

            {/* Logo + title row — mirrors the reference */}
            <div className="proj-block__identity">
              {project.logo ? (
                <img src={project.logo} alt="" className="proj-block__logo" />
              ) : (
                <span className="proj-block__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
                    {featureIcons[f.icon] || f.icon}
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
              mockupType={project.mockupType}
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
        <RevealOnScroll className="projects__scroll-reveal">
          <div className="projects__headingbar">
            <h2 className="projects__heading">
              Selected <span className="highlight">Work</span>
            </h2>
            <span className="projects__count">
              {String(projects.length).padStart(2, '0')} CASE STUDIES
            </span>
          </div>
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
