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
import MeetTheTeamPage from './components/MeetTheTeamPage'
// import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'
import BestTimeToSell from './components/BlogPages/BestTimeToSell'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogsHome from './components/BlogsHome'
import GetInTouchSection from './components/GetInTouchSection'
import AnimatedSection from './components/AnimatedSection'
import WhyIntegraEstates from './components/WhyIntegraEstates'
import MortgageAdvicePage from './components/MortgageAdvicePage'
import MarketingYourProperty from './components/MarketingYourProperty'
import ValuationModal from './components/ValuationModal'
import FloatingToolsWidget from './components/FloatingToolsWidget'
import VirtualTour360Page from './components/VirtualTour360Page'
import VirtualStagingPage from './components/VirtualStagingPage'
import CommunityEngagementPage from './components/CommunityEngagementPage'
import ProbatePropertiesPage from './components/ProbatePropertiesPage'

// Temporarily disabled Framer Motion
// import { motion as m, AnimatePresence } from 'framer-motion'

function HomePage() {
  const [introVisible, setIntroVisible] = useState(() => {
    // Check if this is a page refresh (not navigation)
    const isPageRefresh = performance.navigation?.type === 1 || 
                          (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload'
    
    // Show intro on page refresh or if not seen in this session
    const hasSeenIntro = sessionStorage.getItem('introShown')
    const shouldShow = isPageRefresh || hasSeenIntro !== 'true'
    
    console.log('Intro check:', { 
      isPageRefresh, 
      hasSeenIntro, 
      shouldShow,
      navType: performance.navigation?.type,
      navTiming: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type
    })
    
    return shouldShow
  })
  const [introHiding, setIntroHiding] = useState(false)
  const [introComplete, setIntroComplete] = useState(() => {
    // If intro is not visible, mark as complete immediately
    return sessionStorage.getItem('introShown') === 'true'
  })

  // Mark intro as shown in sessionStorage when it displays
  useEffect(() => {
    console.log('Intro visibility changed:', introVisible)
    if (introVisible) {
      sessionStorage.setItem('introShown', 'true')
      console.log('Marked intro as shown in sessionStorage')
    }
  }, [introVisible])

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
          <Route path="/marketing-your-property" element={<MarketingYourProperty />} />
          <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
          <Route path="/360-virtual-tour" element={<VirtualTour360Page />} />
          <Route path="/virtual-staging" element={<VirtualStagingPage />} />
          <Route path="/community-engagement" element={<CommunityEngagementPage />} />
          <Route path="/probate-properties" element={<ProbatePropertiesPage />} />
        </Routes>

        <ValuationModal isOpen={isValuationOpen} onClose={() => setIsValuationOpen(false)} />
        <FloatingToolsWidget />
        <Footer />
      </main>
    </Router>
  )
}

export default App
