import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

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
          style={{ padding: '3rem 0' }}
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
              style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}
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
          style={{ padding: '3rem 0', minHeight: '55vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
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
                   'The role of an executor',
                   'Unbiased recommendations',
                   'Free property inspections and minor maintenance',
                   'Preparing and selling probate property'
                 ].map((title, idx) => (
                   <article
                     key={title}
                     className="probate-card animate-in-up"
                     data-animate-delay={`${(idx + 1) * 120}`}
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
                       {title}
                     </h3>
                   </article>
                 ))}
               </div>

               {/* Bottom row: 3 cards, evenly spaced */}
               <div className="probate-row bottom">
                 {[
                   'Accurate & Compliant Probate Valuations',
                   'Ethical house clearance services',
                   'Personal support from start to finish'
                 ].map((title, idx) => (
                   <article
                     key={title}
                     className="probate-card animate-in-up"
                     data-animate-delay={`${(idx + 5) * 120}`}
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
                       {title}
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
            box-shadow: 0 8px 22px rgba(0,0,0,0.25);
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
          style={{ padding: '3rem 0' }}
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
              <article className="left animate-in-up" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8 }}>
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
            box-shadow: 0 8px 22px rgba(0,0,0,0.25);
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
          style={{ padding: '3rem 0' }}
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

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8 }}>
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
            box-shadow: 0 8px 22px rgba(0,0,0,0.25);
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
          style={{ padding: '3rem 0' }}
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

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8 }}>
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
          #free-inspections .img-stack {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          #free-inspections .inspections-media img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            box-shadow: 0 8px 22px rgba(0,0,0,0.25);
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
          style={{ padding: '3rem 0' }}
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

            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <div
                className="inspections-media text-with-image-module__ComfDq__imgContainer text-with-image-module__ComfDq__solocator text-with-image-module__ComfDq__textImgLeft"
              >
                <div className="img-stack">
                  <img
                    className="text-with-image-module__ComfDq__img2 text-with-image-module__ComfDq__imgSolocator text-with-image-module__ComfDq__solocatorImg1"
                    alt="image of a house using the solocator app"
                    src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/Solocator-2024-05-28%2014-11-14%20(1).jpg"
                    loading="lazy"
                  />
                  <img
                    className="text-with-image-module__ComfDq__img2 text-with-image-module__ComfDq__imgSolocator text-with-image-module__ComfDq__solocatorImg2"
                    alt="Traditional hallway with wooden flooring and view into dining room, photographed by a Beckenham estate agent to showcase interior character and homely charm."
                    src="https://integra-estates-cms.nw.r.appspot.com//api/media/file/Solocator-2024-05-28%2014-09-34%20(1).jpg"
                    loading="lazy"
                  />
                </div>
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

       {/* Only include Get In Touch for now */}
       <AnimatedSection>
         <GetInTouchSection />
       </AnimatedSection>
    </>
  )
}