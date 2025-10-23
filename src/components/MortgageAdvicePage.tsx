import ScrollHint from './ScrollHint'
import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

export default function MortgageAdvicePage() {
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
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ rowGap: 0 }}>
            <div className="mortgage-card" style={{ gridColumn: '1 / -1' }}>
              {/* Centered, full-width title across the grid */}
              <h2 className="ask-us-title" style={{ textAlign: 'center', margin: '0 auto', paddingBottom: 0 }}>
                Get Expert Mortgage Help Today
              </h2>

              {/* Centered article content */}
              <article
                className="mortgage-article"
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
      </section>

      {/* Mortgage Services section */}
      <section id="mortgage-services" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ rowGap: 0 }}>
            <h2 className="ask-us-title" style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0 auto' }}>
              Expert Mortgage Advice, When You Need It Most
            </h2>
            <h3 style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0.5rem auto 0' }}>
              In partnership with L&amp;C - the UK's Largest fee-free mortgage broker
            </h3>
            <article
              className="mortgage-article"
              style={{ gridColumn: '1 / -1', margin: '1rem auto 0', maxWidth: '1000px' }}
              aria-label="Mortgage services partnership details"
            >
              <p>
                At Integra Estates, we believe that exceptional estate agency is about more than just property, it’s about people. As an agency you can trust, we’re proud to partner with a company that shares our core values of honesty, reliability and outstanding customer care.
              </p>
              <p>
                That’s why we’ve chosen to work alongside L&amp;C Mortgages, the UK’s largest fee-free mortgage broker. In our view, they are truly the best at what they do.
              </p>
              <p>
                More than two million people have turned to L&amp;C for expert mortgage advice. Their approachable and knowledgeable advisers are available seven days a week, ready to guide you through the entire mortgage process with no fees to pay. Whether you’re a first-time buyer, moving home or refinancing, L&amp;C search across the entire mortgage market, including exclusive products not available elsewhere, to ensure you receive the very best deal.
              </p>
              <p>
                We understand how crucial it is to be in the strongest possible position when making an offer on a home. That’s why we encourage our clients to speak with L&amp;C early on, helping them feel prepared and financially confident when the right property comes along.
              </p>
              <p>
                We don’t believe in recommending just anyone. We only align ourselves with companies we trust wholeheartedly. L&amp;C’s exceptional reputation, unparalleled market access and unwavering commitment to customer service perfectly reflect the high standards we uphold at Integra Estates.
              </p>
              <p>
                Start your journey online using the link below or call L&amp;C today on <a href="tel:08009234018" aria-label="Call L and C Mortgages">0800 923 4018</a> to speak to a mortgage expert.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* First time purchase section */}
      <section id="first-time-purchase" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            <AnimatedSection>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/first-time-buyers.jpg" alt="First-time buyers" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </AnimatedSection>
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
                <h3>
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
                    <a href="#" className="cta" aria-label="Why a Mortgage in Principle Should Be Your First Step?">Why a Mortgage in Principle Should Be Your First Step?</a>
                    <a href="#" className="cta" aria-label="Which first time buyer mortgage is right for me?">Which first time buyer mortgage is right for me?</a>
                    <a href="#" className="cta" aria-label="Click here for Free Mortgage Advice">Click here for Free Mortgage Advice</a>
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
                <h3>Time to Re-Mortgage? Let's Make It Work for You</h3>
                <article className="mortgage-article ma-prep" aria-label="Re-mortgage guidance for homeowners">
                  <p>Your mortgage should work around your life, not the other way round. Whether your fixed rate is coming to an end, you're looking to release equity, or simply want a better deal, remortgaging can be a powerful way to take control of your finances.</p>
                  <p>L&C's expert advisers can help you find the remortgage product that best suits your personal circumstances. And because their advice is completely fee-free, you'll never pay a penny for their support.</p>
                  <p>Most importantly, L&C provides a process that is both stress free and jargon free. Their advisers are available seven days a week to discuss your needs, answer your questions and offer clear, honest guidance, always with your best interests at heart.</p>
                  <p>At Integra Estates, we only recommend services we would genuinely use ourselves. L&C shares our core values of honesty, transparency and client care, which is exactly why we trust them to help our clients make sound financial decisions.</p>
                  <p>So, whether you're remortgaging to save money, restructure your finances or release funds, let L&C take care of the hard work and help you move forward with confidence.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="Why remortgage?">Why remortgage?</a>
                    <a href="#" className="cta" aria-label="Which remortgage is right for me?">Which remortgage is right for me?</a>
                    <a href="#" className="cta" aria-label="Click here for Free Remortgage Advice">Click here for Free Remortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
            {/* Right column: image */}
            <AnimatedSection>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/remortgage.jpg" alt="Re-mortgage" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Moving Home section */}
      <section id="moving-home" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            <AnimatedSection>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/moving-home.jpg" alt="Moving Home" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </AnimatedSection>
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
                <h3>Your Moving Mortgage</h3>
                <article className="mortgage-article ma-prep" aria-label="Moving home mortgage guidance">
                  <p>When moving home, one option you might consider is porting your existing mortgage, which means transferring your current mortgage deal to your new property. This can seem like a convenient choice, especially if you're on a favourable rate or hoping to avoid early repayment charges. However, while porting can work well for some, it's not always the most cost-effective or flexible solution.</p>
                  <p>For example, if you're moving to a larger property and need to borrow more, your existing lender might not offer competitive terms on the additional borrowing. Or you may be planning improvements to your new home and require a mortgage that supports this level of flexibility. Even small changes in your circumstances, such as income or credit status, could impact your ability to port the mortgage at all.</p>
                  <p>That's where London and Country Mortgages (L&C) can help. As the UK's largest fee-free mortgage broker, L&C provides a completely impartial service, offering access to more lenders and products than any other broker, including some exclusive deals you won't find on the high street.</p>
                  <p>Whether you are looking to port your current mortgage or explore options for a brand new one, L&C's expert advisers are on hand to guide you every step of the way. With a short, no-obligation phone call, they will take the time to understand your circumstances and help you find the best path forward, potentially saving you thousands over the life of your mortgage.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="Why move your mortgage?">Why move your mortgage?</a>
                    <a href="#" className="cta" aria-label="Which moving mortgage is right for me?">Which moving mortgage is right for me?</a>
                    <a href="#" className="cta" aria-label="Click here for Free Moving Mortgage Advice">Click here for Free Moving Mortgage Advice</a>
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
                <h3>A Landlord's Guide to Smart Financing</h3>
                <article className="mortgage-article ma-prep" aria-label="Buy to let mortgage guidance">
                  <p>Whether you're an experienced landlord expanding your portfolio or taking your first step into the rental market, securing the right buy to let mortgage is key to maximising your investment returns.</p>
                  <p>At Integra Estates, the agent you can trust, we know your in good hands with L&C's dedicated experts who have supported thousands of landlords across the UK. They know the market inside out and can guide you through every stage, from understanding lender criteria and affordability assessments to choosing between interest only and repayment options.</p>
                  <p>Buy to let mortgages often come with added layers of complexity, but with L&C, the process is made simple and efficient. From your initial enquiry to completion, their team takes care of the detail, allowing you to focus on what really matters, securing the right property and making a smart investment.</p>
                  <p>If you're considering a buy to let mortgage or want to review your current deal, speak with L&C today and benefit from expert guidance and honest advice trusted by landlords nationwide.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-end' }}>
                    <a href="#" className="cta" aria-label="Why buy to let?">Why buy to let?</a>
                    <a href="#" className="cta" aria-label="Which buy to let mortgage is right for me?">Which buy to let mortgage is right for me?</a>
                    <a href="#" className="cta" aria-label="Click here for Free Buy to Let Mortgage Advice">Click here for Free Buy to Let Mortgage Advice</a>
                  </div>
                </article>
              </div>
            </AnimatedSection>
            {/* Right column: image */}
            <AnimatedSection>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/buy-to-let.jpg" alt="Buy To Let" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New Build Homes section */}
      <section id="new-build-homes" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'stretch', minHeight: '300px' }}>
            {/* Left column: image */}
            <AnimatedSection>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/new-home.jpg" alt="New Build Homes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </AnimatedSection>
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
                <h3>From New Build Dream to Reality</h3>
                <article className="mortgage-article ma-prep" aria-label="New build homes mortgage guidance">
                  <p>Whether you're an experienced landlord expanding your portfolio or taking your first step into the rental market, securing the right buy to let mortgage is key to maximising your investment returns.</p>
                  <p>At Integra Estates, the agent you can trust, we know your in good hands with L&C's dedicated experts who have supported thousands of landlords across the UK. They know the market inside out and can guide you through every stage, from understanding lender criteria and affordability assessments to choosing between interest only and repayment options.</p>
                  <p>Buy to let mortgages often come with added layers of complexity, but with L&C, the process is made simple and efficient. From your initial enquiry to completion, their team takes care of the detail, allowing you to focus on what really matters, securing the right property and making a smart investment.</p>
                  <p>If you're considering a buy to let mortgage or want to review your current deal, speak with L&C today and benefit from expert guidance and honest advice trusted by landlords nationwide.</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', justifyContent: 'flex-start' }}>
                    <a href="#" className="cta" aria-label="Why new build homes?">Why new build homes?</a>
                    <a href="#" className="cta" aria-label="Which new build mortgage is right for me?">Which new build mortgage is right for me?</a>
                    <a href="#" className="cta" aria-label="Click here for Free New Build Mortgage Advice">Click here for Free New Build Mortgage Advice</a>
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
    </>
  )
}