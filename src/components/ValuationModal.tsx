import { useState } from 'react'

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      privacyAccepted: e.target.checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-module__OlsmPa__modal render-a-form-module__U1DxcG__enterDone">
      <form className="valuation-module__QO8ucG__form" onSubmit={handleSubmit}>
        <div className="valuation-module__QO8ucG__formContainer">
          <div className="header-module__i_RNIW__header">
            <h2 className="header-module__i_RNIW__heading">Request A Valuation</h2>
            <p>If you wish to obtain a valuation of your property, we kindly invite you to reach out to us through either of the following means of communication:</p>
          </div>
          
          <div className="header-module__i_RNIW__contact">
            <a href="tel:02038700000" className="header-module__i_RNIW__phoneInfo">
              <div className="header-module__i_RNIW__phoneInfoIcon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
                </svg>
              </div>
              <div className="header-module__i_RNIW__phoneInfoDesc">
                <h3>Phone</h3>
                <p>0203 870 00 00</p>
              </div>
            </a>
            
            <a href="mailto:hello@integra-estates.com" className="header-module__i_RNIW__emailInfo">
              <div className="header-module__i_RNIW__emailInfoIcon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect>
                  <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"></path>
                </svg>
              </div>
              <div className="header-module__i_RNIW__emailInfoDesc">
                <h3>Email</h3>
                <p>hello@integra-estates.com</p>
              </div>
            </a>
          </div>
          
          <div className="header-module__i_RNIW__divider">
            <p className="header-module__i_RNIW__dividerDesc">Alternatively, you may choose to complete the form provided below, following which we shall promptly get in touch with you to discuss scheduling a property valuation.</p>
          </div>
          
          <div className="valuation-module__QO8ucG__formRow">
            <div className="valuation-module__QO8ucG__rowInput">
              <div className="text-module__b-zcAq__textInput">
                <label htmlFor="firstName" className="text-module__b-zcAq__inputTitle">Your First Name:</label>
                <div className="text-module__b-zcAq__inputDiv">
                  <div className="text-module__b-zcAq__inputIcon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path>
                      <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path>
                    </svg>
                  </div>
                  <input 
                    id="firstName" 
                    name="firstName"
                    className="text-module__b-zcAq__input" 
                    placeholder="First Name..." 
                    type="text" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-module__b-zcAq__error"></div>
              </div>
            </div>
            
            <div className="valuation-module__QO8ucG__rowInput">
              <div className="text-module__b-zcAq__textInput">
                <label htmlFor="lastName" className="text-module__b-zcAq__inputTitle">Your Last Name:</label>
                <div className="text-module__b-zcAq__inputDiv">
                  <div className="text-module__b-zcAq__inputIcon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"></path>
                      <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"></path>
                    </svg>
                  </div>
                  <input 
                    id="lastName" 
                    name="lastName"
                    className="text-module__b-zcAq__input" 
                    placeholder="Last Name..." 
                    type="text" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-module__b-zcAq__error"></div>
              </div>
            </div>
          </div>
          
          <div className="valuation-module__QO8ucG__formRow">
            <div className="valuation-module__QO8ucG__rowInput">
              <div className="text-module__b-zcAq__textInput">
                <label htmlFor="email" className="text-module__b-zcAq__inputTitle">Your Email Address:</label>
                <div className="text-module__b-zcAq__inputDiv">
                  <div className="text-module__b-zcAq__inputIcon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect>
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"></path>
                    </svg>
                  </div>
                  <input 
                    id="email" 
                    name="email"
                    className="text-module__b-zcAq__input" 
                    placeholder="Email..." 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-module__b-zcAq__error"></div>
              </div>
            </div>
            
            <div className="valuation-module__QO8ucG__rowInput">
              <div className="text-module__b-zcAq__textInput">
                <label htmlFor="phone" className="text-module__b-zcAq__inputTitle">Your Phone Number:</label>
                <div className="text-module__b-zcAq__inputDiv">
                  <div className="text-module__b-zcAq__inputIcon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
                    </svg>
                  </div>
                  <input 
                    id="phone" 
                    name="phone"
                    className="text-module__b-zcAq__input" 
                    placeholder="Phone Number..." 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="text-module__b-zcAq__error"></div>
              </div>
            </div>
          </div>
          
          <div className="valuation-module__QO8ucG__formRow">
            <div className="message-module__tgP6sW__textAreaInput">
              <label htmlFor="message" className="message-module__tgP6sW__inputTitle">Your Message:</label>
              <div className="message-module__tgP6sW__inputDiv">
                <div className="message-module__tgP6sW__inputIcon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinejoin="round" strokeWidth="32" d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"></path>
                  </svg>
                </div>
                <textarea 
                  id="message" 
                  name="message"
                  className="message-module__tgP6sW__input" 
                  placeholder="Message..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="message-module__tgP6sW__error"></div>
            </div>
          </div>
          
          <div className="privacy-policy-module__AziuXW__privacy">
            <div className="privacy-policy-module__AziuXW__checkbox">
              <input 
                type="checkbox" 
                id="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="privacyAccepted" className="alt-icon-module__X-Do-a__icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="alt-icon-module__X-Do-a__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  {formData.privacyAccepted ? (
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  ) : (
                    <path fill="none" d="M0 0h24v24H0z"></path>
                  )}
                </svg>
              </label>
            </div>
            <div className="privacy-policy-module__AziuXW__link">
              <a href="/pdfs/privacy-policy.pdf" target="_blank">Privacy Policy:</a>
              <p>Please confirm you have read and agree to our privacy policy.</p>
            </div>
          </div>
          
          <div className="valuation-module__QO8ucG__btns">
            <button type="submit" className="valuation-module__QO8ucG__btn valuation-module__QO8ucG__submit">Submit</button>
            <button type="button" className="valuation-module__QO8ucG__btn valuation-module__QO8ucG__cancel" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </form>
      <div style={{ height: '1rem', width: '100%' }}></div>
    </div>
  )
}
