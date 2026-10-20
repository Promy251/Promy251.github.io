import { papers } from '../data'

function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <h2 className="section-title">Research</h2>

        <div className="paper-list">
          {papers.map((paper) => (
            <article key={paper.title} className="paper">
              <div className="paper-meta">
                <span className="badge">{paper.status}</span>
                {paper.venue && <span className="venue">{paper.venue}</span>}
              </div>

              <h3 className="paper-title">{paper.title}</h3>
              <p className="paper-authors">{paper.authors}</p>

              {paper.link && (
                <a className="paper-link" href={paper.link} target="_blank" rel="noreferrer">
                  Read paper →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research