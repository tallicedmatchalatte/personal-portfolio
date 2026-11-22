import { useEffect, useState } from 'react'
import { contactInfo } from '../../data/contactInfo'
import { FiCheck, FiCopy, FiDownload, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  useEffect(() => {
    if (!copyStatus) return undefined

    const timeoutId = window.setTimeout(() => setCopyStatus(''), 2400)
    return () => window.clearTimeout(timeoutId)
  }, [copyStatus])

  const handleCopyEmail = async () => {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('unavailable')
      return
    }

    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__heading">
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact__subheading">
          I'm currently looking for internship opportunities — feel free to reach out.
        </p>

        <div className="contact__grid">
          <div className="contact-card contact-card--email glass-card">
            <FiMail className="contact-card__icon" />
            <span className="contact-card__label">Email</span>
            <div className="contact-card__email-row">
              <a href={`mailto:${contactInfo.email}`} className="contact-card__value">{contactInfo.email}</a>
              <button
                type="button"
                className="contact-card__copy"
                onClick={handleCopyEmail}
                aria-label={copyStatus === 'copied' ? 'Email copied' : 'Copy email address'}
              >
                {copyStatus === 'copied' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span>{copyStatus === 'copied' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            {copyStatus && (
              <span className="contact-card__copy-status" role="status" aria-live="polite">
                {copyStatus === 'copied' && 'Email copied to clipboard'}
                {(copyStatus === 'unavailable' || copyStatus === 'failed') && 'Could not copy. Select the email above instead.'}
              </span>
            )}
          </div>

          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
            <FiLinkedin className="contact-card__icon" />
            <span className="contact-card__label">LinkedIn</span>
            <span className="contact-card__value">Connect with me</span>
          </a>

          <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
            <FaFacebookF className="contact-card__icon" />
            <span className="contact-card__label">Facebook</span>
            <span className="contact-card__value">Add me as a friend</span>
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