import { aboutParagraphs, currentlyLearning } from '../../data/aboutData'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about__grid">
          <div className="about__story glass-card">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about__learning glass-card">
            <h3 className="about__learning-title">📚 Currently Learning</h3>
            <ul className="about__learning-list">
              {currentlyLearning.map((skill) => (
                <li key={skill} className="about__learning-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About