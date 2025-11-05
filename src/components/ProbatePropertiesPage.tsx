import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'
import ScrollHint from './ScrollHint'

export default function ProbatePropertiesPage() {
  return (
    <>
      {/* Hero section styled like Community Engagement */}
      <section className="mortgage-advice-hero hero">
        <video
          className="hero__video visible"
          src="/video/probate-video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Probate Properties"
        />
        <div className="hero__overlay">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-tag animate-in-up">Probate Properties</h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Supporting You Section */}
      <AnimatedSection>
        <section
          id="supporting-you"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}
            >
              Supporting You Every Step Of The Way
            </h2>
            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                At Integra-Estates, we understand how overwhelming things can feel after losing a loved one.
                The pressure of managing property matters during such an emotional time can add significant stress.
                Whether you’re an executor navigating the legal responsibilities or a family member simply unsure of
                where to begin, we’re here to help with compassionate, expert support.
              </p>
              <p>
                Our experienced team is trained to handle these sensitive situations with the utmost care and discretion.
                We provide clear, straightforward advice to help you manage the journey ahead. From providing the prompt and
                accurate probate valuations required for legal proceedings, to stepping in with comprehensive property
                management for a vacant home—including security, maintenance, and preparations—we handle the practical details.
              </p>
            </article>
          </div>
       </section>
       </AnimatedSection>

      {/* Understanding Probate Section (moved directly below Supporting You) */}
      <AnimatedSection>
        <section
          id="understanding-probate"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.5rem' }}
            >
              Understanding Probate
            </h2>
            <p
              className="animate-in-up"
              style={{ color: '#cccccc', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              What it is and why it matters
            </p>
            <article
              className="animate-in-up"
              style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}
            >
              <p style={{ marginBottom: '1rem' }}>
                Probate is a legal process that gives someone, usually an executor or administrator, the authority to
                manage and distribute a deceased person's estate. It confirms the legal right to deal with their
                property, finances, and possessions.
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                Whether there is a valid will or not, probate ensures that everything is handled correctly and in line with UK law.
                This includes:
              </p>
              <ul style={{ margin: '0 0 1.25rem 1.25rem' }}>
                <li>Identifying and valuing all assets</li>
                <li>Paying outstanding debts and any inheritance tax due</li>
                <li>Distributing the remaining estate to the rightful beneficiaries</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                If the person left a will, the executor applies for a grant of probate. If there's no will, a close
                relative must apply for letters of administration.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Once granted, this legal document allows the executor or administrator to move forward, collecting assets,
                settling liabilities, and ensuring everything is passed on in accordance with the will or the rules of intestacy.
              </p>
              <p>
                At Integra-Estates, we help you understand each step of the probate estate process and ensure you're never
                left to face it alone.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      

      {/* Executor Support Cards Section (moved above Executor section) */}
      <AnimatedSection>
         {/* Local styles for probate cards and layout */}
         <style>{`
           #executor-support .probate-card {
             display: flex;
             flex-direction: column;
             align-items: center;
             justify-content: center;
             min-height: 180px;
             height: 100%;
             text-align: center;
             cursor: pointer;
             transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
             will-change: transform;
             flex: 0 1 260px;
           }
           #executor-support .probate-card:hover {
             transform: scale(1.03);
             box-shadow: 0 10px 28px rgba(0,0,0,0.24);
             border-color: #7aa63a;
           }

           /* Two-row flex layout with equal side spacing */
           #executor-support .probate-row {
             display: flex;
             justify-content: space-evenly;
             align-items: stretch;
             gap: 20px;
             margin-bottom: 40px;
             flex-wrap: nowrap;
           }
           /* Bottom row: tighter inner spacing while staying centered */
           #executor-support .probate-row.bottom {
             justify-content: center;
             gap: 12px;
           }

           /* Responsive: collapse to 2 columns, then 1 column */
           @media (max-width: 1024px) {
             #executor-support .probate-row {
               justify-content: center;
               flex-wrap: wrap;
               gap: 16px;
             }
           }
           @media (max-width: 640px) {
             #executor-support .probate-row {
               justify-content: center;
               flex-wrap: wrap;
               gap: 14px;
             }
           }
         `}</style>
        <section
          id="executor-support"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0', minHeight: '55vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '1.5rem' }}
            >
              How We Help During Probate
            </h2>
             <div className="probate-cards-container animate-in-up" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
               {/* Top row: 4 cards */}
               <div className="probate-row top">
                 {[
                   { title: 'The role of an executor', target: '#executor' },
                   { title: 'Unbiased recommendations', target: '#choose-solicitor' },
                   { title: 'Free property inspections and minor maintenance', target: '#free-inspections' },
                   { title: 'Preparing and selling probate property', target: '#preparing-selling' }
                 ].map((card, idx) => (
                   <article
                     key={card.title}
                     className="probate-card animate-in-up"
                     data-animate-delay={`${(idx + 1) * 120}`}
                     onClick={card.target ? () => {
                       document.querySelector(card.target)?.scrollIntoView({ 
                         behavior: 'smooth',
                         block: 'start'
                       });
                     } : undefined}
                     style={{
                       backgroundColor: '#ffffff',
                       border: '2px solid var(--accent)',
                       borderRadius: '12px',
                       padding: '1rem',
                       boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                       color: '#111'
                     }}
                   >
                     <h3 style={{
                       margin: 0,
                       fontSize: '1.15rem',
                       lineHeight: 1.3,
                       fontFamily: 'trajan-pro-3, serif',
                       color: '#333',
                       textTransform: 'none'
                     }}>
                       {card.title}
                     </h3>
                   </article>
                 ))}
               </div>

              {/* Bottom row: 3 cards, evenly spaced */}
              <div className="probate-row bottom">
                {[
                  { title: 'Accurate & Compliant Probate Valuations', target: '#probate-services' },
                  { title: 'Ethical house clearance services', target: '#ethical-clearance' },
                  { title: 'Personal support from start to finish', target: '#probate-services' }
                ].map((card, idx) => (
                  <article
                    key={card.title}
                    className="probate-card animate-in-up"
                    data-animate-delay={`${(idx + 5) * 120}`}
                    onClick={card.target ? () => {
                      document.querySelector(card.target)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    } : undefined}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '2px solid var(--accent)',
                      borderRadius: '12px',
                      padding: '1rem',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
                      color: '#111'
                    }}
                  >
                    <h3 style={{
                      margin: 0,
                      fontSize: '1.15rem',
                      lineHeight: 1.3,
                      fontFamily: 'trajan-pro-3, serif',
                      color: '#333',
                      textTransform: 'none'
                    }}>
                      {card.title}
                    </h3>
                  </article>
                ))}
              </div>
             </div>
          </div>
       </section>
      </AnimatedSection>


      

      {/* Executor Section: Two-column layout with article and image */}
      <AnimatedSection>
        {/* Local styles for executor section layout */}
        <style>{`
          #executor .executor-grid {
            display: block;
          }
          #executor img.executor-image {
            float: right;
            width: min(40%, 420px);
            height: auto;
            margin: 0 0 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px, rgba(108, 152, 48, 0.92) 12px 12px 3px -12px, rgba(108, 152, 48, 0.90) 12px 12px 4px -12px, rgba(108, 152, 48, 0.88) 12px 12px 5px -12px, rgba(108, 152, 48, 0.85) 12px 12px 4px -13px, rgba(108, 152, 48, 0.80) 12px 12px 6px -11px, rgba(108, 152, 48, 0.75) 12px 12px 8px -11px, rgba(108, 152, 48, 0.70) 12px 12px 10px -11px, rgba(108, 152, 48, 0.65) 12px 12px 12px -11px, rgba(108, 152, 48, 0.60) 12px 12px 14px -11px; /* green glow (stacked) */
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #executor img.executor-image {
              float: none;
              width: 100%;
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
        <section
          id="executor"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.25rem' }}
            >
              The role of an executor in probate
            </h2>
            <h3
              className="animate-in-up"
              style={{ color: '#cccccc', textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.75rem' }}
            >
              trusted, important, and often overwhelming
            </h3>

            <div className="executor-grid">
              <article className="left animate-in-up" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
                <img
                  src="/images/probate-exec.jpg"
                  alt="Executor reviewing probate documents"
                  className="executor-image"
                  loading="lazy"
                />
                <p style={{ marginBottom: '1rem' }}>
                  Being named as an executor is a mark of trust and respect, it means your loved one believed you were the right person to manage their affairs.
                  But with this comes a number of legal responsibilities that can feel overwhelming, especially during a time of grief.
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  In the UK, the key duties of an executor during probate include:
                </p>
                <ul style={{ margin: '0 0 1.25rem 1.25rem' }}>
                  <li>Identifying and valuing all assets and liabilities of the estate</li>
                  <li>Paying outstanding debts, funeral expenses, and any inheritance tax owed</li>
                  <li>Distributing the estate to beneficiaries according to the will—or according to intestacy laws, if there is no will</li>
                  <li>Maintaining and overseeing any property within the estate until it can be sold or transferred</li>
                </ul>
                <p style={{ marginBottom: '1rem' }}>
                  Executors are legally entitled to seek help from professionals such as probate solicitors and estate agents.
                  In fact, many do because working with experienced experts helps ensure the estate is managed properly, efficiently, and in full compliance with HMRC and legal standards.
                </p>
                <p>
                  At Integra-Estates, we work alongside executors with care, transparency, and compassion—lightening the load while ensuring no detail is missed.
                </p>
              </article>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Choosing the Right Probate Solicitor Section (below Executor) */}
      <AnimatedSection>
        <style>{`
          #choose-solicitor .solicitor-image {
            float: left;
            width: min(42%, 420px);
            height: auto;
            margin: 0 1.5rem 1rem 0;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px, rgba(108, 152, 48, 0.92) 12px 12px 3px -12px, rgba(108, 152, 48, 0.90) 12px 12px 4px -12px, rgba(108, 152, 48, 0.88) 12px 12px 5px -12px, rgba(108, 152, 48, 0.85) 12px 12px 4px -13px, rgba(108, 152, 48, 0.80) 12px 12px 6px -11px, rgba(108, 152, 48, 0.75) 12px 12px 8px -11px, rgba(108, 152, 48, 0.70) 12px 12px 10px -11px, rgba(108, 152, 48, 0.65) 12px 12px 12px -11px, rgba(108, 152, 48, 0.60) 12px 12px 14px -11px; /* green glow (stacked) */
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #choose-solicitor .solicitor-image {
              float: none;
              width: 100%;
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
        <section
          id="choose-solicitor"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.25rem' }}
            >
              Choosing the right probate solicitor
            </h2>
            <h3
              className="animate-in-up"
              style={{ color: '#cccccc', textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.75rem' }}
            >
              why it matters more than you think
            </h3>

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
              <img
                src="/images/good-solicitor.jpg"
                alt="Trusted probate solicitor"
                className="solicitor-image"
                loading="lazy"
              />
              <p style={{ marginBottom: '1rem' }}>
                The probate process can be legally complex, emotionally draining, and time-sensitive. Having the right probate solicitor by your side makes all the difference, not just for handling the legal paperwork, but for ensuring the entire process is managed with empathy, professionalism, and care.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                At Integra-Estates, we believe in doing things the right way. We do not accept referral fees from solicitors. When we recommend a legal professional, it’s based solely on merit, experience, and the quality of care they provide.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Over the years, we've developed trusted relationships with some of the UK’s leading probate solicitors, including top 50 law firms and respected local experts. Whether you need the broad resources of a national practice or the personalised service of a local firm, we carefully connect you with professionals who can guide you through the process effectively and compassionately.
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                Every estate is different, but the need for a knowledgeable, trustworthy solicitor remains constant. The right legal expert will help you:
              </p>
              <ul style={{ margin: '0 0 1.25rem 1.25rem' }}>
                <li>Navigate the probate process with clarity and confidence</li>
                <li>Avoid unnecessary delays or legal errors</li>
                <li>Handle sensitive matters, such as inheritance disputes or tax issues, with discretion and care</li>
              </ul>
              <p>
                At Integra-Estates, we’re here to support you at every stage—with genuine advice, honest guidance, and a commitment to doing what’s right for you and your family. Because during difficult times, you deserve nothing less than people who truly care.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>
      


      {/* Our comprehensive probate property services (placed above Get In Touch) */}
      <AnimatedSection>
        <style>{`
          #probate-services .services-image {
            float: left;
            width: min(42%, 420px);
            height: auto;
            margin: 0 1.5rem 1rem 0;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px, rgba(108, 152, 48, 0.92) 12px 12px 3px -12px, rgba(108, 152, 48, 0.90) 12px 12px 4px -12px, rgba(108, 152, 48, 0.88) 12px 12px 5px -12px, rgba(108, 152, 48, 0.85) 12px 12px 4px -13px, rgba(108, 152, 48, 0.80) 12px 12px 6px -11px, rgba(108, 152, 48, 0.75) 12px 12px 8px -11px, rgba(108, 152, 48, 0.70) 12px 12px 10px -11px, rgba(108, 152, 48, 0.65) 12px 12px 12px -11px, rgba(108, 152, 48, 0.60) 12px 12px 14px -11px; /* green glow (stacked) */
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #probate-services .services-image {
              float: none;
              width: 100%;
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
        <section
          id="probate-services"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.25rem' }}
            >
              Our comprehensive probate property services.
            </h2>
            <h3
              className="animate-in-up"
              style={{ color: '#cccccc', textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.75rem' }}
            >
              Practical support when you need it most.
            </h3>

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
              <img
                src="/images/services-valuation.jpg"
                alt="Probate property valuation services"
                className="services-image"
                loading="lazy"
              />
              <p style={{ marginBottom: '1rem' }}>
                Obtaining a probate property valuation is not just a box-ticking exercise, it’s a legal requirement that carries significant financial implications. An inaccurate valuation can lead to serious issues with inheritance tax, capital gains tax, and even delays in the probate process.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                At Integra-Estates, we offer free probate valuations that are:
              </p>
              <ul style={{ margin: '0 0 1.25rem 1.25rem' }}>
                <li>Accurate and fully compliant with HMRC probate requirements</li>
                <li>Based on current market conditions at the date of the deceased’s passing</li>
                <li>Supported with comparable evidence and detailed justification</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                Unlike some estate agents who might inflate valuations to satisfy beneficiaries or win instructions, we take a responsible and transparent approach. Our goal is to protect the estate’s integrity and not to make false promises.
              </p>
              <p>
                Executors have a legal obligation to provide HMRC with a true market valuation of the deceased’s assets, including any property. Working with a specialist probate estate agent like Integra-Estates ensures this crucial step is handled correctly, with the full backing of our local market knowledge and experience.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Free probate property inspections (below services) */}
      <AnimatedSection>
        <style>{`
          #free-inspections .inspections-media {
            float: left;
            width: min(42%, 440px);
            margin: 0 1.5rem 1rem 0;
            border-radius: 12px;
            overflow: hidden;
          }
          #free-inspections .inspections-media img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px,
                        rgba(108, 152, 48, 0.92) 12px 12px 3px -12px,
                        rgba(108, 152, 48, 0.90) 12px 12px 4px -12px,
                        rgba(108, 152, 48, 0.88) 12px 12px 5px -12px,
                        rgba(108, 152, 48, 0.85) 12px 12px 4px -13px,
                        rgba(108, 152, 48, 0.80) 12px 12px 6px -11px,
                        rgba(108, 152, 48, 0.75) 12px 12px 8px -11px,
                        rgba(108, 152, 48, 0.70) 12px 12px 10px -11px,
                        rgba(108, 152, 48, 0.65) 12px 12px 12px -11px,
                        rgba(108, 152, 48, 0.60) 12px 12px 14px -11px;
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #free-inspections .inspections-media {
              float: none;
              width: 100%;
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
        <section
          id="free-inspections"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '0.25rem' }}
            >
              Free probate property inspections
            </h2>
            <h3
              className="animate-in-up"
              style={{ color: '#cccccc', textAlign: 'center', fontSize: '1.25rem', marginBottom: '1.75rem' }}
            >
              Protecting the property and your peace of mind
            </h3>

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
              <div className="inspections-media">
                <img
                  src="/images/probate.png"
                  alt="Probate property inspections"
                  loading="lazy"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 30px, rgba(108, 152, 48, 0.92) 12px 12px 3px -12px, rgba(108, 152, 48, 0.90) 12px 12px 4px -12px, rgba(108, 152, 48, 0.88) 12px 12px 5px -12px, rgba(108, 152, 48, 0.85) 12px 12px 4px -13px, rgba(108, 152, 48, 0.80) 12px 12px 6px -11px, rgba(108, 152, 48, 0.75) 12px 12px 8px -11px, rgba(108, 152, 48, 0.70) 12px 12px 10px -11px, rgba(108, 152, 48, 0.65) 12px 12px 12px -11px, rgba(108, 152, 48, 0.60) 12px 12px 14px -11px' }}
                />
              </div>

              <p style={{ marginBottom: '1rem' }}>
                Unoccupied probate properties can quickly become vulnerable to issues like vandalism, burglary, damp, and general deterioration. What’s more, most insurance providers require regular inspections of vacant homes, often weekly or fortnightly to maintain valid cover.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                At Integra-Estates, we provide completely free property inspections for probate properties, giving executors and families vital peace of mind during what can be a stressful and uncertain time.
              </p>
              <p style={{ marginBottom: '0.75rem' }}>Our inspections include:</p>
              <ul style={{ margin: '0 0 1.25rem 1.25rem' }}>
                <li>Time-stamped, GPS-verified photos of every visit (including longitude and latitude)</li>
                <li>Detailed written reports sent via email to the executor, solicitor, or designated family member</li>
                <li>Security and maintenance checks to ensure the home remains safe and in good condition</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                These inspections are not just a courtesy, they’re often a requirement for probate property insurance compliance. With many executors living far away or managing multiple responsibilities, our local presence ensures the property is being properly looked after without placing extra burden on the family.
              </p>
              <p>
                Our aim is to treat every probate property with the same care and diligence we would offer our own family. This service is just one way we go the extra mile to support you with trust, transparency, and professionalism.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Preparing and selling probate property (below free inspections) */}
      <AnimatedSection>
        <style>{`
          #preparing-selling .columns {
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;
          }
          #preparing-selling .col-text {
            flex: 1 1 58%;
            color: #ffffff;
            font-size: 1.15rem;
            line-height: 1.8;
          }
          #preparing-selling .col-image {
            flex: 1 1 42%;
          }
          #preparing-selling .col-image img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px,
                        rgba(108, 152, 48, 0.92) 12px 12px 3px -12px,
                        rgba(108, 152, 48, 0.90) 12px 12px 4px -12px,
                        rgba(108, 152, 48, 0.88) 12px 12px 5px -12px,
                        rgba(108, 152, 48, 0.85) 12px 12px 4px -13px,
                        rgba(108, 152, 48, 0.80) 12px 12px 6px -11px,
                        rgba(108, 152, 48, 0.75) 12px 12px 8px -11px,
                        rgba(108, 152, 48, 0.70) 12px 12px 10px -11px,
                        rgba(108, 152, 48, 0.65) 12px 12px 12px -11px,
                        rgba(108, 152, 48, 0.60) 12px 12px 14px -11px;
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #preparing-selling .columns {
              flex-direction: column;
            }
            #preparing-selling .col-text,
            #preparing-selling .col-image {
              flex: 1 1 100%;
            }
          }
        `}</style>
        <section
          id="preparing-selling"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '1.5rem' }}
            >
              Preparing and selling probate property
            </h2>
            <div className="columns animate-in-up" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="col-text">
                <p style={{ marginBottom: '1rem' }}>
                  When it’s time to sell a probate property, the process can feel emotionally overwhelming and logistically complex. At Integra-Estates, we understand how sensitive this time can be. That’s why we handle every aspect of the sale with compassion, professionalism, and a focus on achieving the very best outcome for the estate and its beneficiaries.
                </p>
                <p>
                  We manage the full sales journey ensuring your loved one’s home is presented with dignity while maximising its value through exceptional marketing and support.
                </p>
              </div>
              <div className="col-image">
                <img
                  src="/images/KeyHole.jpg"
                  alt="Keyhole close-up symbolising careful preparation and selling of probate property"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Proactive Probate Property Care (below preparing-selling) */}
      <AnimatedSection>
        <style>{`
          /* Keep images in a right-side container; wrap text around the container */
          #proactive-care .care-media {
            float: right;
            width: min(42%, 420px);
            height: auto;
            margin: 0 0 2rem 1.5rem;
          }
          #proactive-care .care-media .stack {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          #proactive-care .care-media img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px,
                        rgba(108, 152, 48, 0.92) 12px 12px 3px -12px,
                        rgba(108, 152, 48, 0.90) 12px 12px 4px -12px,
                        rgba(108, 152, 48, 0.88) 12px 12px 5px -12px,
                        rgba(108, 152, 48, 0.85) 12px 12px 4px -13px,
                        rgba(108, 152, 48, 0.80) 12px 12px 6px -11px,
                        rgba(108, 152, 48, 0.75) 12px 12px 8px -11px,
                        rgba(108, 152, 48, 0.70) 12px 12px 10px -11px,
                        rgba(108, 152, 48, 0.65) 12px 12px 12px -11px,
                        rgba(108, 152, 48, 0.60) 12px 12px 14px -11px;
            object-fit: cover;
          }
          @media (max-width: 900px) {
            #proactive-care .care-media {
              float: none;
              width: 100%;
              margin: 0 0 1rem 0;
            }
          }
        `}</style>
        <section
          id="proactive-care"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '1.5rem' }}
            >
              Proactive Probate Property Care
            </h2>
            <div className="content animate-in-up" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="care-media">
                <div className="stack">
                  <img
                    src="/images/door-lock-407427_1280.jpg"
                    alt="Secure door lock representing proactive property protection"
                    loading="lazy"
                  />
                  <img
                    src="/images/Gardening image.jpg"
                    alt="Garden maintenance demonstrating care for exterior presentation"
                    loading="lazy"
                  />
                </div>
              </div>
              <article style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1rem' }}>
                  An empty property can quickly show signs of neglect, which may attract unwanted attention or lead to avoidable damage. That’s why, during our routine probate property inspections, we don’t just report issues, we can, where required, take action.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Our minor maintenance services are designed to ensure vacant probate properties remain secure, well maintained, and presentable, giving families peace of mind and helping preserve the value of the estate.
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  As part of this service, we can, but not limited to:
                </p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '1.25rem' }}>
                  <li>Change locks or secure access points to prevent unauthorised entry</li>
                  <li>Cut grass, clear pathways, and tidy the exterior to create the impression the property is occupied</li>
                  <li>Install timer-controlled lighting to enhance security and deter intruders</li>
                  <li>Turn off the mains water to prevent leaks or flooding</li>
                  <li>Set heating to a low level in colder months to reduce the risk of damp, mould, or burst pipes</li>
                </ul>
                <p style={{ marginBottom: '0.75rem' }}>
                  If additional repairs or security improvements are required, we:
                </p>
                <ul style={{ marginBottom: '1rem', paddingLeft: '1.25rem' }}>
                  <li>Provide a clear and detailed quote</li>
                  <li>Oversee the work using trusted local contractors</li>
                  <li>Supply before and after photographs for the executor’s records</li>
                </ul>
                <p>
                  Best of all, these essential preventative services are carried out free of charge (excluding contractor costs). At Integra-Estates, we treat every probate property as if it belonged to someone we truly care about, because in many ways, it does.
                </p>
              </article>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ethical house clearance (below proactive-care) */}
      <AnimatedSection>
        <style>{`
          #ethical-clearance .columns {
            display: flex;
            gap: 1.5rem;
            align-items: stretch;
          }
          #ethical-clearance .col-image {
            flex: 1 1 42%;
          }
          #ethical-clearance .col-image img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px, rgba(108, 152, 48, 0.92) 12px 12px 3px -12px, rgba(108, 152, 48, 0.90) 12px 12px 4px -12px, rgba(108, 152, 48, 0.88) 12px 12px 5px -12px, rgba(108, 152, 48, 0.85) 12px 12px 4px -13px, rgba(108, 152, 48, 0.80) 12px 12px 6px -11px, rgba(108, 152, 48, 0.75) 12px 12px 8px -11px, rgba(108, 152, 48, 0.70) 12px 12px 10px -11px, rgba(108, 152, 48, 0.65) 12px 12px 12px -11px, rgba(108, 152, 48, 0.60) 12px 12px 14px -11px;
            object-fit: cover;
          }
          #ethical-clearance .col-text {
            flex: 1 1 58%;
            color: #ffffff;
            font-size: 1.15rem;
            line-height: 1.8;
          }
          @media (max-width: 900px) {
            #ethical-clearance .columns {
              flex-direction: column;
            }
            #ethical-clearance .col-text,
            #ethical-clearance .col-image {
              flex: 1 1 100%;
            }
          }
        `}</style>
        <section
          id="ethical-clearance"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.2rem', marginBottom: '1.5rem' }}
            >
              Ethical house clearance.
            </h2>
            <div className="content animate-in-up" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="columns">
                <div className="col-image">
                  <img
                    src="/images/messy-room.jpg"
                    alt="Messy room before ethical house clearance"
                    loading="lazy"
                  />
                </div>
                <div className="col-text">
                  <article>
                    <p style={{ marginBottom: '1rem' }}>
                      Clearing a loved one’s home can be one of the most emotional steps in the probate journey. It’s not just furniture and personal items, it’s memories, sentiment, and a life once lived. At Integra-Estates, we understand the weight of this task, which is why we’ve partnered with an ethical house clearance company that treats every property and its contents with dignity and compassion.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      Our probate house clearance service ensures that useful items are redirected in a way that benefits others avoiding landfill wherever possible. The focus on rehoming items where they can make a meaningful difference:
                    </p>
                    <ul style={{ marginBottom: '1rem', paddingLeft: '1.25rem' }}>
                      <li>Clothing and furniture are donated to local charity shops</li>
                      <li>Unopened, in-date tinned food is delivered to community food banks</li>
                      <li>Reusable household goods are assessed for donation or repurposing</li>
                    </ul>
                    <p style={{ marginBottom: '1rem' }}>
                      This approach not only reduces waste but allows your loved one’s belongings to continue serving a purpose, providing support to families and charities in need.
                    </p>
                    <p>
                      By choosing Integra-Estates, you’re not just arranging a house clearance—you’re making a conscious, compassionate choice that gives back to the community while handling personal possessions with the utmost care.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
       </section>
     </AnimatedSection>

      {/* Get In Touch wrapped for uniform side spacing */}
      <AnimatedSection>
        <section className="mortgage-advice-section section" style={{ padding: '4rem 0' }}>
          <div className="mortgage-advice-container">
            <GetInTouchSection />
           </div>
         </section>
       </AnimatedSection>

      {/* ScrollHint widget for probate page */}
      <ScrollHint />
    </>
  )
}