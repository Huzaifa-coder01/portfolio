import { useState } from 'react'
import './Contact.css'
import { profile } from '../../data/portfolio'
import {
  MailIcon,
  PhoneIcon,
  LocationIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
} from '../Icons'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // No backend on a static deploy — hand the message to the visitor's mail client
  // pre-filled, so nothing is silently dropped.
  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setStatus(
      'Your email client should now be open with the message ready to send.'
    )
  }

  const details = [
    {
      icon: MailIcon,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
    },
    { icon: LocationIcon, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-stack roles, freelance work, and interesting MERN
            projects. Drop me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <ul className="contact-details">
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="detail-icon">
                      <Icon width={17} height={17} />
                    </span>
                    <span className="detail-text">
                      <span className="detail-label">{label}</span>
                      <span className="detail-value">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label} className="card detail-item">
                    {href ? <a href={href}>{content}</a> : <div>{content}</div>}
                  </li>
                )
              })}
            </ul>

            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <GithubIcon width={17} height={17} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <LinkedinIcon width={17} height={17} /> LinkedIn
              </a>
            </div>
          </div>

          <form className="card contact-form reveal" onSubmit={handleSubmit}>
            <div className="field-row">
              <label className="field">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </label>
              <label className="field">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                />
              </label>
            </div>

            <label className="field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role..."
                required
              />
            </label>

            <button type="submit" className="btn btn-primary form-submit">
              Send Message <SendIcon width={16} height={16} />
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
