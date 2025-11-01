import { useState } from 'react'
import './FloatingToolsWidget.css'

export default function FloatingToolsWidget() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(o => !o)

  const openValuation = () => {
    try {
      window.dispatchEvent(new Event('openValuationModal'))
    } catch {
      // no-op
    }
    setOpen(false)
  }

  const openMortgageCalculator = () => {
    window.open(
      'https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates',
      '_blank',
      'noopener,noreferrer'
    )
    setOpen(false)
  }

  const openStampDutyCalculator = () => {
    window.open(
      'https://www.landc.co.uk/destination/partners/stamp-duty-calculator-integra-estates',
      '_blank',
      'noopener,noreferrer'
    )
    setOpen(false)
  }

  return (
    <div className={`floating-tools ${open ? 'floating-tools--open' : ''}`} aria-label="Quick tools">
      <button
        type="button"
        className="floating-tools__button"
        aria-expanded={open}
        aria-controls="floating-tools-menu"
        onClick={toggle}
        title={open ? 'Close tools' : 'Open tools'}
      >
        {/* Cog icon */}
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="currentColor" d="M19.43 12.98l1.67-1.41-2.12-3.67-2.02.84c-.52-.4-1.08-.73-1.69-.97L14 6h-4l-.28 1.79c-.61.25-1.17.58-1.69.98l-2.02-.85-2.12 3.67 1.67 1.41c-.04.32-.07.64-.07.98s.03.66.07.98l-1.67 1.41 2.12 3.67 2.02-.84c.52.4 1.08.73 1.69.97L10 22h4l.28-1.79c.61-.25 1.17-.58 1.69-.98l2.02.85 2.12-3.67-1.67-1.41c.04-.32.07-.64.07-.98s-.03-.66-.07-.98zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
        </svg>
      </button>

      <div id="floating-tools-menu" className="floating-tools__menu" role="menu">
        <button type="button" className="floating-tools__item" role="menuitem" onClick={openValuation}>
          Request a Valuation
        </button>
        <button type="button" className="floating-tools__item" role="menuitem" onClick={openMortgageCalculator}>
          Mortgage Calculator
        </button>
        <button type="button" className="floating-tools__item" role="menuitem" onClick={openStampDutyCalculator}>
          Stamp Duty Calculator
        </button>
      </div>
    </div>
  )
}