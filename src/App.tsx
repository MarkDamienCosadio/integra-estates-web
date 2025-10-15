import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import { useEffect } from 'react'
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

function HomePage() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <ScrollHint />
      <Hero />
      <ContentWithVideo />
      <PropertyForSale />
      <RecentlySold />
      <Services />
      <MarketingWithUs />
      <HomeBuyersGuide />
      <MortgageAdvice />
      <GoogleReviews />
      <MeetTheTeam />
      <BlogsHome />
      <GetInTouchSection />
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
