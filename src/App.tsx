import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import ScrollHint from './components/ScrollHint'
import Footer from './components/Footer'
import ContentWithVideo from './components/ContentWithVideo'
import PropertyForSale from './components/PropertyForSale'
import RecentlySold from './components/RecentlySold'
import MarketingWithUs from './components/MarketingWithUs'
import Services from './components/Services'
import HomeBuyersGuide from './components/HomeBuyersGuide'
import MortgageAdvice from './components/MortgageAdvice'
import ClientsSay from './components/ClientsSay'
// import GoogleReviews from './components/GoogleReviews'
import MeetTheTeam from './components/MeetTheTeam'
// import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'
import BestTimeToSell from './components/BlogPages/BestTimeToSell'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogsHome from './components/BlogsHome'
import GetInTouchSection from './components/GetInTouchSection'
import AnimatedSection from './components/AnimatedSection'
import WhyIntegraEstates from './components/WhyIntegraEstates'
import MortgageAdvicePage from './components/MortgageAdvicePage'
import ValuationModal from './components/ValuationModal'

// Temporarily disabled Framer Motion
// import { motion as m, AnimatePresence } from 'framer-motion'

function HomePage() {
  const [introVisible, setIntroVisible] = useState(true)
  const [introHiding, setIntroHiding] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  const onHeroStarted = () => {
    if (!introVisible) return
    // Wait 2s after hero starts playing before hiding overlay
    setTimeout(() => {
      setIntroHiding(true)
      // Match CSS transition duration
      setTimeout(() => {
        setIntroVisible(false)
        setIntroComplete(true)
      }, 850)
    }, 2000)
  }

  return (
    <>
      {introVisible && (
        <div className={`intro-overlay${introHiding ? ' intro-overlay--hide' : ''}`}>
          <img src="/svg/logo-black-white.svg" alt="Integra Estates" className="intro-overlay__logo" />
        </div>
      )}
      <ScrollHint />
      <Hero onStarted={onHeroStarted} introComplete={introComplete} />
      <AnimatedSection>
        <ContentWithVideo />
      </AnimatedSection>
      <AnimatedSection>
        <PropertyForSale />
      </AnimatedSection>
      <AnimatedSection>
        <RecentlySold />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <MarketingWithUs />
      </AnimatedSection>
      <AnimatedSection>
        <HomeBuyersGuide />
      </AnimatedSection>
      <AnimatedSection>
        <MortgageAdvice />
      </AnimatedSection>
      <AnimatedSection>
        <ClientsSay />
      </AnimatedSection>
      {/* <AnimatedSection>
        <GoogleReviews />
      </AnimatedSection> */}
      <AnimatedSection>
        <MeetTheTeam />
      </AnimatedSection>
      <AnimatedSection>
        <BlogsHome />
      </AnimatedSection>
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}

// Scroll to top on every route change (robust for non-window scrollers)
function ScrollToTop() {
  const { pathname, hash } = useLocation() as { pathname: string; hash?: string }
  useEffect(() => {
    const mainEl = document.querySelector('main') as HTMLElement | null

    const doScroll = () => {
      // Target multiple potential scroll containers
      try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }) } catch { void 0 }
      try { document.documentElement.scrollTop = 0 } catch { void 0 }
      try { document.body.scrollTop = 0 } catch { void 0 }
      if (mainEl) {
        try { mainEl.scrollTo({ top: 0, left: 0, behavior: 'auto' }) } catch { mainEl.scrollTop = 0 }
      }
    }

    // Use double rAF to apply after layout of the new route
    requestAnimationFrame(() => {
      doScroll()
      requestAnimationFrame(() => doScroll())
    })

    // If there is a hash, override to top instead of element focus
    if (hash) {
      requestAnimationFrame(() => doScroll())
    }
  }, [pathname, hash])
  return null
}

function App() {
  // Disable browser scroll restoration to avoid persisted positions on navigation
  useEffect(() => {
    try { if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual' } catch { void 0 }
    return () => {
      try { if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'auto' } catch { void 0 }
    }
  }, [])

  const [isValuationOpen, setIsValuationOpen] = useState(false)
  useEffect(() => {
    const onOpen = () => setIsValuationOpen(true)
    window.addEventListener('openValuationModal', onOpen as EventListener)
    return () => window.removeEventListener('openValuationModal', onOpen as EventListener)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-posts" element={<BlogPost />} />
          <Route path="/blogs/Best-Time-To-Sell" element={<BestTimeToSell />} />
          <Route path="/why-integra-estates" element={<WhyIntegraEstates />} />
          <Route path="/mortgage-advice" element={<MortgageAdvicePage />} />
        </Routes>

        <ValuationModal isOpen={isValuationOpen} onClose={() => setIsValuationOpen(false)} />
        <Footer />
      </main>
    </Router>
  )
}

export default App
