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
import GoogleReviews from './components/GoogleReviews'
import MeetTheTeam from './components/MeetTheTeam'
// import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'
import BestTimeToSell from './components/BlogPages/BestTimeToSell'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogsHome from './components/BlogsHome'
import GetInTouchSection from './components/GetInTouchSection'
import AnimatedSection from './components/AnimatedSection'
// Temporarily disabled Framer Motion
// import { motion as m, AnimatePresence } from 'framer-motion'

function HomePage() {
  const [introVisible, setIntroVisible] = useState(true)
  const [introHiding, setIntroHiding] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  // Fallback: if hero doesn't start within 5s, hide overlay
  useEffect(() => {
    if (!introVisible) return
    const t = setTimeout(() => {
      setIntroHiding(true)
      setTimeout(() => setIntroVisible(false), 850)
    }, 5000)
    return () => clearTimeout(t)
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
        <GoogleReviews />
      </AnimatedSection>
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

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog-posts" element={<BlogPost />} />
          <Route path="/blogs/Best-Time-To-Sell" element={<BestTimeToSell />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
