import { navLinks } from '../../data/navLinks'
import { contactInfo } from '../../data/contactInfo'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#home" className="footer__logo gradient-text">Leon Antonio Puerto</a>

        <ul className="footer__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${contactInfo.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p className="footer__copyright">© {year} Leon Antonio Puerto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer