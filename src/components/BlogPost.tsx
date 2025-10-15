import { Link } from 'react-router-dom'

export default function BlogPost() {
  const featuredBlogs = [
    {
      image: 'https://storage.googleapis.com/integra-estates/Integra-estates%20Sold.jpg',
      title: 'When Is the Best Time to Sell Your Home?',
      link: '/blogs/Best-Time-To-Sell'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Green%20energy.jpg',
      title: 'What EPC Changes Mean for Landlords – And Why South East London & Kent Sellers Should Act Now',
      link: '/blogs/EPC-Changes'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Outdoor%20space.jpg',
      title: 'Why Outdoor Space is Key In Todays Property Market',
      link: '/blogs/Outdoor-Space'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/5%20years%20on.jpg',
      title: 'From Lockdown to Now: How the Housing Market Has Evolved',
      link: '/blogs/Five-years-after-Covid'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Hand%20House.jpg',
      title: 'Homebuying Expectations vs. Conveyancing Realities: Why The Process Takes Time.',
      link: '/blogs/Homebuying-Expectations'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Traffic.jpg',
      title: 'Properties on Main Roads vs Quieter Roads: What You Need to Know',
      link: '/blogs/main-road-properties'
    }
  ]

  const otherBlogs = [
    {
      image: 'https://storage.googleapis.com/integra-estates/Virtual%20property%20staging.jpg',
      title: 'Digital Photo Staging',
      link: '/blogs/PhotoStaging2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/June%202025%20Property%20report.png',
      title: 'June Property Market Report 2025',
      link: '/blogs/june-2025-Property-Report'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Mortgage%20Market%20Update%20%E2%80%93%20Blogg.png',
      title: 'Your Insight to the mortgage market',
      link: '/blogs/Mortgage-Update-June-2025'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Damp%20blog.png',
      title: 'Damp in Property: Identifying Issues and Seeking Independent Advice',
      link: '/blogs/Damp'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Knotweed.png',
      title: 'Japanese Knotweed: The Hidden Threat to Your Property Sale',
      link: '/blogs/Japanese-Knotweed'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Spray%20foam%20insulation%20Blog.png',
      title: 'Thinking About Spray Foam Insulation? Why It Could Derail Your Property Sale in South East London and Kent',
      link: '/blogs/Spray-Foam'
    }
  ]

  return (
    <>
      {/* Title above the section */}
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h1 className="blogs-main-title">Our Blogs</h1>
        </div>
      </div>

      {/* Featured Blogs Section */}
      <section className="blogs-section">
        <h2 className="blogs-section-title">Our Featured Blogs</h2>
        <div className="blogs-grid">
          {featuredBlogs.map((blog, index) => (
            <Link to={blog.link} key={index} className="blog-card">
              <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }} />
              <h3 className="blog-title">{blog.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="blogs-section">
        <h2 className="blogs-section-title">Our Other Blogs</h2>
        <div className="blogs-grid">
          {otherBlogs.map((blog, index) => (
            <Link to={blog.link} key={index} className="blog-card">
              <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }} />
              <h3 className="blog-title">{blog.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="blogs-pagination">
        <span className="current-page">1</span>
        {[2, 3, 4, 5, 6].map(page => (
          <Link key={page} to={`/blog-posts?page=${page}`} className="page-link">
            {page}
          </Link>
        ))}
        <Link to="/blog-posts?page=2" className="page-link">Next</Link>
        <Link to="/blog-posts?page=7" className="page-link">Last</Link>
        <span className="total-pages">of 7</span>
      </div>

      {/* Let's Talk Section */}
      <section className="lets-talk-section">
        <h2 className="lets-talk-title">Let's Talk</h2>
        <p className="lets-talk-text">
          If you want to discuss your property, plans for the future, or just want some friendly advice.
          There'll be no pressure, Just equal measures of common sense and expert advice to point you in
          the right direction.
        </p>
        <Link to="/contact" className="get-in-touch-btn">Get In Touch</Link>
      </section>
    </>
  )
}