import { useState } from 'react'
import './ValuationModal.css'

interface ValuationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ValuationModal({ isOpen, onClose }: ValuationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacyAccepted: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Valuation"
      className="valuation-overlay"
      onClick={onClose}
    >
      <div className="valuation-modal" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" className="valuation-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.9 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.9a1 1 0 001.41-1.41L13.41 12l4.9-4.89a1 1 0 000-1.4z"/>
          </svg>
        </button>

        <div className="valuation-header">
          <h2>Request A Valuation</h2>
          <p>If you wish to obtain a valuation of your property, you can contact us directly or complete the form below and we will get in touch.</p>
        </div>

        <div className="contact-grid">
          <a href="tel:02038700000" className="contact-card">
            <div className="contact-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4 .95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
              </svg>
            </div>
            <div>
              <h3>Phone</h3>
              <p>0203 870 00 00</p>
            </div>
          </a>

          <a href="mailto:hello@integra-estates.com" className="contact-card">
            <div className="contact-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
                <rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect>
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"></path>
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>hello@integra-estates.com</p>
            </div>
          </a>
        </div>

        <form className="valuation-form" onSubmit={handleSubmit}>
          <div className="form-row two">
            <div className="input-group">
              <label htmlFor="firstName">Your First Name</label>
              <input
                id="firstName"
                name="firstName"
                className="ve-input"
                placeholder="First Name"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Your Last Name</label>
              <input
                id="lastName"
                name="lastName"
                className="ve-input"
                placeholder="Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row two">
            <div className="input-group">
              <label htmlFor="email">Your Email Address</label>
              <input
                id="email"
                name="email"
                className="ve-input"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Your Phone Number</label>
              <input
                id="phone"
                name="phone"
                className="ve-input"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="ve-textarea"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="privacy-row">
            <input
              type="checkbox"
              id="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="privacyAccepted">I have read and agree to the</label>
            <a href="/pdfs/privacy-policy.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}