import { useState } from 'react'
import useScrollDirection from '../../hooks/useScrollDirection'
import useActiveSection from '../../hooks/useActiveSection'
import { navLinks } from '../../data/navLinks'
import './Navbar.css'

function Navbar() {
  const { scrollDirection, isScrolled } = useScrollDirection()
  const activeSection = useActiveSection(navLinks.map((link) => link.id))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`navbar ${scrollDirection === 'down' ? 'navbar--hidden' : ''} ${
        isScrolled ? 'navbar--scrolled' : ''
      }`}
    >
      <nav className="navbar__container">
        <a href="#home" className="navbar__logo gradient-text">
          YourName
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={activeSection === link.id ? 'navbar__link--active' : ''} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar