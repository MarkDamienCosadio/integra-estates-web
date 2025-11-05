import ScrollHint from './ScrollHint'
import AnimatedSection from './AnimatedSection'
import { useIsMobile } from '../hooks/useIsMobile'
import GetInTouchSection from './GetInTouchSection'
import { useState } from 'react'

export default function MortgageAdvicePage() {
  const isMobile = useIsMobile()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFirstTimeBuyerModalOpen, setIsFirstTimeBuyerModalOpen] = useState(false)
  const [isRemortgageProcessModalOpen, setIsRemortgageProcessModalOpen] = useState(false)
  const [isWhyRemortgageModalOpen, setIsWhyRemortgageModalOpen] = useState(false)
  const [isPortingMortgageModalOpen, setIsPortingMortgageModalOpen] = useState(false)
  const [isBuyToLetModalOpen, setIsBuyToLetModalOpen] = useState(false)
  const [isBuyToLetRemortgageModalOpen, setIsBuyToLetRemortgageModalOpen] = useState(false)
  const [isNewBuildModalOpen, setIsNewBuildModalOpen] = useState(false)
  const [isBuyToLetInterestOnlyModalOpen, setIsBuyToLetInterestOnlyModalOpen] = useState(false)

  const openModal = () => {
    console.log('Opening modal...')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openFirstTimeBuyerModal = () => {
    console.log('Opening first time buyer modal...')
    setIsFirstTimeBuyerModalOpen(true)
  }

  const closeFirstTimeBuyerModal = () => {
    setIsFirstTimeBuyerModalOpen(false)
  }

  const openRemortgageProcessModal = () => {
    console.log('Opening remortgage process modal...')
    setIsRemortgageProcessModalOpen(true)
  }

  const closeRemortgageProcessModal = () => {
    setIsRemortgageProcessModalOpen(false)
  }

  const openWhyRemortgageModal = () => {
    console.log('Opening why remortgage modal...')
    setIsWhyRemortgageModalOpen(true)
  }

  const closeWhyRemortgageModal = () => {
    setIsWhyRemortgageModalOpen(false)
  }

  const openPortingMortgageModal = () => {
    console.log('Opening porting mortgage modal...')
    setIsPortingMortgageModalOpen(true)
  }

  const closePortingMortgageModal = () => {
    setIsPortingMortgageModalOpen(false)
  }

  const openBuyToLetModal = () => {
    console.log('Opening buy to let modal...')
    setIsBuyToLetModalOpen(true)
  }

  const closeBuyToLetModal = () => {
    setIsBuyToLetModalOpen(false)
  }

  const openBuyToLetRemortgageModal = () => {
    console.log('Opening buy to let remortgage modal...')
    setIsBuyToLetRemortgageModalOpen(true)
  }

  const closeBuyToLetRemortgageModal = () => {
    setIsBuyToLetRemortgageModalOpen(false)
  }

  const openNewBuildModal = () => {
    console.log('Opening new build modal...')
    setIsNewBuildModalOpen(true)
  }

  const closeNewBuildModal = () => {
    setIsNewBuildModalOpen(false)
  }

  const openBuyToLetInterestOnlyModal = () => {
    console.log('Opening buy to let interest only modal...')
    setIsBuyToLetInterestOnlyModalOpen(true)
  }

  const closeBuyToLetInterestOnlyModal = () => {
    setIsBuyToLetInterestOnlyModalOpen(false)
  }
  return (
    <>
      <section className="mortgage-advice-hero hero">
        <video
          className="hero__video visible"
          src="/video/Mortgage%20Video.mov"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Mortgage Advice"
        />
        <div className="hero__overlay">
          <div className="hero-content">
            <h1 className="hero-tag">Valuable Independent Mortgage Advice</h1>
            <h3 className="hero-desc">Helping You Unlock new opportunities and possibilities</h3>
          </div>
        </div>
      </section>

      {/* New column section with matching h2 title */}
      <section className="mortgage-advice-section section">
        <AnimatedSection>
          <div className="mortgage-advice-container">
            <div className="mortgage-advice-content" style={{ rowGap: 0 }}>
              <div className="mortgage-card animate-in-up" style={{ gridColumn: '1 / -1' }}>
                {/* Centered, full-width title across the grid */}
                <h2 className="ask-us-title animate-in-up" data-animate-delay="200" style={{ textAlign: 'center', margin: '0 auto', paddingBottom: 0 }}>
                  Get Expert Mortgage Help Today
                </h2>

                {/* Centered article content */}
                <article
                  className="mortgage-article animate-in-up"
                  data-animate-delay="400"
                  style={{ textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}
                  aria-label="Expert mortgage help information"
                >
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                    Over 2 million people have trusted L&amp;C Mortgages - the UK's No.1 fee-free broker - with access to exclusive deals from across the market, expert advice 7 days a week.
                  </p>
                  <p style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                    Tel: <a href="tel:08009234018" aria-label="Call L and C Mortgages">0800 923 4018</a>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mortgage Services section */}
      <section id="mortgage-services" className="mortgage-advice-section section">
        <AnimatedSection>
          <div className="mortgage-advice-container">
            <div className="mortgage-advice-content" style={{ rowGap: 0 }}>
              <h2 className="ask-us-title animate-in-up" style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0 auto' }}>
                Expert Mortgage Advice, When You Need It Most
              </h2>
              <h3 className="animate-in-up" data-animate-delay="200" style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0.5rem auto 0' }}>
                In partnership with L&amp;C - the UK's Largest fee-free mortgage broker
              </h3>
              <article
                className="mortgage-article animate-in-up"
                data-animate-delay="400"
                style={{ gridColumn: '1 / -1', margin: '1rem auto 0', maxWidth: '1000px' }}
                aria-label="Mortgage services partnership details"
              >
                <p>
                  At Integra Estates, we believe that exceptional estate agency is about more than just property, it's about people. As an agency you can trust, we're proud to partner with a company that shares our core values of honesty, reliability and outstanding customer care.
                </p>
                <p>
                  That's why we've chosen to work alongside L&amp;C Mortgages, the UK's largest fee-free mortgage broker. In our view, they are truly the best at what they do.
                </p>
                <p>
                  More than two million people have turned to L&amp;C for expert mortgage advice. Their approachable and knowledgeable advisers are available seven days a week, ready to guide you through the entire mortgage process with no fees to pay. Whether you're a first-time buyer, moving home or refinancing, L&amp;C search across the entire mortgage market, including exclusive products not available elsewhere, to ensure you receive the very best deal.
                </p>
                <p>
                  We understand how crucial it is to be in the strongest possible position when making an offer on a home. That's why we encourage our clients to speak with L&amp;C early on, helping them feel prepared and financially confident when the right property comes along.
                </p>
                <p>
                  We don't believe in recommending just anyone. We only align ourselves with companies we trust wholeheartedly. L&amp;C's exceptional reputation, unparalleled market access and unwavering commitment to customer service perfectly reflect the high standards we uphold at Integra Estates.
                </p>
                <p>
                  Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" aria-label="Call L and C Mortgages">0800 923 4018</a> to speak to a mortgage expert.
                </p>
              </article>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* First time purchase section */}
      <section id="first-time-purchase" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            {!isMobile && (
              <AnimatedSection>
                <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                  <img src="/images/first-time-buyers.jpg" alt="First-time buyers" style={{ width: '35vw', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
                </div>
              </AnimatedSection>
            )}
            {/* Right column: title, subtitle, article and buttons */}
            <AnimatedSection>
              <div className="animate-in-right" data-animate-delay="240" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 0,
                marginLeft: 0,
                width: '100%'
              }}>
                <h2 className="ask-us-title ma-prep">
                  First time purchase
                </h2>
                {isMobile && (
                  <img
                    src="/images/first-time-buyers.jpg"
                    alt="First-time buyers"
                    style={{ width: '92vw', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
                <h3 style={{ paddingTop: '25px' }}>
                  Buying Your First Home? You're Not Alone
                </h3>
                <article className="mortgage-article ma-prep" aria-label="First time purchase guidance for buyers">
                  <p>
                    We understand that buying your first home can feel overwhelming, but it doesn't have to be. As the agent you can trust, we're here to support you at every stage of the journey. That's why we've partnered with L&amp;C Mortgages, the UK's largest fee-free mortgage broker, as we believe they offer outstanding service.
                  </p>
                  <p>
                    L&amp;C's friendly and knowledgeable advisers are available seven days a week, and they specialise in helping first-time buyers like you navigate the mortgage process. From understanding affordability and repayments, to exploring your options and securing that all-important Mortgage in Principle, their team is there to make things simple and clear.
                  </p>
                  <p>
                    They'll answer your questions with honesty and clarity, providing accurate guidance and always putting your best interests first. With access to a broad range of mortgage deals, including exclusive products not available elsewhere, they ensure you're in the strongest position when the right property becomes available.
                  </p>
                  <p>
                    With Integra Estates and L&amp;C by your side, you can feel confident, informed and well supported, from your very first viewing right through to the moment you collect your keys.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="Why a Mortgage in Principle Should Be Your First Step?" onClick={(e) => { e.preventDefault(); openModal(); }}>Why a Mortgage in Principle Should Be Your First Step?</a>
                    <a href="#" className="cta" aria-label="Which first time buyer mortgage is right for me?" onClick={(e) => { e.preventDefault(); openFirstTimeBuyerModal(); }}>Which first time buyer mortgage is right for me?</a>
                    <a href="https://www.landc.co.uk/destination/estate-agents/integra-estates" className="cta" aria-label="Click here for Free Mortgage Advice" target="_blank" rel="noopener noreferrer">Click here for Free Mortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Re-Mortgage section */}
      <section id="re-mortgage" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: title, subtitle, article and buttons */}
            <AnimatedSection>
              <div className="animate-in-left" data-animate-delay="120" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'left', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                paddingLeft: '0px', 
                marginLeft: '0px', 
                width: '100%'
              }}>
                <h2 className="remortgage-title" style={{ textAlign: 'right', width: '100%', display: 'block' }}>Re-mortgage</h2>
                {isMobile && (
                  <img
                    src="/images/remortgage.jpg"
                    alt="Re-mortgage"
                    style={{ width: '92vw', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
                <h3 style={{ paddingTop: '20px' }}>Time to Re-Mortgage? Let's Make It Work for You</h3>
                <article className="mortgage-article ma-prep" aria-label="Re-mortgage guidance for homeowners">
                  <p>Your mortgage should work around your life, not the other way round. Whether your fixed rate is coming to an end, you're looking to release equity, or simply want a better deal, remortgaging can be a powerful way to take control of your finances.</p>
                  <p>L&C's expert advisers can help you find the remortgage product that best suits your personal circumstances. And because their advice is completely fee-free, you'll never pay a penny for their support.</p>
                  <p>Most importantly, L&C provides a process that is both stress free and jargon free. Their advisers are available seven days a week to discuss your needs, answer your questions and offer clear, honest guidance, always with your best interests at heart.</p>
                  <p>At Integra Estates, we only recommend services we would genuinely use ourselves. L&C shares our core values of honesty, transparency and client care, which is exactly why we trust them to help our clients make sound financial decisions.</p>
                  <p>So, whether you're remortgaging to save money, restructure your finances or release funds, let L&C take care of the hard work and help you move forward with confidence.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="What Is the Remortgage Process?" onClick={(e) => { e.preventDefault(); openRemortgageProcessModal(); }}>What Is the Remortgage Process?</a>
                    <a href="#" className="cta" aria-label="Why do people remortgage?" onClick={(e) => { e.preventDefault(); openWhyRemortgageModal(); }}>Why do people remortgage?</a>
                    <a href="https://www.landc.co.uk/destination/estate-agents/integra-estates" className="cta" aria-label="Click here for Free Remortgage Advice" target="_blank" rel="noopener noreferrer">Click here for Free Remortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
            {/* Right column: image */}
            {!isMobile && (
              <AnimatedSection>
                <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                  <img src="/images/remortgage.jpg" alt="Re-mortgage" style={{ width: '35vw', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Moving Home section */}
      <section id="moving-home" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            {!isMobile && (
              <AnimatedSection>
                <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                  <img src="/images/moving-home.jpg" alt="Moving Home" style={{ 
                    width: '35vw', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '12px', 
                    boxShadow: '10px 10px 3px -6px rgba(108, 152, 48, 1), 12px 12px 12px -14px rgba(108, 152, 48, 0.92), 14px 14px 18px -18px rgba(108, 152, 48, 0.65), 0 6px 12px rgba(0, 0, 0, 0.16)'
                  }} />
                </div>
              </AnimatedSection>
            )}
            {/* Right column: title, subtitle, article and buttons */}
            <AnimatedSection>
              <div className="animate-in-right" data-animate-delay="240" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'left', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                paddingLeft: '0px', 
                marginLeft: '0px', 
                width: '100%'
              }}>
                <h2 className="moving-home-title ma-prep" style={{ textAlign: 'left' }}>Moving Home</h2>
                {isMobile && (
                  <img
                    src="/images/moving-home.jpg"
                    alt="Moving Home"
                    style={{ width: '92vw', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
                <h3 style={{ paddingTop: '20px' }}>Your Moving Mortgage</h3>
                <article className="mortgage-article ma-prep" aria-label="Moving home mortgage guidance">
                  <p>When moving home, one option you might consider is porting your existing mortgage, which means transferring your current mortgage deal to your new property. This can seem like a convenient choice, especially if you're on a favourable rate or hoping to avoid early repayment charges. However, while porting can work well for some, it's not always the most cost-effective or flexible solution.</p>
                  <p>For example, if you're moving to a larger property and need to borrow more, your existing lender might not offer competitive terms on the additional borrowing. Or you may be planning improvements to your new home and require a mortgage that supports this level of flexibility. Even small changes in your circumstances, such as income or credit status, could impact your ability to port the mortgage at all.</p>
                  <p>That's where London and Country Mortgages (L&C) can help. As the UK's largest fee-free mortgage broker, L&C provides a completely impartial service, offering access to more lenders and products than any other broker, including some exclusive deals you won't find on the high street.</p>
                  <p>Whether you are looking to port your current mortgage or explore options for a brand new one, L&C's expert advisers are on hand to guide you every step of the way. With a short, no-obligation phone call, they will take the time to understand your circumstances and help you find the best path forward, potentially saving you thousands over the life of your mortgage.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="What Does Porting My Mortgage Mean?" onClick={(e) => { e.preventDefault(); openPortingMortgageModal(); }}>What Does Porting My Mortgage Mean?</a>
                    <a href="https://www.landc.co.uk/destination/estate-agents/integra-estates" className="cta" aria-label="Click here for Free Moving Mortgage Advice" target="_blank" rel="noopener noreferrer">Click here for Free Moving Mortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Buy To Let section */}
      <section id="buy-to-let" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: title, subtitle, article and buttons */}
            <AnimatedSection>
              <div className="animate-in-left" data-animate-delay="120" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'right', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-end', 
                paddingRight: '0px', 
                marginRight: '0px', 
                width: '100%'
              }}>
                <h2 className="buy-to-let-title ma-prep" style={{ textAlign: 'right' }}>Buy To Let</h2>
                {isMobile && (
                  <img
                    src="/images/buy-to-let.jpg"
                    alt="Buy To Let"
                    style={{ width: '92vw', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
                <h3 style={{ paddingTop: '20px' }}>A Landlord's Guide to Smart Financing</h3>
                <article className="mortgage-article ma-prep" aria-label="Buy to let mortgage guidance">
                  <p>Whether you're an experienced landlord expanding your portfolio or taking your first step into the rental market, securing the right buy to let mortgage is key to maximising your investment returns.</p>
                  <p>At Integra Estates, the agent you can trust, we know your in good hands with L&C's dedicated experts who have supported thousands of landlords across the UK. They know the market inside out and can guide you through every stage, from understanding lender criteria and affordability assessments to choosing between interest only and repayment options.</p>
                  <p>Buy to let mortgages often come with added layers of complexity, but with L&C, the process is made simple and efficient. From your initial enquiry to completion, their team takes care of the detail, allowing you to focus on what really matters, securing the right property and making a smart investment.</p>
                  <p>If you're considering a buy to let mortgage or want to review your current deal, speak with L&C today and benefit from expert guidance and honest advice trusted by landlords nationwide.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-end' }}>
                    <a href="#" className="cta" aria-label="What is a Buy to let mortgage?" onClick={(e) => { e.preventDefault(); openBuyToLetModal(); }}>What is a Buy to let mortgage?</a>
                    <a href="#" className="cta" aria-label="Buy To Let remortgage" onClick={(e) => { e.preventDefault(); openBuyToLetRemortgageModal(); }}>Buy To Let remortgage</a>
                    <a href="https://www.landc.co.uk/destination/estate-agents/integra-estates" className="cta" aria-label="Click here for Free Buy to Let Mortgage Advice" target="_blank" rel="noopener noreferrer">Click here for Free Buy to Let Mortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
            {/* Right column: image */}
            {!isMobile && (
              <AnimatedSection>
                <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                  <img src="/images/buy-to-let.jpg" alt="Buy To Let" style={{ 
                    width: '35vw', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '12px', 
                    boxShadow: '10px 10px 3px -6px rgba(108, 152, 48, 1), 12px 12px 12px -14px rgba(108, 152, 48, 0.92), 14px 14px 18px -18px rgba(108, 152, 48, 0.65), 0 6px 12px rgba(0, 0, 0, 0.16)'
                  }} />
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* New Build Homes section */}
      <section id="new-build-homes" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            {!isMobile && (
              <AnimatedSection>
                <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                  <img src="/images/new-home.jpg" alt="New Build Homes" style={{ 
                    width: '35vw', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '12px', 
                    boxShadow: '10px 10px 3px -6px rgba(108, 152, 48, 1), 12px 12px 12px -14px rgba(108, 152, 48, 0.92), 14px 14px 18px -18px rgba(108, 152, 48, 0.65), 0 6px 12px rgba(0, 0, 0, 0.16)'
                  }} />
                </div>
              </AnimatedSection>
            )}
            {/* Right column: title, subtitle, article and buttons */}
            <AnimatedSection>
              <div className="animate-in-right" data-animate-delay="240" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'left', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                paddingLeft: '0px', 
                marginLeft: '0px', 
                width: '100%'
              }}>
                <h2 className="new-build-homes-title ma-prep" style={{ textAlign: 'left' }}>New Build Homes</h2>
                {isMobile && (
                  <img
                    src="/images/new-home.jpg"
                    alt="New Build Homes"
                    style={{ width: '92vw', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '12px' }}
                  />
                )}
                <h3 style={{ paddingTop: '20px' }}>From New Build Dream to Reality</h3>
                <article className="mortgage-article ma-prep" aria-label="New build homes mortgage guidance">
                  <p>Whether you're an experienced landlord expanding your portfolio or taking your first step into the rental market, securing the right buy to let mortgage is key to maximising your investment returns.</p>
                  <p>At Integra Estates, the agent you can trust, we know your in good hands with L&C's dedicated experts who have supported thousands of landlords across the UK. They know the market inside out and can guide you through every stage, from understanding lender criteria and affordability assessments to choosing between interest only and repayment options.</p>
                  <p>Buy to let mortgages often come with added layers of complexity, but with L&C, the process is made simple and efficient. From your initial enquiry to completion, their team takes care of the detail, allowing you to focus on what really matters, securing the right property and making a smart investment.</p>
                  <p>If you're considering a buy to let mortgage or want to review your current deal, speak with L&C today and benefit from expert guidance and honest advice trusted by landlords nationwide.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="What is a new build mortgage?" onClick={(e) => { e.preventDefault(); openNewBuildModal(); }}>What is a new build mortgage?</a>
                    <a href="#" className="cta" aria-label="What is a buy to let interest only mortgage?" onClick={(e) => { e.preventDefault(); openBuyToLetInterestOnlyModal(); }}>What is a buy to let interest only mortgage?</a>
                    <a href="https://www.landc.co.uk/destination/estate-agents/integra-estates" className="cta" aria-label="Click here for Free New Build Mortgage Advice" target="_blank" rel="noopener noreferrer">Click here for Free New Build Mortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ready to Find a Mortgage section */}
      <section id="ready-to-find-mortgage" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center', minHeight: '300px', textAlign: 'center' }}>
            <AnimatedSection>
              <div className="animate-in-up" data-animate-delay="120" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '2rem 0',
                width: '100%'
              }}>
                <h2 className="ready-to-find-mortgage-title ma-prep" style={{ textAlign: 'center' }}>Ready to Find a Mortgage?</h2>
                <article className="mortgage-article ma-prep" aria-label="Ready to find mortgage guidance" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                  <p>Now that you've made the exciting decision to start looking for your perfect property, or remortgaging, it's a good idea to begin planning for the next steps in the process. When you find your dream home or an expiring mortgage product, you'll need to think about securing a mortgage.</p>
                  <p>We've partnered with L&C Mortgages, the UK's largest fee free mortgage broker. You'll be able to get expert advice at the end of a phone when it suits you. Their team are on hand 7 days a week and will compare deals from across the mortgage market so you don't have to.</p>
                  <p>Over 2 million people have come to L&C for fee free expert mortgage advice, so you know you can trust them to help you too.</p>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LC Mortgage section */}
      <section id="lc-mortgage" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center', minHeight: '300px', textAlign: 'center' }}>
            <AnimatedSection>
              <div className="animate-in-up" data-animate-delay="120" style={{ 
                height: '100%', 
                alignSelf: 'stretch', 
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '2rem 0',
                width: '100%'
              }}>
                {/* Banner Image */}
                <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '1200px' }}>
                  <img src="/images/l&c banner-1.png" alt="L&C Mortgages Banner" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
                </div>
                
                <article className="mortgage-article ma-prep" aria-label="L&C Mortgages legal information" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                  <p>YOUR HOME OR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.</p>
                  <p>Integra-Estates mortgage service is provided by London & Country Mortgages Ltd, Unit 26 (2.06), Newark Works, 2 Foundry Lane, Bath, BA2 3GZ.</p>
                  <p>London and Country are authorised and regulated by the Financial Conduct Authority. (Registration number 143002).</p>
                  <p>Please be advised The FCA does not regulate most buy-to-let mortgages</p>
                  <p>REFERRAL FEES. Honestly is at the heart at everything we do, we would like to advise,</p>
                  <p>The businesses I want to move limited trading as Integra-Estates have teamed up with London & Country Mortgages Ltd, Unit 26 (2.06), Newark Works, 2 Foundry Lane, Bath, BA2 3GZ, who are authorised and regulated by the Financial Conduct Authority (Registration number 143002). We recommend our clients use L&C for fee free mortgage advice and it is your decision whether you choose to deal with them or not. In making that decision, you should know that we receive 25% of any payment L&C receive from lenders and insurers, for the services they provide you.</p>
                </article>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get In Touch section */}
      <GetInTouchSection />

      {/* ScrollHint widget for mortgage page */}
      <ScrollHint />

      {/* First-time-purchase Modal */}
      {isModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                Why a Mortgage in Principle Should Be Your First Step?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Before you start booking viewings or making offers, there's one essential document that can make all the difference: a Mortgage in Principle (MIP).
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <br />
                We always encourage buyers — especially first-time purchasers — to secure a Mortgage in Principle early in their property journey. It's a simple document that confirms, based on initial information, how much you're likely to be able to borrow. It gives both you and sellers peace of mind that you're financially aware of things like borrowing ability and ready to move forward.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <br />
                In today's competitive market, most estate agents — including us — will ask to see a Mortgage in Principle before progressing an offer. It shows you're a serious buyer with the means to proceed, which can put you ahead of others when a sought-after property hits the market.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <br />
                This is where L&C Mortgages truly shine. As the UK's largest fee-free mortgage broker, they can often provide a Mortgage in Principle within just a few hours. No credit checks are carried out at this stage, so it won't affect your credit score, and their friendly, expert advisers will guide you through the process with ease.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Getting your MIP early not only strengthens your position as a buyer but also helps you understand what you can realistically afford — saving you time, disappointment, and unnecessary stress later on.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you're thinking of buying, speak to L&C Mortgages first. They're available seven days a week, ready to answer your questions, offer honest advice, and help you take that all-important first step with confidence.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* First-time-buyer Modal */}
      {isFirstTimeBuyerModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeFirstTimeBuyerModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeFirstTimeBuyerModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                Which first time buyer mortgage is right for me?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Taking your first step onto the property ladder is an exciting moment — but with so many mortgage types available, it can be difficult to know where to start. At Integra-Estates, we're the agent you can trust, and we know how important it is to have the right guidance from the beginning. That's why we proudly recommend L&amp;C Mortgages, the UK's largest fee-free mortgage broker.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                L&amp;C's friendly, well-informed advisers are true specialists when it comes to first-time buyers. They'll take the time to understand your situation, explain your options in plain English, and help you find the mortgage that best suits your needs — all at no cost to you.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Here are some of the most common mortgage types they can help you explore:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Fixed Rate Mortgages – Ideal for budgeting with confidence, fixed rate deals lock in your interest rate for a set period (usually 2 to 10 years), so your monthly payments stay the same.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Tracker Mortgages – These follow the Bank of England base rate, meaning your repayments could rise or fall depending on the wider economy. They can offer flexibility but may involve more risk.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Shared Ownership Mortgages – A popular option for first-time buyers with smaller deposits. This allows you to purchase a share of a property (usually 25% to 75%) and pay rent on the remaining share, typically owned by a housing association.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Shared Equity Mortgages – These are designed to help you buy with a smaller deposit. A loan (often government-backed) covers part of the property price, reducing your mortgage requirement and making homeownership more achievable.</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                L&amp;C also offer expert advice on all first-time buyer schemes, ensuring you're aware of any opportunities that may help you buy sooner or stretch your budget further.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Before you start viewing properties, we strongly recommend securing a Mortgage in Principle through L&amp;C. It's a quick and simple process, doesn't affect your credit score, and shows sellers you're a serious buyer. In fact, most estate agents — ourselves included — will ask to see this document before accepting an offer.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                With Integra-Estates and L&amp;C by your side, you'll have a team dedicated to helping you feel informed, prepared, and confident throughout your property journey.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Remortgage Process Modal */}
      {isRemortgageProcessModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeRemortgageProcessModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeRemortgageProcessModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                What Is the Remortgage Process?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Remortgaging is often quicker and simpler than buying a home, but it still benefits from forward planning and expert guidance. Whether you're looking to secure a better rate, borrow more, or release equity, it's important to approach your remortgage at the right time — and with the right support.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <br />
                We recommend speaking to the experts at L&amp;C Mortgages, the UK's largest fee-free mortgage broker. Their advisers are here to guide you every step of the way, making the process clear, stress-free, and tailored to your needs.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Here's a simplified overview of how the remortgage process typically works:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>1. Plan Ahead</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Start looking at your options 4 to 6 months before your current deal ends. This gives you time to review your goals — whether it's saving money, switching terms, or borrowing more.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>2. Check Your Options</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                L&amp;C will compare what your current lender offers versus what's available across the whole market — often including exclusive deals you won't find elsewhere.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>3. Choose the Right Deal</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Their advisers will help you understand which mortgage is best for you — from fixed rates to flexible products — taking into account fees, affordability, and long-term value.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>4. Submit Your Application</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Once you're ready, L&amp;C will prepare and submit your application, help gather documents, and liaise with the lender on your behalf — making the process as smooth as possible.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>5. Assessment and Offer</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                The lender will carry out affordability checks and a property valuation. Once approved, they'll issue your mortgage offer — and L&amp;C will keep you updated every step of the way.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}><strong>6. Legal Work and Completion</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                A conveyancer will handle the legal side, repaying your old mortgage and transferring funds. If you're releasing equity, this will be paid to you on completion.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                From start to finish, L&amp;C handle the heavy lifting, guiding you through each stage with clarity and care. With access to a wide range of lenders, friendly experts available 7 days a week, and no broker fees to pay, you're in safe hands.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If your mortgage deal is coming to an end — or you're just ready for a change — let Integra-Estates and L&amp;C help you take control of your mortgage with confidence.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Why Remortgage Modal */}
      {isWhyRemortgageModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeWhyRemortgageModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeWhyRemortgageModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                Why Do People Remortgage?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                When it comes to making your mortgage work better for you, remortgaging can be a smart move. Whether it's about saving money, borrowing more, or restructuring your finances, the reasons to explore a new deal are wide-ranging — and our trusted partner L&amp;C Mortgages is here to guide you through it all.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                More and more homeowners are choosing to switch from their existing lender when better deals become available — and with L&amp;C's fee-free advice, wide market access, and expert support, it's never been easier to take control.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Here are some of the most common reasons people choose to re-mortgage:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>1. <strong>Your current deal is ending</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                When your fixed term ends, you'll likely move onto your lender's Standard Variable Rate (SVR), which is often higher. Remortgaging before this happens can help you avoid unnecessary costs and secure a better rate.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>2. <strong>Your property value has increased</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If your home has risen in value or you've paid down a good portion of your mortgage, your Loan-to-Value (LTV) will have improved — making you eligible for better deals. L&amp;C can help you access exclusive rates based on your current equity.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>3. <strong>You want to borrow more</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Need funds for home improvements, renovations, or even a deposit on another property? Remortgaging can allow you to release equity and raise the capital you need — all through a structured and affordable plan.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>4. <strong>You're consolidating debt</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Remortgaging to pay off higher-interest loans or credit cards can simplify your finances and reduce your monthly outgoings. L&amp;C will help you understand if this is the right decision and ensure it's both manageable and sustainable.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>5. <strong>You're planning a Buy to Let or second home</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you're considering investing in a rental property or purchasing a second home, remortgaging your current property could help free up the deposit. L&amp;C's experts can walk you through the affordability and risks involved.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>6. <strong>You're separating or divorcing</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                In difficult personal situations, remortgaging can support a clean financial break — whether it's buying out a partner or transferring the mortgage into a single name. L&amp;C will handle the process with care and clarity.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>7. <strong>You want more flexibility</strong></span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If your current deal doesn't allow for overpayments or lacks flexibility, switching to a more suitable mortgage product could give you greater control over how and when you pay.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Whatever your reason for remortgaging, L&amp;C Mortgages is ideally placed to help. With thousands of deals from across the market, advisers available 7 days a week, and no broker fees to pay, you can be sure you're getting the right advice — tailored to your personal goals.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Porting Mortgage Modal */}
      {isPortingMortgageModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closePortingMortgageModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closePortingMortgageModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                What Does Porting My Mortgage Mean?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you're planning a move and already have a mortgage in place, you may have come across the term "porting your mortgage." But what does it actually mean – and is it the right option for you?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Porting your mortgage means transferring your current mortgage deal – including the interest rate and terms – from your existing property to a new one. While this can seem like a straightforward solution, it's not always the most cost-effective or flexible option, which is why it's important to seek expert advice before making a decision.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Why do some people choose to port their mortgage?</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You're on a great rate: If you locked in a low interest rate, porting allows you to keep that deal in place.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Avoid early repayment charges: Transferring your mortgage can help you sidestep costly fees for ending your current deal early.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>It feels familiar: Remaining with your existing lender can sometimes feel simpler than starting from scratch.</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>But porting isn't always the best fit...</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You need to borrow more: If you're moving to a larger property or need extra funds for renovations, your lender may not offer competitive terms on the additional borrowing.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Changes in your circumstances: A change in income, job status, or credit score since you first took out the mortgage could affect your lender's decision.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>It may still involve a full application: Despite being a transfer, porting often means reapplying and meeting current affordability criteria, which can slow things down.</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Why we recommend L&amp;C – London &amp; Country Mortgages
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                At Integra-Estates – the agent you can trust – we're proud to work alongside L&amp;C, the UK's largest fee-free mortgage broker. Their team of friendly, qualified advisers provide impartial guidance and search the entire market, including access to exclusive deals you won't find on the high street.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                They can help you determine whether porting is genuinely the best move or whether securing a new mortgage could offer better long-term value. And with no fees for their advice, you've got nothing to lose by having a quick chat.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Buy To Let Modal */}
      {isBuyToLetModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeBuyToLetModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeBuyToLetModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                What is a Buy to let mortgage?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Thinking about becoming a landlord or investing in property? If so, you'll likely need a buy-to-let (BTL) mortgage – a specialist type of loan designed specifically for people purchasing a property to rent out, rather than live in themselves.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                While buy-to-let mortgages share some similarities with traditional residential mortgages, there are some key differences you'll need to be aware of – and getting the right advice at the start can make a world of difference to your long-term return on investment.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                How is a buy-to-let mortgage different from a standard one?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>There are a few important distinctions:</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Intended use: A residential mortgage is for a property you plan to live in. A buy-to-let mortgage is for a property you intend to rent out.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Deposit requirements: Buy-to-let mortgages typically require a larger deposit – often at least 20–25%.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Interest rates and fees: Rates for BTL mortgages are generally higher, and fees can be steeper than for standard mortgages.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Affordability checks: Instead of assessing just your income, lenders also look at the property's rental income potential, usually requiring the expected rent to cover 125–145% of the mortgage payments.</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Interest-only options: Many BTL mortgages are interest-only, meaning you pay just the interest each month and repay the capital at the end of the term – ideal for investors looking to maximise monthly cash flow.</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Why getting the right mortgage matters</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Choosing the right buy-to-let mortgage isn't just about securing the lowest rate. It's about aligning the mortgage structure with your investment goals, rental strategy, and long-term plans.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                For instance, some landlords prefer the flexibility of fixed-term products, while others benefit from tracker rates depending on market conditions. Others may need to borrow via a limited company structure for tax reasons. A one-size-fits-all approach simply doesn't work in buy-to-let – which is why independent, expert advice is essential.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Our trusted partner: L&amp;C – London &amp; Country Mortgages
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                At Integra-Estates – the agent you can trust – we're proud to partner with L&amp;C, the UK's largest fee-free mortgage broker. Whether you're a first-time landlord or growing your portfolio, their expert advisers can compare hundreds of buy-to-let products from over 90 lenders to find the right deal for you.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                L&amp;C also have access to exclusive offers that you won't find elsewhere – and their service is completely free of charge. They'll take the time to understand your plans and help you navigate what can be a complex market with confidence and clarity.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Buy To Let Remortgage Modal */}
      {isBuyToLetRemortgageModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeBuyToLetRemortgageModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeBuyToLetRemortgageModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                Buy To Let remortgage
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you own a rental property, a buy-to-let remortgage could be a smart way to cut costs, release equity, or fund future investments. Whether you're looking to secure a better rate, raise capital for property improvements, or expand your portfolio, reviewing your current mortgage deal could make a significant difference to your long-term returns.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                What is a buy-to-let remortgage?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                A buy-to-let remortgage involves switching your current mortgage deal on a rental property to a new one – either with your existing lender or a new one entirely. This can help you reduce monthly repayments, free up equity, or access more competitive interest rates.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Common reasons landlords remortgage include:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Securing a better deal to maximise profit</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Releasing equity for property renovations or deposits on new purchases</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Changing from residential to buy-to-let when deciding to rent out a former home</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>When should you consider remortgaging?</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                It's wise to start looking around six months before your current deal ends to avoid slipping onto a more expensive standard variable rate. But you don't have to wait – if interest rates drop or your property has risen in value, you might qualify for a better deal even sooner (just be mindful of any early repayment charges).
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Why expert advice matters</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Buy-to-let mortgages work differently from standard ones. Lenders assess affordability based on expected rental income, usually requiring it to cover 125%–145% of your monthly repayments. Your own income and tax position may also be considered, especially if you're a higher-rate taxpayer or borrowing via a limited company.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                With so many lenders offering different criteria and rates, professional guidance can save you time and money – and help you avoid common pitfalls.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Why we recommend L&amp;C – London &amp; Country Mortgages</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                At Integra-Estates – the agent you can trust – we've partnered with L&amp;C, the UK's No.1 fee-free mortgage broker. Their team of specialist advisers can compare buy-to-let remortgage deals from over 90 lenders, including exclusive rates not available elsewhere.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Whether you're a first-time landlord or a seasoned investor, L&amp;C's service is completely free, and they'll support you from initial comparison through to completion.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Ready to review your buy-to-let mortgage?</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Remortgaging could help you unlock better value, grow your portfolio, or simply give peace of mind. At Integra-Estates – the agent you can trust – we're here to guide you every step of the way.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* New Build Modal */}
      {isNewBuildModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeNewBuildModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeNewBuildModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                What is a new build mortgage?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Buying a new build home — especially one that's never been lived in — is an exciting step. Whether you're buying off-plan (before it's built) or moving into a freshly completed home, the mortgage process can differ slightly from buying an older property.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                At Integra-Estates, we're the agent you can trust, and we've partnered with L&amp;C Mortgages, the UK's largest fee-free mortgage broker, to ensure you get the guidance and support you need when buying a new build.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                How Do New Build Mortgages Work?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                A new build mortgage works much like a standard mortgage, but lenders often apply different rules. For example:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You may need a larger deposit — often 10–15%, especially for new build flats</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Mortgage offers need to be valid longer — often up to 6 or 9 months if buying off-plan</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Builder incentives (e.g. free appliances or legal fee contributions) can impact how lenders value the property</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>If there are build delays, your mortgage offer may expire, meaning you'll need a new one</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                This is where L&amp;C's expertise becomes essential. Their experienced team knows which lenders are more flexible with new builds, and they'll find the best deal based on your circumstances, timeline, and deposit.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Why Buy a New Build Home?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Pros:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Energy efficient, modern construction</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>10-year structural warranty</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Personalise fittings and finishes</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>No upward chain — faster and simpler buying process</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Things to Consider:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Prices may be higher than older homes</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Reservation fees are usually non-refundable</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Delays in build completion can affect your move-in date</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Ready to Get Started?
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you're buying a new build home — especially off-plan — speak to L&amp;C early. With Integra-Estates and L&amp;C by your side, you'll have a knowledgeable team making sure everything runs smoothly, from viewing to handing over the keys.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Buy To Let Interest Only Modal */}
      {isBuyToLetInterestOnlyModalOpen && (
        <div className="index-module__fAGA4q__modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }} onClick={closeBuyToLetInterestOnlyModal}>
          <div style={{ backgroundColor: '#141414', borderRadius: '12px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <div className="index-module__fAGA4q__topLine" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10001 }}>
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 24 24" 
                className="index-module__fAGA4q__closeBtn" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={closeBuyToLetInterestOnlyModal}
                style={{ cursor: 'pointer', color: '#6c9830' }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <div className="index-module__fAGA4q__modalContent" style={{ padding: '3rem', paddingTop: '4rem' }}>
              <h2 className="text-image-and-links-module__UZn4Va__modalHeading" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#6c9830' }}>
                What is a buy to let interest only mortgage?
              </h2>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>What Is a Buy-to-Let Interest-Only Mortgage?</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                If you're looking to invest in property, a buy-to-let interest-only mortgage is one of the most popular options for landlords — especially those focused on generating rental income.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                At Integra-Estates, we're the agent you can trust, and when it comes to financing your investment, we've partnered with L&amp;C Mortgages, the UK's largest fee-free mortgage broker, to ensure you get honest, expert advice tailored to your goals.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>How Does It Work?</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                With an interest-only mortgage, you only pay the interest on the loan each month — not the loan itself. This keeps your monthly repayments much lower than a typical repayment mortgage, which can boost your rental profit margins.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                However, at the end of the mortgage term, you'll still owe the full original loan amount — so you'll need a plan in place to repay it. Most landlords either sell the property or remortgage to repay the balance.
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Why Landlords Choose Interest-Only</strong>
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Lower monthly repayments – maximising rental income</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Cash flow flexibility – useful for maintaining or expanding portfolios</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Tax benefits – landlords may be able to offset mortgage interest against rental income (seek independent tax advice)</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Capital appreciation strategy – investors may rely on rising property values over time</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                <strong>Things to Consider</strong>
              </p>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                While interest-only mortgages offer short-term advantages, they also carry long-term risks:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You don't build equity in the property during the mortgage term</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You'll need a clear repayment strategy — sale, savings, or refinancing</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>Some lenders have stricter criteria, especially for first-time landlords</span>
                </li>
                <li className="text-image-and-links-module__UZn4Va__modalText" style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(108, 152, 48)', height: '2.8rem', width: '2.8rem', minHeight: '2.8rem', minWidth: '2.8rem', fontSize: '2.8rem', marginRight: '1rem' }}>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                  </svg>
                  <span style={{ color: 'white', lineHeight: 1.6 }}>You'll usually need a higher deposit — often 25% or more</span>
                </li>
              </ul>
              <p className="text-image-and-links-module__UZn4Va__modalText" style={{ marginBottom: '0.5rem', lineHeight: 1.6, color: 'white' }}>
                Whether you're purchasing your first investment or remortgaging to grow your portfolio, L&amp;C Mortgages are here to help. With clear, trustworthy advice and access to thousands of mortgage deals, your investment is in safe hands.
              </p>
            </div>
            <div style={{ padding: '0 3rem 3rem 3rem' }}>
              <p className="index-module__fAGA4q__footerText" style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" target="_blank" className="index-module__fAGA4q__link" style={{ color: '#6c9830', fontWeight: 'bold' }}><strong>0800 923 4018</strong></a> to speak to a mortgage expert
              </p>
              <a href="https://www.landc.co.uk/destination/partners/how-much-will-it-cost-calculator-integra-estates" target="_blank" style={{ display: 'block', textAlign: 'center' }}>
                <img className="index-module__fAGA4q__img" alt="l&c banner" src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/l%26c%20banner-1.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}