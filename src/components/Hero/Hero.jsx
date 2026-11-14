import useTypingEffect from '../../hooks/useTypingEffect'
import { contactInfo } from '../../data/contactInfo'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import './Hero.css'

/* Floating decorative shapes — Figma canvas feel */
function CanvasShapes() {
  return (
    <div className="canvas-shapes" aria-hidden="true">
      {/* Yellow rectangle — top left, like a selected frame */}
      <div className="cs cs--rect cs--yellow cs--tl" />
      {/* Blue squiggle path — top right */}
      <svg className="cs cs--squiggle cs--blue cs--tr" viewBox="0 0 120 40" fill="none">
        <path d="M4 20 C20 4, 36 36, 52 20 S84 4, 100 20 S116 36, 120 20"
          stroke="#5C8FFF" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <circle cx="4"   cy="20" r="3.5" fill="#5C8FFF"/>
        <circle cx="52"  cy="20" r="3.5" fill="#5C8FFF"/>
        <circle cx="100" cy="20" r="3.5" fill="#5C8FFF"/>
      </svg>
      {/* Coral triangle cursor — right */}
      <svg className="cs cs--cursor cs--coral cs--mr" viewBox="0 0 20 24" fill="none">
        <path d="M2 2 L18 10 L10 13 L7 22 Z" fill="#FF6B6B"/>
      </svg>
      {/* Purple small rect — bottom left */}
      <div className="cs cs--rect cs--small cs--purple cs--bl" />
      {/* Blue small rect — bottom right */}
      <div className="cs cs--rect cs--small cs--blue-rect cs--br" />
      {/* Coral arc — bottom right corner */}
      <svg className="cs cs--arc cs--cr" viewBox="0 0 80 50" fill="none">
        <path d="M4 46 Q40 4 76 46" stroke="#FF6B6B" strokeWidth="4"
          strokeLinecap="round" fill="none"/>
        <circle cx="4"  cy="46" r="3.5" fill="#FF6B6B"/>
        <circle cx="76" cy="46" r="3.5" fill="#FF6B6B"/>
      </svg>
      {/* Purple cursor — left mid */}
      <svg className="cs cs--cursor cs--purple cs--ml" viewBox="0 0 20 24" fill="none">
        <path d="M2 2 L18 10 L10 13 L7 22 Z" fill="#9747FF"/>
      </svg>
    </div>
  )
}

function Hero() {
  const typedText = useTypingEffect(['Frontend Developer', 'UI/UX Designer', 'Data Analyst'], 90, 50, 1600)

  return (
    <section id="home" className="hero">
      <CanvasShapes />

      <div className="hero__content hero-enter">
        <p className="hero__greeting">Hi, I'm</p>

        <h1 className="hero__name">
          Leon Antonio <span className="highlight">Puerto</span>
        </h1>

        <h2 className="hero__title">
          {typedText}
          <span className="hero__cursor">|</span>
        </h2>

        <p className="hero__description">
          BSIT student focused on UI/UX design and frontend development.
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
