import { certifications } from '../../data/certifications'
import RevealOnScroll from '../common/RevealOnScroll/RevealOnScroll'
import { FiExternalLink } from 'react-icons/fi'
import './Certifications.css'

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications__container">
        <RevealOnScroll>
          <span className="section-label">// certifications</span>
          <h2 className="certifications__heading">
            My <span className="highlight">Certifications</span>
          </h2>
          <p className="certifications__subheading">Credentials that back up what I know</p>
        </RevealOnScroll>

        {certifications.length > 0 ? (
          <div className="certifications__grid">
            {certifications.map((cert, index) => (
              <RevealOnScroll key={cert.id} delay={`${index * 0.1}s`}>
                <div className="cert-card glass-card">
                  <div className="cert-card__image-wrap">
                    <img src={cert.image} alt={cert.name} className="cert-card__image" loading="lazy" />
                  </div>
                  <div className="cert-card__body">
                    <h3 className="cert-card__name">{cert.name}</h3>
                    <p className="cert-card__meta">{cert.organization} · {cert.date}</p>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-card__verify">
                        Verify Credential <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll delay="0.1s">
            <div className="projects__empty-state">
              <p className="projects__empty-title">Certifications coming soon 📜</p>
              <p className="projects__empty-text">
                Credentials will show up here as I earn them.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}

export default Certifications
