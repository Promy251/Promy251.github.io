import { projects } from '../data'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">Live demo →</a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noreferrer">Code →</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects