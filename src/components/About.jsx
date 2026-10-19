import { about } from '../data'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        {about.map((paragraph, i) => (
          <p key={i} className="about-text">{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About