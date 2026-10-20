import { useState } from 'react'
import { profile } from '../data'

function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          I'm open to research collaborations, graduate study opportunities, and software roles.
          Feel free to reach out.
        </p>

        <p className="contact-email">{profile.email}</p>

        <div className="contact-buttons">
          <button className="btn btn-primary" onClick={copyEmail}>
            {copied ? 'Copied ✓' : 'Copy email'}
          </button>
          <a
            className="btn btn-secondary"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
          >
            Send via Gmail
          </a>
        </div>

        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact