import ScrollHint from './ScrollHint'
import GetInTouchSection from './GetInTouchSection'
import AnimatedSection from './AnimatedSection'
import { useState } from 'react'

export default function MeetTheTeamPage() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const [isClosing, setIsClosing] = useState(false)

  const teamMembers = [
    {
      id: 'tom',
      firstName: 'Tom',
      lastName: 'Bailey',
      position: 'Director',
      image: '/images/tom.jpg',
      info: `Thomas established Integra-estates with the clear vision of providing exceptional customer service while maintaining the highest standards of honesty and integrity. Thomas saw a gap in the property market, early in his property career he noticed many companies were more focused on making quick profits than providing clients with personalised service and support which they deserve. Thomas believed that by prioritising the needs and concerns of clients, Integra-estates could build a reputation for excellence and become a leader in the industry.

Thomas's commitment to exceptional customer service is grounded in the belief that a property transaction is more than just a financial transaction - it is a significant life event, whether buying or selling a property, clients are often making a significant investment and the experience can be emotional and stressful. Thomas believed that by being attentive to their client's needs and concerns and providing them with the support and guidance they need throughout the process, Integra-estates could make the experience as smooth and stress-free as possible.

At the heart of Integra-estates' philosophy is the belief in honesty and integrity at all times. Thomas appreciates that the industry has a reputation for being rife with deception and dishonesty, he wanted to set his company apart by being transparent and trustworthy. He insisted that all employees act with the utmost integrity and honesty in all their dealings. Thomas Implemented a "putting you first" approach. With the client's best interest at heart, Thomas insists the client comes first.

Integra-estates' commitment to honesty and integrity has been critical to its success. Clients appreciate the peace of mind that comes with working with a company that puts their interests first, and they are more likely to refer their friends and family to Integra-estates as a result. The company's reputation for ethical behaviour has also attracted top talent in the industry, who are proud to work with and for a company that values integrity and honesty.`
    },
    {
      id: 'jenna',
      firstName: 'Jenna',
      lastName: 'Saysell',
      position: 'Sales Executive',
      image: '/images/jenna.jpg',
      info: `Jenna is a new addition to Integra-Estates, her contagious energy and enthusiasm for all things property-related make her stand out from the crowd. Her dedication to exceptional customer care and service, combined with her passion for the property industry, make her an asset to Integra-estates.

Jenna's enthusiasm, energy and love for the property industry is evident in everything she does. She is passionate about helping her clients and making the process as stress-free as possible. Her positive attitude and dedication to exceptional customer care and service make her a valuable asset to the team.

While highly focused on delivering results, Jenna understands that buying or selling a property is a significant decision for her clients, she is committed to providing the highest level of service possible. Jenna takes the time to listen to her clients' needs and concerns, she works tirelessly to ensure that their needs are met throughout the transaction.

Jenna's dedication to honesty and integrity is a testament to her character and values. She understands that trust and transparency are critical in the industry. Her commitment to these principles has earned her the respect and trust of her colleagues and clients alike.`
    },
    {
      id: 'michael',
      firstName: 'Michael',
      lastName: 'Baggott',
      position: 'Sales Director',
      image: '/images/michael.jpg',
      info: `Michael is the Senior Sales Director at Integra-estates with a wealth of experience in the property industry. He is highly respected by his colleagues and clients alike for his dedication to providing exceptional customer service and always putting the customer's needs first.

Michael's career in the property industry began whilst working for an established highly respected legal firm. Michael was approached to set up an estate agency on behalf of the legal practice. Over the years this experience gave him a unique insight into the industry, as he was able to develop the agency's operations and customer service protocols from the ground up. His success in building a thriving agency from scratch is a testament to his ability to identify opportunities and develop effective strategies to achieve his goals. Michael's dedication, focus and beliefs in customer care was rewarded when he achieved estate agent of the year 2021, then runner up in 2022 A prestigious and well respected award in the industry.

At Integra-estates, Michael is known for his unwavering dedication to exceptional customer service. He understands that buying or selling a property can be a stressful and emotional experience, and he is committed to making the process as smooth and stress-free as possible for his clients. He takes the time to understand each client's needs and concerns, and he works tirelessly to ensure that their needs are met throughout the transaction.

Michael's willingness to put the customer at the front of his mind at all times has been critical to his success at Integra-estates. He understands that by prioritising the customer's needs, he can build trust and loyalty, which leads to repeat business and referrals. His focus on customer service has earned him a reputation as a trusted and reliable partner in the property industry.`
    },
    {
      id: 'claudia',
      firstName: 'Claudia',
      lastName: 'Gornell',
      position: 'Office Manager',
      image: '/images/claudia.jpg',
      info: `Claudia is Integra-estates' office manager. With a wealth of knowledge and experience in the industry, Claudia is an integral part of the team. Her expertise in ensuring a property transaction goes smoothly is unparalleled, along with her dedication to providing exceptional customer service.

Over the years, Claudia has built up a considerable number of working relationships, which is a testament to her commitment to getting the job done. She has an incredible ability to navigate the most challenging of property chains and ensure that transactions are completed as quickly and efficiently as possible. Claudia's focus on achieving a positive result is inspiring, her dedication to her clients is second to none.

Claudia's expertise in deal progression is a valuable asset to Integra-estates. Her commitment to exceptional customer service is an inspiration to her colleagues. Claudia's skills and experience make her an indispensable member of the team, and her dedication to her client's satisfaction is a testament to her professionalism and integrity.`
    }
  ]

  const handleCardClick = (member, event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    
    setModalPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    })
    
    setSelectedMember(member)
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedMember(null)
      setIsClosing(false)
    }, 300) // Match the animation duration
  }

  return (
    <>
      <section className="meet-the-team-hero hero">
        <video
          className="hero__video visible"
          src="/video/meet-the-team-cover.mov"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Meet The Team"
        />
        <div className="hero__overlay">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-tag animate-in-up">Meet The Team</h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section" style={{ backgroundColor: '#141414', padding: '4rem 0', minHeight: '400px', position: 'relative', zIndex: 10 }}>
        <AnimatedSection>
          <div className="team-container">
            <h2 className="team-title animate-in-up" style={{ color: '#fff', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Our Team</h2>
            <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', alignItems: 'start' }}>
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="team-member animate-in-up" 
                  data-animate-delay={`${(index + 1) * 200}`}
                  style={{ textAlign: 'center', borderRadius: '8px', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
                  onClick={(e) => handleCardClick(member, e)}
                >
                  <img src={member.image} alt={`${member.firstName} ${member.lastName} - ${member.position}`} className="team-image" />
                  <div className="team-info">
                    <h3 className="team-name" style={{ fontSize: '1.4rem', fontFamily: 'trajan-pro-3, serif', color: '#333', margin: '0 0 0.5rem 0', fontWeight: 'bold', textTransform: 'uppercase', lineHeight: '1.2' }}>
                      <div>{member.firstName}</div>
                      <div>{member.lastName}</div>
                    </h3>
                    <p className="team-role" style={{ color: '#6c9830', fontSize: '1.1rem', margin: '0', fontWeight: '500' }}>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <GetInTouchSection />
      </div>
      
      <ScrollHint />

      {/* Team Member Modal */}
      {selectedMember && (
        <div className={`team-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={closeModal}>
          <div 
            className={`team-modal ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              '--initial-x': `${modalPosition.x}px`,
              '--initial-y': `${modalPosition.y}px`,
              '--initial-width': `${modalPosition.width}px`,
              '--initial-height': `${modalPosition.height}px`
            }}
          >
            <div className="team-modal-content">
              <img src={selectedMember.image} alt={`${selectedMember.firstName} ${selectedMember.lastName}`} className="team-modal-image" />
              
              <h2 className="team-modal-name">
                <span>{selectedMember.firstName}</span>
                <span>{selectedMember.lastName}</span>
              </h2>
              <h3 className="team-modal-position">{selectedMember.position}</h3>
              <div className="team-modal-article">
                <p>{selectedMember.info}</p>
              </div>
              
              <button className="team-modal-close" onClick={closeModal}>×</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
