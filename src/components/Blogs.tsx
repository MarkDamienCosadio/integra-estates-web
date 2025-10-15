import { Link } from 'react-router-dom'

export default function Blogs() {
  const featuredBlogs = [
    {
      image: 'https://storage.googleapis.com/integra-estates/Integra-estates%20Sold.jpg',
      title: 'When Is the Best Time to Sell Your Home?',
      link: '/blogs/Best-Time-To-Sell',
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Green%20energy.jpg',
      title:
        'What EPC Changes Mean for Landlords – And Why South East London & Kent Sellers Should Act Now',
      link: '/blogs/EPC-Changes',
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Outdoor%20space.jpg',
      title: 'Why Outdoor Space is Key In Todays Property Market',
      link: '/blogs/Outdoor-Space',
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/5%20years%20on.jpg',
      title: 'From Lockdown to Now: How the Housing Market Has Evolved',
      link: '/blogs/Five-years-after-Covid',
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Hand%20House.jpg',
      title:
        'Homebuying Expectations vs. Conveyancing Realities: Why The Process Takes Time.',
      link: '/blogs/Homebuying-Expectations',
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Traffic.jpg',
      title: 'Properties on Main Roads vs Quieter Roads: What You Need to Know',
      link: '/blogs/main-road-properties',
    },
  ]
  return (
    <>
      {/* Title above the section */}
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <Link to="/blog-posts" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className="ask-us-title" style={{ margin: '0 0 24px 0', transition: 'color 0.2s ease' }}>
              Latest Blogs
            </h2>
          </Link>
        </div>
      </div>

      {/* Section content with background */}
      <section
        id="blogs"
        className="section"
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          padding: '60px 0',
          background:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/blogs-bg.jpg') center / cover no-repeat",
        }}
      >
        <div className="container" style={{ padding: 0, maxWidth: 'none', marginLeft: 'auto', marginRight: '10rem', width: '70%' }}>
          <article className="blogs-article">
            <p style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Stay informed with our latest insights into the property market. Our blog covers everything
              from market trends and investment strategies to home improvement tips and local area guides.
              Whether you're buying, selling, or just interested in property, our expert articles will
              keep you up-to-date with valuable information and advice.
            </p>
            <p style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Check back regularly for new content and expert perspectives on the ever-changing
              property landscape. We're committed to sharing our knowledge to help you make informed
              decisions about your property journey.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <h3 className="blogs-section-title" style={{ marginBottom: '1rem' }}>Featured Articles</h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '16px',
                }}
              >
                {featuredBlogs.map((blog, index) => (
                  <li key={index}>
                    <Link
                      to={blog.link}
                      className="blog-card"
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'inherit',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 8,
                        padding: '12px 16px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      <span className="blog-title" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {blog.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}