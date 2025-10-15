import BackgroundVideoSequence from "../components/BackgroundVideoSequence"
import "./globals.css"

export default function Page() {
  return (
    <main className="hero">
      <BackgroundVideoSequence
        sources={[
          "/video/background/home-section-1-1.mp4",
          "/video/background/home-section-1-1.mp4",
        ]}
        crossfadeMs={1500}
        startAt={0}
        poster="/vite.svg"
        className="hero__video"
      />

      <section className="hero__overlay">
        <div>
          <img src="/vite.svg" alt="Logo" width={80} height={80} style={{ opacity: 0.9 }} />
          <h1 style={{ marginTop: 12 }}>The agent you can trust</h1>
          <p style={{ marginTop: 8 }}>
            Delivering exceptional customer service, communication and results.
            <br />
            With honesty and integrity at all times.
          </p>
        </div>
      </section>
    </main>
  )
}