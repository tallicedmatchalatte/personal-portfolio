import useTypingEffect from '../../hooks/useTypingEffect'
import { contactInfo } from '../../data/contactInfo'
import { aboutSummary } from '../../data/aboutData'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  const typedText = useTypingEffect(['UI/UX Designer', 'Frontend Developer'], 90, 50, 1600)

  return (
    <section id="home" className="hero">
      <div className="hero__workspace">
        <div className="hero__toolbar">
          <div className="hero__file-mark" aria-hidden="true">F</div>
          <span className="hero__file-name">
            Leon Puerto <span>/</span> Portfolio.fig
          </span>
          <span className="hero__toolbar-status">
            <i /> All changes saved
          </span>
          <span className="hero__toolbar-mode">Design</span>
        </div>

        <div className="hero__canvas">
          <div className="hero__ruler hero__ruler--top" aria-hidden="true">
            {[0, 100, 200, 300, 400, 500].map((mark) => <span key={mark}>{mark}</span>)}
          </div>

          <div className="hero__tool-rail" aria-hidden="true">
            <span className="hero__tool hero__tool--active">↖</span>
            <span className="hero__tool">▧</span>
            <span className="hero__tool">T</span>
            <span className="hero__tool">◇</span>
            <span className="hero__tool">⌘</span>
          </div>

          <div className="hero__artboard">
            <div className="hero__artboard-label">
              <span>FRAME 01</span>
              <span>1440 × 900</span>
            </div>

            <div className="hero__content hero-enter">
              <p className="hero__greeting">Hi, I'm <span>✳</span></p>
              <h1 className="hero__name">
                Leon Antonio <em>Puerto.</em>
              </h1>
              <h2 className="hero__title">
                {typedText}
                <span className="hero__cursor">_</span>
              </h2>
              <p className="hero__description">
                BSIT student focused on UI/UX design and frontend development.
                I enjoy turning ideas into thoughtful interfaces and bringing them to life on the web.
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

            <div className="hero__portrait">
              <img src={aboutSummary.photo} alt="Leon Antonio Puerto" />
              <span className="hero__selection" aria-hidden="true">
                <i /><i /><i /><i />
              </span>
              <span className="hero__portrait-note">PROFILE / 2026</span>
            </div>
          </div>

          <aside className="hero__inspector">
            <p className="hero__inspector-title">Design inspector</p>
            <div className="hero__inspector-preview"><span /></div>
            <p className="hero__inspector-label">COLOR STYLES</p>
            <div className="hero__swatches" aria-hidden="true">
              <i /><i /><i /><i />
            </div>
            <p className="hero__inspector-label">CURRENT FRAME</p>
            <p className="hero__inspector-value">Portfolio / Home</p>
            <p className="hero__inspector-value hero__inspector-value--muted">
              Desktop · 1440 px
            </p>
          </aside>
        </div>

        <div className="hero__statusbar">
          <span><i /> 100%</span>
          <span>Pages <b>01</b></span>
          <span>Made with intention — not templates.</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
