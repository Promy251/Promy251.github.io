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
          <a className="btn btn-secondary" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero