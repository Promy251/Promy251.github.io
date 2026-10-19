import { profile } from '../data'

function Hero() {
  return (
    <section className="container hero" id="top">
      <img className="hero-photo" src={profile.photo} alt={`Photo of ${profile.name}`} />

      <div>
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>

        <div className="hero-buttons">
          <a className="btn btn-primary" href="#research">View research</a>
          <a className="btn btn-secondary" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>

        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}

export default Hero