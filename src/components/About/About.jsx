import { aboutSummary } from '../../data/aboutData'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import './About.css'

function About() {
  return (
    <section id="about" className="about-mini">
      <div className="about-mini__container">
        <RevealOnScroll>
          <h2 className="about-mini__heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay="0.1s">
          <div className="about-mini__body">
            <div className="about-mini__photo-wrap">
              <img src={aboutSummary.photo} alt="Profile" className="about-mini__photo" />
            </div>

            <div className="about-mini__content">
              <p className="about-mini__bio">{aboutSummary.bio}</p>

              <div className="about-mini__pills pills-enter">
                {aboutSummary.skills.map((skill) => (
                  <span key={skill} className="about-mini__pill">{skill}</span>
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
