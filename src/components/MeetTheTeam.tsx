// React import not required with the automatic JSX runtime

export default function MeetTheTeam() {
  return (
    <>
      {/* Title above the section */}
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="ask-us-title" style={{ margin: '0 0 24px 0' }}>Meet the team</h2>
        </div>
      </div>

      {/* Section content with background */}
      <section
        id="meet-the-team"
        className="section"
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          padding: '60px 0',
          background:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/meet-the-team.jpg') center / cover no-repeat",
        }}
      >
        <div className="container" style={{ padding: 0, maxWidth: 'none', marginLeft: 'auto', marginRight: '10rem', width: '70%' }}>
          <article className="meet-article">
            <p style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              At Integra Estates, we truly believe our team is the heart and soul of our business,
              our dedication is what makes us stand out. Each member of our team is passionate
              about providing exceptional client care, always putting your needs first and going above and beyond
              to deliver an honest, trustworthy, and outstanding service to everyone we work with.
            </p>
            <p style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We understand that buying, selling, or renting a property can sometimes feel overwhelming, which is why our team is here to make the process as smooth and stress-free as possible. With a sincere commitment to your needs, we take pride in offering clear communication, reliable support, and expert guidance at every step of the way.
            </p>
            <p style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our team is not just professional — we are approachable, compassionate, and genuinely invested in ensuring you have a positive and rewarding experience with us. Find out more and meet the people who make Integra Estates what it is.
            </p>
          <div className="animated-module__Rnzt8a__btn" onClick={() => (window.location.href = 'https://integra-estates.com/meet-the-team')}>
            <div className="animated-module__Rnzt8a__title">Find out more...</div>
            <div className="animated-module__Rnzt8a__line">
              <span className="animated-module__Rnzt8a__lineBar" />
            </div>
          </div>
          </article>
        </div>
      </section>
    </>
  )
}