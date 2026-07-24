import useTypingEffect from '../../hooks/useTypingEffect'
import { contactInfo } from '../../data/contactInfo'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  const typedText = useTypingEffect(['Frontend Developer', 'Aspiring Data Analyst'], 90, 50, 1600)

  return (
    <section id="home" className="hero">
      <div className="hero__content hero-enter">
        <p className="hero__greeting">Hi, I'm</p>

        <h1 className="hero__name gradient-text">Leon Antonio Puerto</h1>

        <h2 className="hero__title">
          {typedText}
          <span className="hero__cursor">|</span>
        </h2>

        <p className="hero__description">
          BSIT student focused on data analytics and frontend development.
          Building real things, learning every step of the way.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work <FiArrowDown />
          </a>
          <a href={contactInfo.resumeUrl} download className="btn btn--outline">
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
