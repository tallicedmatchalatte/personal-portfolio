import { aboutSummary } from '../../data/aboutData'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import './About.css'

const chips = [
  { label: 'Degree',       value: 'BSIT' },
  { label: 'School',       value: 'LCUP' },
  { label: 'Year',         value: '4th Year' },
  { label: 'Focus',        value: 'UI/UX + Frontend' },
  { label: 'Status',       value: 'Open to Internship' },
]

function About() {
  return (
    <section id="about" className="about-mini">
      <div className="about-mini__container">
        <RevealOnScroll>
          <div className="about-mini__heading-wrap">
            <p className="about-mini__section-label">01 / The person behind the projects</p>
            <h2 className="about-mini__heading">
              About <span className="highlight">Me</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay="0.1s" className="about-mini__reveal">
          <div className="about-mini__body">

            {/* Photo */}
            <div className="about-mini__photo-frame">
              <div className="about-mini__photo-bg" />
              <img
                src={aboutSummary.photo}
                alt="Leon Antonio Puerto"
                className="about-mini__photo"
              />
              <div className="about-mini__photo-caption">
                <span className="about-mini__photo-name">Leon Antonio Puerto</span>
                <span className="about-mini__photo-role">BSIT / DESIGN + DEVELOPMENT</span>
              </div>
            </div>

            {/* Content */}
            <div className="about-mini__content">
              <p className="about-mini__eyebrow">UI/UX <span>×</span> FRONTEND <span>×</span> DESIGN</p>
              <h3 className="about-mini__intro">
                I care about the details that make digital experiences feel clear and intuitive.
              </h3>
              <p className="about-mini__bio">{aboutSummary.bio}</p>

              {/* Info chips — replaces redundant tech pills */}
              <div className="about-mini__chips">
                {chips.map((c) => (
                  <div key={c.label} className="about-chip">
                    <span className="about-chip__label">{c.label}</span>
                    <span className="about-chip__value">{c.value}</span>
                  </div>
                ))}
              </div>

              <div className="about-mini__info">
                <div className="about-mini__item">
                  <p className="about-mini__item-label">EDUCATION</p>
                  <p className="about-mini__item-title">{aboutSummary.education.degree}</p>
                  <p className="about-mini__item-meta">
                    {aboutSummary.education.school} · {aboutSummary.education.duration}
                  </p>
                </div>
                <div className="about-mini__item">
                  <p className="about-mini__item-label">LEADERSHIP</p>
                  <p className="about-mini__item-title">{aboutSummary.organization.role}</p>
                  <p className="about-mini__item-meta">
                    {aboutSummary.organization.org} · {aboutSummary.organization.duration}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default About
