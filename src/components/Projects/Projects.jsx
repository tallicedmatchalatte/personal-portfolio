import { useRef } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Projects.css'

function Projects() {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.firstChild ? track.firstChild.offsetWidth + 24 : 320
    track.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <RevealOnScroll>
          <h2 className="projects__heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects__subheading">A selection of things I've built and analyzed</p>
        </RevealOnScroll>

        {projects.length > 0 ? (
          <RevealOnScroll delay="0.1s">
            <div className="projects__carousel">
              <button className="carousel-arrow carousel-arrow--left" onClick={() => scroll('prev')} aria-label="Previous project">
                <FiChevronLeft />
              </button>

              <div className="projects__track" ref={trackRef}>
                {projects.map((project) => (
                  <div key={project.id} className="projects__slide">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              <button className="carousel-arrow carousel-arrow--right" onClick={() => scroll('next')} aria-label="Next project">
                <FiChevronRight />
              </button>
            </div>
          </RevealOnScroll>
        ) : (
          <RevealOnScroll delay="0.1s">
            <div className="projects__empty-state">
              <p className="projects__empty-title">Projects coming soon 🚀</p>
              <p className="projects__empty-text">
                I'm currently building things worth showing. Check back soon!
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default Projects
