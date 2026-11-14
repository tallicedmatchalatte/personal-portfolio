import { aboutSummary } from '../../data/aboutData'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import './About.css'

const chips = [
  { label: 'Degree',       value: 'BSIT' },
  { label: 'School',       value: 'LCUP' },
  { label: 'Year',         value: '2nd Year' },
  { label: 'Focus',        value: 'UI/UX + Data' },
  { label: 'Status',       value: 'Open to Internship' },
]

function About() {
  return (
    <section id="about" className="about-mini">
      <div className="about-mini__container">
        <RevealOnScroll>
          <h2 className="about-mini__heading">
            About <span className="highlight">Me</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay="0.1s">
          <div className="about-mini__body">

            {/* Photo */}
            <div className="about-mini__photo-frame">
              <div className="about-mini__photo-bg" />
              <img
                src={aboutSummary.photo}
                alt="Leon Antonio Puerto"
                className="about-mini__photo"
              />
            </div>

            {/* Content */}
            <div className="about-mini__content">
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
                  <p className="about-mini__item-title">{aboutSummary.education.degree}</p>
                  <p className="about-mini__item-meta">
                    {aboutSummary.education.school} · {aboutSummary.education.duration}
                  </p>
                </div>
                <div className="about-mini__item">
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
