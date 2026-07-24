import { experience } from '../../data/experience'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <RevealOnScroll>
          <h2 className="experience__heading">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="experience__subheading">Education, work, and everything in between</p>
        </RevealOnScroll>

        {experience.length > 0 ? (
          <div className="experience__grid">
            {experience.map((item, index) => (
              <RevealOnScroll key={item.id} delay={`${index * 0.08}s`}>
                <div className="exp-card glass-card">
                  <span className="exp-card__type">{item.type}</span>
                  <h3 className="exp-card__title">{item.title}</h3>
                  <p className="exp-card__meta">{item.organization} · {item.duration}</p>
                  <p className="exp-card__desc">{item.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll delay="0.1s">
            <div className="projects__empty-state">
              <p className="projects__empty-title">Writing my story 📖</p>
              <p className="projects__empty-text">
                Education, internships, and experience will show up here soon.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default Experience
