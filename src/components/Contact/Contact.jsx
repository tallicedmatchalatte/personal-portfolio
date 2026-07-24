import { contactInfo } from '../../data/contactInfo'
import { FiMail, FiLinkedin, FiPhone, FiDownload } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="contact__subheading">
          I'm currently looking for internship opportunities — feel free to reach out.
        </p>

        <div className="contact__grid">
          <a href={`mailto:${contactInfo.email}`} className="contact-card glass-card">
            <FiMail className="contact-card__icon" />
            <span className="contact-card__label">Email</span>
            <span className="contact-card__value">{contactInfo.email}</span>
          </a>

          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
            <FiLinkedin className="contact-card__icon" />
            <span className="contact-card__label">LinkedIn</span>
            <span className="contact-card__value">Connect with me</span>
          </a>

          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-card glass-card">
            <FiPhone className="contact-card__icon" />
            <span className="contact-card__label">Phone</span>
            <span className="contact-card__value">{contactInfo.phone}</span>
          </a>
        </div>

        <a href={contactInfo.resumeUrl} download className="btn btn--primary contact__resume-btn">
          <FiDownload /> Download Resume
        </a>
      </div>
    </section>
  )
}

export default Contact