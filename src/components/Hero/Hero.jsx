import useTypingEffect from '../../hooks/useTypingEffect'
import { socialLinks } from '../../data/socialLinks'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import './Hero.css'

const iconMap = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
}

function Hero() {
  const typedText = useTypingEffect(['Aspiring Data Analyst', 'Frontend Developer'], 90, 50, 1600)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__blob hero__blob--one"></div>
        <div className="hero__blob hero__blob--two"></div>
      </div>

      <div className="hero__content">
        <p className="hero__greeting">Hi, my name is</p>

        <h1 className="hero__name gradient-text">Leon Antonio</h1>

        <h2 className="hero__title">
          {typedText}
          <span className="hero__cursor">|</span>
        </h2>

        <p className="hero__description">
          IT student passionate about turning raw data into meaningful insights and building
          clean, modern web experiences. Currently exploring the intersection of data analytics
          and frontend development.
        </p>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => scrollToSection('projects')}>
            View Projects <FiArrowRight />
          </button>
          <button className="btn btn--secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>

        <div className="hero__socials">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hero__social-icon">
              {iconMap[link.id]}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero